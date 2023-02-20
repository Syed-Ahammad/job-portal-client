import React from "react";

const Navbar = () => {
  const menu = <>
  <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#616f39] rounded-box w-52"
          >
            <li>
              <a href=" ">Homepage</a>
            </li>
            <li>
              <a href=" ">Portfolio</a>
            </li>
            <li>
              <a href=" ">About</a>
            </li>
          </ul>
        </div>
  </>;
  return (
    <div className="navbar bg-[#a7d129] sticky top-0 h-20 text-primary-content">
      <div className="navbar-start md:hidden">
        {menu}
      </div>
      <div className="md:navbar-center navbar-start">
        <a href=" " className="btn btn-ghost normal-case text-xl">Job Portal</a>
      </div>
      <div className="md:navbar-center hidden md:block">
      <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Item 3</a></li>
    </ul>
      </div>
      <div className="navbar-end">
      <button className="btn bg-[#616f39]">Button</button>
<button className="btn bg-[#3e432e] ml-3">Button</button>
      </div>
    </div>
  );
};

export default Navbar;
