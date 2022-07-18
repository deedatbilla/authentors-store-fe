import { SearchRounded, ShoppingCart } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/authentors.webp";
function NavHeader() {
  return (
    <div className=" flex items-center justify-between  px-10 py-4 shadow-lg w-full sticky top-0 bg-white">
      <img src={logo} width={200} alt="logo" />

      <a href="#why">
        <p>Why authentors?</p>
      </a>
      <a href="#graduate">
        <p>Graduate solution</p>
      </a>
      <a href="#learn">
        <p>Educator solution</p>
      </a>
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
