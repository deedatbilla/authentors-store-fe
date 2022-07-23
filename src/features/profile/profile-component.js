import { Avatar, makeStyles } from "@material-ui/core";
import { FileCopy } from "@material-ui/icons";
import React from "react";
import UploadCertificateForm from "../../components/forms/upload-certificate-form";
import InputWithIcon from "../../components/InputFields/InputWithIcon";
import ModalBox from "../../components/Modals/ModalBox";
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));
function ProfileComponent({
  handleChangeTab,
  activeTab,
  tabs,
  user,
  handleOpenModal,
  handleCloseModal,
  openModal,
}) {
  const classes = useStyles();
  const renderView = () => {
    switch (activeTab) {
      case "Profile":
        return (
          <div className="py-4 px-6">
            <form>
              <div className=" grid grid-cols-2 gap-4">
                <div>
                  <InputWithIcon
                    placeholder="Full name"
                    className=""
                    required
                    type="text"
                    //   error={!withdrawalAmount === wallets.find((w) => w.currency === "USD").balance}
                    //   onChange={onChange}
                    label="Full name"
                  />
                </div>

                <div>
                  <InputWithIcon
                    placeholder="Email"
                    className=""
                    required
                    type="email"
                    //   error={!withdrawalAmount === wallets.find((w) => w.currency === "USD").balance}
                    //   onChange={onChange}
                    label="Email"
                  />
                </div>

                <div>
                  <InputWithIcon
                    placeholder="Phone"
                    className=""
                    required
                    type="email"
                    //   error={!withdrawalAmount === wallets.find((w) => w.currency === "USD").balance}
                    //   onChange={onChange}
                    label="Phone"
                  />
                </div>

                <div>
                  <InputWithIcon
                    placeholder="Bio"
                    className=""
                    required
                    type="email"
                    //   error={!withdrawalAmount === wallets.find((w) => w.currency === "USD").balance}
                    //   onChange={onChange}
                    label="Bio"
                  />
                </div>

                <div>
                  <InputWithIcon
                    placeholder="Location"
                    className=""
                    required
                    type="email"
                    //   error={!withdrawalAmount === wallets.find((w) => w.currency === "USD").balance}
                    //   onChange={onChange}
                    label="Location"
                  />
                </div>
                <div>
                  <InputWithIcon
                    placeholder="Twitter profile"
                    className=""
                    required
                    type="email"
                    //   error={!withdrawalAmount === wallets.find((w) => w.currency === "USD").balance}
                    //   onChange={onChange}
                    label="Twitter profile"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 my-6">
                <button
                  type="submit"
                  className="hover:bg-secondary-800 col-span-9 bg-black items-center  py-3 rounded-16"
                >
                  <p className=" font-semibold text-xs text-white">Continue</p>
                </button>
              </div>
            </form>
          </div>
        );
      case "Certificates":
        return (
          <div className="flex items-center justify-center flex-col h-full py-16">
            <p className="text-3xl">No Nft Certificates in your collection yet</p>
            <button onClick={handleOpenModal} className="text-blue-400">
              Click here to upload your certificate
            </button>
          </div>
        );
      default:
        break;
    }
  };
  return (
    <div className="p-20">
      <div className="flex items-center space-x-4">
        <Avatar src={user?.userData?.profileImage} className={classes.large} />
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-3">
            <p>{user?.pkh}</p>
            <FileCopy color="black" />
          </div>
          <div className="flex items-center space-x-3">
            <p>0 Nfts</p>
            <button
              onClick={handleOpenModal}
              className="px-4 py-2 bg-blue-600 text-white rounded-full"
            >
              Upload certificate
            </button>
          </div>
          <p>Joined in July , 2022</p>
          <p className="text-red-600 text-xs">
            Certificates that are not yet marked as Authenticated, have been
            uploaded by user, and have not yet been Authenticated by the Issuer
            of the Certificate. In case of data integrity issue, certification
            will be removed
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center space-x-3 border-b border-gray-300">
          {tabs.map((item) => (
            <button
              onClick={() => handleChangeTab(item)}
              className={`px-2 py-1 ${
                activeTab === item ? "border-b-2 border-black" : ""
              }`}
            >
              <p>{item}</p>
            </button>
          ))}
        </div>

        {renderView()}
      </div>
      <ModalBox
        open={openModal}
        content={<UploadCertificateForm handleCloseModal={handleCloseModal} />}
      />
    </div>
  );
}

export default ProfileComponent;
