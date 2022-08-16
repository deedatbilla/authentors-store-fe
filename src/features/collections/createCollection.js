import { Avatar, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import InputWithIcon from "../../components/InputFields/InputWithIcon";
import Spinner from "../../components/spinner";
import {Button} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));



function CreateCollectionComponent({
  onChange,
  onSubmit,
  loading,
}) {
  const classes = useStyles();
  const [walletAddress, setWalletAddress] = useState(null);
  const [collectionName, setCollectionName] = useState(null);
  const handleWalletUpdate = (e) => {
    setWalletAddress(e.target.value)
  }
  const handleCollection = (e) => {
    setCollectionName(e.target.value)
  }

  const createCollectionPage = (e) => {
    e.preventDefault()
    window.open(`https://authentors-collections.web.app/store?collection=${collectionName}&address=${walletAddress}&limit=2000`);
}
  return (
    <div className="mt-20 h-screen">
      <div className="items-center space-x-4 mx-auto md:max-w-lg ">
      <form>

      </form>
      <div className="py-4 px-6">
<form onSubmit={createCollectionPage}>
<div className="gap-4">
                <div style={{ marginBottom: 20 }}>
                  <InputWithIcon
                    placeholder="Insert wallet of university(the one nfts were minted from)"
                    className=""
                    onChange= {handleWalletUpdate}
                    name="address"
                    type="text"
                    label="Wallet address"
                  />
                </div>
                <div>
                  <InputWithIcon
                    placeholder="Insert title of collection(2-4 words"
                    className=""
                    onChange={handleCollection}
                    name="collectionTitle"
                    type="text"
                    label="Title of collection"
                  />
                </div>
              </div>
              <div className="items-center my-6">
                <button
              type="submit"
             
              className="hover:bg-black col-span-9 bg-blue-800 items-center  py-3 w-full rounded-lg"
            >
              <p className=" font-semibold text-xs text-white">Submit</p>
            </button>

              </div>
</form>
      

    </div>
      </div>
      <Spinner loading={loading} />
    </div>
  );
}

export default CreateCollectionComponent;
