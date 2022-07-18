import { EyeClose, EyeOpen } from "assets";
import React, { useState } from "react";

function InputWithIcon({
  icon,
  className,
  error,
  onChange,
  placeholder,
  required,
  label = "Password",
  name = "password",
  minLength,
  maxLength,
  ...props
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col my-1">
      <p className="text-sm text-dark ml-2 dark:text-white">{label}</p>
      <div className="flex w-full bg-primary-200 rounded-16 dark:bg-primary-800">
        <input
          required
          data-testid="input"
          name={name}
          className={` text-dark w-full dark:text-white dark:bg-primary-800 rounded-16 bg-primary-200 mt-0 px-3 py-4 `}
          type={show ? "text" : "password"}
          onChange={onChange}
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          // {...props}
        />

        <span
          onClick={() => setShow(!show)}
          className="flex justify-center items-center px-4"
        >
          {show ? <EyeClose className="w-6" /> : <EyeOpen className="w-6" />}
        </span>
      </div>
      {error ? <p className="text-xs ml-2 text-red">{error}</p> : null}
    </div>
  );
}

export default InputWithIcon;
