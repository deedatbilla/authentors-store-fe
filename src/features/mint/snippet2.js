 const handleSubmit = async (values: FormInput) => {
    try {
      setBatchProgress([]);
      setStatus('Uploading files to IPFS...');
      const { objkts: rawObjkts = [] } = values;
      // 1. create compressed files
      const objktsPromises = await Promise.all(rawObjkts.map(async (objkt) => {
        const {
          cover: coverFileCompressed,
          thumbnail: thumbnailFile,
        } = await getCoverAndThumbnail2(objkt);
        return {
          ...objkt,
          coverFileCompressed,
          thumbnailFile,
        } as ObjktInput;
      }));
      const objktsWithFiles = [...objktsPromises] as ObjktInput[];
      // console.log('Got objktsWithFiles.', objktsWithFiles);
      // 2. Got buckets
      const allFilesRaw = objktsWithFiles.reduce((arr, {
        objktFile,
        coverFile,
        coverFileCompressed,
        thumbnailFile,
      }) => [...arr, objktFile, coverFile, coverFileCompressed, thumbnailFile].filter(Boolean), []);
      // 2.a. Upload ZIPs
      // We will upload the ZIP / directory files separately, by unzipping them & uploading to a folder
      const allFilesZip = allFilesRaw.filter(isZipFile);
      const bulkUploadedZip = await bulkUploadZips(allFilesZip, setStatus);
      console.log('Bulk uploaded zips.', bulkUploadedZip);
      // 2.b. Upload non ZIPs
      const allFilesNonZip = allFilesRaw.filter((file) => !isZipFile(file));
      // console.log('Got all files.', allFiles);
      const size = getTotalSize(allFilesNonZip);
      setTotalFileSize(size);
      // console.log('Got total size.', size);
      const maxBatchSize = 100 * (1024 ** 2);
      const buckets = getFileBuckets(allFilesNonZip, maxBatchSize);
      // console.log('Got buckets.', buckets);
      // 3. upload file buckets
      // TODO Need to handle ZIPS
      const bulkUploadPromises = await Promise.all(
        buckets.map(({ files }, index) => bulkUploadFiles2(files, ({ loaded }) => handleFileProgress(loaded, index))),
      );
      setStatus('Successfully uploaded files to IPFS');
      const bulkUploadedNonZip = [...bulkUploadPromises].reduce((arr, items) => [...arr, ...items], []);
      const bulkUploads = [...bulkUploadedZip, ...bulkUploadedNonZip];
      // console.log('Uploaded it all.', bulkUploads);
      // 4. set files metadatas
      const metadataJsons = objktsWithFiles.map(({
        name,
        description,
        tags,
        objktFile,
        coverFile,
        coverFileCompressed,
        thumbnailFile,
      }, index) => getObjktMetadata({
        name: replaceNameIterator(name, index + 1),
        description,
        tags,
        creatorAddress,
        mimeType: isZipFile(objktFile) ? IPFS_DIRECTORY_MIMETYPE : objktFile?.type,
        objktUri: `ipfs://${findFileHash(bulkUploads, objktFile)}`,
        displayUri: `ipfs://${findFileHash(bulkUploads, coverFileCompressed || coverFile)}`,
        thumbnailUri: `ipfs://${findFileHash(bulkUploads, thumbnailFile)}`,
      }));
      // 5. Upload metadata to IPFS
      const metadataFiles = metadataJsons.map(jsonToBlob);
      // console.log('Got metadata files.', metadataFiles);
      setStatus('Uploading metadata to IPFS...');
      const bulkUploadMetaPromise = await bulkUploadFiles2(metadataFiles, ({ loaded, total }) => {
        setStatus(`Uploading metadata to IPFS... ${(loaded / total) * 100}% (${formatBytes(loaded)} / ${formatBytes(total)})`);
      });
      const metadataHashes = [...bulkUploadMetaPromise];
      // console.log('Uploaded metadata.', metadataHashes);
      setStatus('Successfully uploaded metadata to IPFS');
      // 6. Mint tokens
      setStatus('Your wallet will ask for a confirmation, please accept it...');
      const mintInputs = metadataHashes.map(({ hash }, index) => ({
        address: creatorAddress,
        editions: rawObjkts[index].editions,
        royalties: rawObjkts[index].royalties,
        cid: hash,
      }));
      const op = await batchMint(mintInputs);
      setStatus('Mining to the Tezos blockchain... Please wait...');
      const tx = await op.confirmation();
      setStatus(`Mint complete! It may take up to 5 minutes to show up on your profile. View your transaction here: https://tzkt.io/${op.opHash}`);
      console.log('Mined!', tx);
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    }
  };

  const getCoverAndThumbnail2 = async (objkt: ObjktInput): Promise<{
    cover: Blob;
    thumbnail: Blob;
  }> => {
    const {
      objktFile,
      coverFile,
    } = objkt;
    const fileForCover = objktFile.type?.includes('image') ? objktFile : coverFile;
    const isGif = fileForCover?.type === MIMETYPE.GIF;
    const cover = isGif ? fileForCover : await compressImage(fileForCover, coverOptions);
    const thumbnail = isGif ? fileForCover : await compressImage(fileForCover, thumbnailOptions);
    return { cover, thumbnail };
  };

  export const compressImage = (file, options): Promise<Blob> => new Promise(async (resolve, reject) => {
    // eslint-disable-next-line no-new
    new Compressor(file, {
      ...options,
      success(blob) {
        resolve(blob);
      },
      error(err) {
        reject(err);
      },
    });
  });