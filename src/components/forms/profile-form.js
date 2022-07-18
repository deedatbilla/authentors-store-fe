import React from 'react'
import  InputWithIcon  from "../InputFields/InputWithIcon";
function ProfielForm({handleCloseModal}) {
  return (
    <div className="bg-white  md:max-w-lg    w-full md:rounded-12 rounded-tl-34 rounded-tr-34">
          <div className="md:py-3 dark:border-primary-800 md:px-6 py-5 px-7 flex items-center md:justify-start justify-center border-primary-300 border-b-2">
            <p className="font-bold text-dark dark:text-white text-base">Complete your profile</p>
          </div>
          <div className="py-4 px-6">
            <form >
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
                  type="submit"
                  className="hover:bg-secondary-800 col-span-9 bg-black items-center  py-3 rounded-16"
                >
                  <p className=" font-semibold text-xs text-white">Continue</p>
                </button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default ProfielForm