import React from "react";
import logo from "../../public/images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Rooms</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Pages</a>
            </li>
          </ul>
        </div>
        <img className="w-32 md:w-40" src={logo} alt="Logo" />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Rooms</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Pages</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end space-x-1">
        <ul>
          <li>
            <a>Login/Signup</a>
          </li>
        </ul>
        <a className="hidden md:flex btn btn-outline rounded-3xl bg-[#CEAF83] text-white font-semibold">
          Reservation
        </a>
      </div>
    </div>
  );
};

export default Navbar;
