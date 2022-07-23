import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/img/authentors.webp";
import { getAuth } from "../../features/authentication/authentication-reducer";
function NavHeader() {
  const user = useSelector(getAuth);
  console.log(user);
  return (
    <div className=" flex items-center   px-10 py-4 shadow-lg w-full sticky top-0 bg-white z-50">
      <Link to={"/"}>
        <img src={logo} width={200} alt="logo" />
      </Link>

      <div className="lg:flex items-center justify-between w-full ml-3 hidden ">
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
        {user && (
          <Link to="/profile">
            <Avatar />
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavHeader;
