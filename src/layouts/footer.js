import React from "react";
function Footer() {
  return (
    <div className="flex flex-col items-center justify-center shadow-lg">
      <div className="">
        <img src="/img/logo2.webp" width={190} alt="r" />
        <p>Copyright © {new Date().getFullYear()} authentors</p>
      </div>
    </div>
  );
}

export default Footer;
