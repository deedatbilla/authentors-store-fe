import React from "react";

function ModalFormLayout({ title, children }) {
  return (
    <div className="bg-white  md:max-w-lg w-full md:rounded-12 rounded-tl-34 rounded-tr-34">
      <div className="md:py-3 dark:border-primary-800 md:px-6 py-5 px-7 flex items-center md:justify-start justify-center border-primary-300 border-b-2">
        <p className="font-bold text-dark dark:text-white text-base">{title}</p>
      </div>
      {children}
    </div>
  );
}

export default ModalFormLayout;
