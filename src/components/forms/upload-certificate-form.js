import React from "react";
import ModalFormLayout from "../../layouts/modal-form-layout";
import InputWithIcon from "../InputFields/InputWithIcon";
import DropDownComponent from "../InputFields/DropDownComponent";
import { countries } from "../../data/countries";
function UploadCertificateForm({ handleCloseModal }) {
  return (
    <ModalFormLayout title={"Upload your certificate"}>
      <div className="py-4 px-6">
        <form>
          <div>
            <DropDownComponent
              name="country"
              // onChange={handleChange}
              // onBlur={handleBlur}
              placeholder="Select your country"
              label="Country of issue"
              items={countries.map((item) => ({
                key: item.label,
                value: item.label,
              }))}
            />
          </div>

          <div>
            <InputWithIcon
              placeholder="College Name Name"
              className=""
              required
              type="text"
              //   error={!withdrawalAmount === wallets.find((w) => w.currency === "USD").balance}
              //   onChange={onChange}
              label="College Name Name"
            />
          </div>

          <div>
            <InputWithIcon
              placeholder="Degree or course name"
              className=""
              required
              type="text"
              //   error={!withdrawalAmount === wallets.find((w) => w.currency === "USD").balance}
              //   onChange={onChange}
              label="Degree or course name"
            />
          </div>

          <div>
            <InputWithIcon
              placeholder="Description of certificate"
              className=""
              required
              type="text"
              //   error={!withdrawalAmount === wallets.find((w) => w.currency === "USD").balance}
              //   onChange={onChange}
              label="Description of certificate"
            />
          </div>

          <div>
            <InputWithIcon
              placeholder="Select certificate file"
              className=""
              required
              type="file"
              //   error={!withdrawalAmount === wallets.find((w) => w.currency === "USD").balance}
              //   onChange={onChange}
              label="Select certificate file"
            />
            <p className="text-xs text-blue-500 mt-3">
              For best quality NFT minting results, we suggest that you submit a
              high quality scanned image of your certificate
            </p>
          </div>

          <div className="grid grid-cols-12 gap-4 my-6">
            <button
              onClick={handleCloseModal}
              type="button"
              className=" col-span-3 white border border-primary-400 items-center py-3 rounded-16"
            >
              <p className=" font-semibold text-xs text-dark">Cancel</p>
            </button>
            <button
              type="submit"
              className="hover:bg-secondary-800 col-span-9 bg-black items-center  py-3 rounded-16"
            >
              <p className=" font-semibold text-xs text-white">Upload</p>
            </button>
          </div>

          <p className="text-xs text-red-500 mt-3">
            Please notice that by uploading your Certificate, you are showcasing
            to the world that it is yours. Therefore, when Certificate will be
            tested for Authenticity, in case it is not-authentic, this will be
            easily visible to anyone viewing your page. So think twice. In case
            of data integrity issue, certification will be removed, and Legal
            Action may follow
          </p>
        </form>
      </div>
    </ModalFormLayout>
  );
}

export default UploadCertificateForm;
