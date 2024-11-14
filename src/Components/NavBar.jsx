import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  var data = [
    { name: "Home", path: "/" },
    { name: "projects", path: "/project" },
    { name: "Blogs", path: "/blog" },
    { name: "contacts", path: "/contact" },
  ];

  return (
    <nav className="ml-[13vw] flex justify-evenly w-[50%] bg-white min-w-[40%] rounded-full p-[1rem] mt-10 text-2xl">
      {data.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={` ${
            index !== data.length - 1 ? "border-r-2" : ""
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
