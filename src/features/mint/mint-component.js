import React from "react";
import NftCard from "../../components/cards/nft-card";
import UpdateNftDetailsForm from "../../components/forms/update-nft-details-form";
import ModalBox from "../../components/Modals/ModalBox";

function MintComponent({
  getInputProps,
  getRootProps,
  files,
  handleDeleteItem,
  onChange,
  openEditModal,
  handleSelectedItem,
  handleCloseEditModal,
  handleUpdateItem,
  values,
  connectWallet,
}) {
  return (
    // <div className="flex flex-col h-screen pt-20 text-white bg-black overflow-y-scroll">
     
    //   <div className=" max-w-2xl mx-auto">
    //   <div className="flex">
    //     <button className=" m-4 bg-blue-500 py-2 px-6 z-10" onClick={connectWallet}>Connect</button>
    //   </div>
    //     <p className="text-4xl text-center font-bold">Let's mint</p>
    //     <p className="text-center">
    //       Your objkts will be minted on the Hicetnunc smart contract
    //     </p>
    //     <div className="mt-5">
    //       <p className="font-bold">DROP ONE OR SEVERAL OBJKTS</p>
    //       <p>
    //         We support a few file types: PNG, JPG, GIF, SVG, MP4, WEBM, GLB,
    //         MP3, WAV, FLAC, PDF, MD, HTML (ZIP archive). Nothing more, sorry. Oh
    //         and btw, you can mint up to 500 objkts at once. The max size per
    //         objkt is 100 MB.
    //       </p>

    //       {files.length > 0 ? (
    //         <div className="mt-3">
    //           {files.map((item, idx) => (
    //             <NftCard
    //               key={idx}
    //               handleDeleteItem={handleDeleteItem}
    //               data={item}
    //               handleSelectedItem={handleSelectedItem}
    //             />
    //           ))}
    //           <button className="w-full bg-blue-700 py-2 mt-4">
    //             Mint {files.length} Items
    //           </button>
    //         </div>
    //       ) : (
    //         <div
    //           className=" h-72 border-dashed flex items-center justify-center border mt-3"
    //           {...getRootProps()}
    //         >
    //           <input {...getInputProps()} />
    //           <p>Select or drop your files</p>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    //   <ModalBox
    //     open={openEditModal}
    //     content={
    //       <UpdateNftDetailsForm
    //         handleCloseModal={handleCloseEditModal}
    //         onChange={onChange}
    //         onSubmit={handleUpdateItem}
    //         values={values}
    //       />
    //     }
    //   />
    // </div>

    <iframe
      src="https://hic.af/mint"
      width={"100%"}
      height={1000}
    
    ></iframe>
  );
}

export default MintComponent;
