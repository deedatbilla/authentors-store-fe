import { SearchRounded, ShoppingCart } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/authentors.webp";
function NavHeader() {
  return (
    <div className=" flex items-center justify-between  px-10 py-4 shadow-lg w-full">
      <img src={logo} width={150} alt="logo" />

      <Link to={"/"}>
        <p>Why authentors</p>
      </Link>
      <Link>
        <p>Graduate solution</p>
      </Link>
      <Link>
        <p>Educator solution</p>
      </Link>
      <Link>
        <p>Market place</p>
      </Link>
      <Link>
        <p>News</p>
      </Link>
      <Link>
        <p>About us</p>
      </Link>
      <Link>
        <p>Contact us</p>
      </Link>
    </div>
  );
}

export default NavHeader;
