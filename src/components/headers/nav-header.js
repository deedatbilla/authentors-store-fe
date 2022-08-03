import { Avatar } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/img/authentors.webp";
import { getAuth } from "../../features/authentication/authentication-reducer";
import { signOut } from "../../features/authentication/authentication-saga";
function NavHeader() {
  const user = useSelector(getAuth);
  const dispatch = useDispatch();
  return (
    <div className="shadow-lg">
      <div className=" flex items-center   px-10 py-4  w-full sticky top-0 bg-white z-50 mx-auto max-w-screen-2xl">
        <Link to={"/"}>
          <img src={logo} width={200} alt="logo" />
        </Link>

        <div className="lg:flex items-center justify-between w-full ml-3 hidden ">
          <a href="#why">
            <p>Why Authentors?</p>
          </a>
          <a href="#graduate">
            <p>Graduate Solution</p>
          </a>
          <a href="#learn">
            <p>Educator Solution</p>
          </a>
          <a
            target="blank"
            rel="no-referer"
            href="https://authentors-collections.web.app/store?collection=CPA+Union+of+Israel&address=tz1ZXvvKgCDkfsjeVjaU5Y2EFFzGz7PXtQwz&limit=2000"
          >
            <p>Market Place</p>
          </a>
          <Link>
            <p>News</p>
          </Link>
          <a href="#aboutUs">
            <p>About Us</p>
          </a>
          <a href="mailto:meirav@mhfintechs.com">
            <p>Contact Us</p>
          </a>
          {user && (
            <div className="flex items-center space-x-3">
              <Link to="/profile">
                <Avatar />
              </Link>
              <button onClick={() => dispatch(signOut())}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavHeader;
