import React from "react";
import { useHistory } from "react-router-dom";
import ModalFormLayout from "../../layouts/modal-form-layout";
import InputWithIcon from "../InputFields/InputWithIcon";
function ProfielForm({ handleCloseModal }) {
  const history = useHistory();
  return (
    <ModalFormLayout title={"Complete your profile"}>
      <div className="py-4 px-6">
        <form>
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

          <div className="grid grid-cols-12 gap-4 my-6">
            <button
              onClick={handleCloseModal}
              type="button"
              className=" col-span-3 white border border-primary-400 items-center py-3 rounded-16"
            >
              <p className=" font-semibold text-xs text-dark">Cancel</p>
            </button>
            <button
              type="button"
              onClick={() => history.push("/profile")}
              className="hover:bg-secondary-800 col-span-9 bg-black items-center  py-3 rounded-16"
            >
              <p className=" font-semibold text-xs text-white">Continue</p>
            </button>
          </div>
        </form>
      </div>
    </ModalFormLayout>
  );
}

export default ProfielForm;
