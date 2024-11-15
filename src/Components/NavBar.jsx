import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css"

const NavBar = () => {
  var data = [
    { name: "Home", path: "/" },
    { name: "projects", path: "/project" },
    { name: "Blogs", path: "/blog" },
    { name: "contacts", path: "/contact" },
  ];

  return (
    <nav className="ml-[13vw] flex justify-evenly w-[50%] sticky  max-w-[60%] border-white border-[.4px]  rounded-full p-[1rem] mt-10 text-[1px] ">
      {data.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={` ${
            index !== data.length - 1 ? " border-zinc-100 border-r-[.4px] " : ""
          } px-[2rem]`}
          style={{ fontSize: "1.4rem", fontWeight: "400" }}
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
