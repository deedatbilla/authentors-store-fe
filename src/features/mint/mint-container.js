import React, { useCallback, useEffect, useState } from "react";
import MintComponent from "./mint-component";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-sdk";
import { useDropzone } from "react-dropzone";
const Tezos = new TezosToolkit("https://rpc.ghostnet.teztnets.xyz/");
const wallet = new BeaconWallet({
  name: "Authentors",
  preferredNetwork: NetworkType.ITHACANET,
});
Tezos.setWalletProvider(wallet);
// const contractAddress = "KT1Hkg5qeNhfwpKW4fXvq7HGZB9z2EnmCCA9";
const contractAddress = "KT1U53EyJDvd7qzrcCsLF38ReJ9iPBXKNkRu";
function MintContainer() {
  const [files, setFiles] = useState([]);
  const [tezConfig, setTezConfig] = useState({
    wallet: undefined,
    contract: undefined,
    userAddress: undefined,
    storage: undefined,
    userBalance: 0,
    beaconConnection: false,
  });
  const [loading, setLoading] = useState();
  const [values, setValues] = useState({
    itemName: "",
    description: "",
    tags: "",
    editions: "",
    royalties: "",
  });
  const [selectedItem, setSelectedItem] = useState();
  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleSelectedItem = (data) => {
    setSelectedItem(data);
    const o = {
      ...values,
      ...data,
      size: data.size,
      lastModified: data.lastModified,
      name: data.name,
      type: data.type,
    };

    console.log(data, o);
    setValues(o);
    handleOpenEditModal();
  };
  useEffect(() => {
   init()
  }, [])
  console.log(tezConfig.contract)
  const connectWallet = async () => {
    try {
      setLoading(true)
      console.log("Requesting permissions...");
      const permissions = await wallet.client.requestPermissions({
        network: {
          type: NetworkType.GHOSTNET,
          rpcUrl: "https://rpc.ghostnet.teztnets.xyz/",
        },
      });
      console.log("Got permissions:", permissions.address);

      // await wallet.client.requestPermissions();

      // gets user's address
      const userAddress = await wallet.getPKH();
      await init();
      setLoading(false)
      console.log("Got permissions:", userAddress);
    } catch (error) {
      console.log("Got error:", error);
      setLoading(false)
    }
  };
  const init = async () => {
    try {
      setLoading(true);
      const activeAccount = await wallet.client.getActiveAccount();

      if (activeAccount) {
        // User already has account connected, everything is ready
        // You can now do an operation request, sign request, or send another permission request to switch wallet
        const balance = await Tezos.tz.getBalance(activeAccount.address);
        // console.log(balance.toNumber());
        // creates contract instance
        const contract = await Tezos.wallet.at(contractAddress);

        const storage = await contract.storage();

        console.log("Already connected:", activeAccount.address);
        setTezConfig({
          ...tezConfig,
          userAddress: activeAccount.address,
          beaconConnection: true,
          userBalance: balance.toNumber(),
          storage,
          contract,
        });
       
      } else {
        // The user is not connected. A button should be displayed where the user can connect to his wallet.
        console.log("Not connected!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const onDrop = useCallback((acceptedFiles) => {
    const f = acceptedFiles.map((file, index) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        description: "",
        editions: 1,
        royalties: 20,
        id: index + 1,
        itemName: "",
        tags: "",
      })
    );
    setFiles(f);
  }, []);
  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };
  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };
  const handleDeleteItem = (id) => {
    const filtered = files.filter((item) => item.id !== id);
    setFiles(filtered);
  };
  const handleUpdateItem = (e) => {
    e.preventDefault();
    const itemIndex = files.findIndex((item) => item.id === selectedItem.id);
    let tempArray = [...files];
    let update = tempArray[itemIndex];
    update = {
      ...update,
      ...values,
    };
    console.log(update);
    tempArray[itemIndex] = update;
    setFiles(tempArray);
    setValues({
      itemName: "",
      description: "",
      tags: "",
      editions: "",
      royalties: "",
    });
    handleCloseEditModal();
  };
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
  });

  return (
    <MintComponent
      getRootProps={getRootProps}
      getInputProps={getInputProps}
      acceptedFiles={acceptedFiles}
      files={files}
      onChange={onChange}
      handleDeleteItem={handleDeleteItem}
      openEditModal={openEditModal}
      handleSelectedItem={handleSelectedItem}
      handleCloseEditModal={handleCloseEditModal}
      handleUpdateItem={handleUpdateItem}
      values={values}
      connectWallet={connectWallet}
    />
  );
}

export default MintContainer;
