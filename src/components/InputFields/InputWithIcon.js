import React from "react";

function InputWithIcon({
  icon,
  icon1,
  className,
  type,
  error,
  placeholder,
  disabled,
  label,
  showErrorMessage = true,

  ...props
}) {
  // const ring = error ? `ring-1 ring-secondary` : "";
  return (
    <div className="flex flex-col my-1">
      <p className="text-sm text-dark ml-2 dark:text-white">{label}</p>
      <input
        autoComplete="off"
        className={`${className} ${
          error ? "ring-1 ring-red" : ""
        } text-dark dark:text-white rounded-16 bg-primary-200 dark:bg-primary-800 mt-0 px-3 py-4`}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />
      {error && showErrorMessage ? (
        <p className="text-xxs ml-2 text-red">{error}</p>
      ) : null}
      {icon ? (
        <span className="flex justify-center items-center px-4">
          <i className={icon}></i>
        </span>
      ) : null}
    </div>
  );
}

export default InputWithIcon;
