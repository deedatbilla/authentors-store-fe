import React from "react";
import { useHistory } from "react-router-dom";
import ModalFormLayout from "../../layouts/modal-form-layout";
import InputWithIcon from "../InputFields/InputWithIcon";
function UpdateNftDetailsForm({ handleCloseModal, onSubmit, onChange,values }) {
  const history = useHistory();
  return (
    <ModalFormLayout title={"Edit Item Metadata"}>
      <div className="py-4 px-6">
        <form onSubmit={onSubmit}>
          <div>
            <InputWithIcon
              placeholder="name"
              className=""
              required
              value={values.itemName}
              type="text"
              name="itemName"
              onChange={onChange}
              label="Name"
            />
            {/* <p className="text-xs">
              Will be the title of your piece. You can set a counter to each
              piece of the series by setting a value between curly braces. The
              character "i" will be replaced by the position of your objkt in
              the list. For example, "Item #{i}" will turn into "Item #1" for
              the first objkt of the list, and "Item #{41 + i}" will turn into
              "Item #42".
            </p> */}
          </div>

          <div>
            <InputWithIcon
              placeholder="Description"
              className=""
              value={values.description}
              name="description"
             
              type="text"
              onChange={onChange}
              label="Description"
            />
          </div>

          <div>
            <InputWithIcon
              placeholder="Comma separated (example: illustration, digital)"
              className=""
              value={values.tags}
             
              name="tags"
              type="text"
              onChange={onChange}
              label="Tags (Comma separated (example: illustration, digital))"
            />
          </div>

          <div>
            <InputWithIcon
             value={values.editions}
              placeholder="Editions"
              className=""
              name="editions"
              required
              type="number"
              onChange={onChange}
              label="Editions (How many editions will you mint?)"
            />
          </div>
          <div>
            <InputWithIcon
              placeholder="Royalties"
              className=""
              required
              name="royalties"
              value={values.royalties}
              type="number"
              onChange={onChange}
              label="Royalties (Received every time your objkt gets sold)"
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
              type="submit"
             
              className="hover:bg-secondary-800 col-span-9 bg-black items-center  py-3 rounded-16"
            >
              <p className=" font-semibold text-xs text-white">Update</p>
            </button>
          </div>
        </form>
      </div>
    </ModalFormLayout>
  );
}

export default UpdateNftDetailsForm;
