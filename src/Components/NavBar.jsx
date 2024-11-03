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
    
      <nav className="flex justify-between w-[100vw] bg-red-400">
        <div className="w-[8vh] h-[8vh] rounded-full border-2 bg-black "></div>

        <div className="flex justify-evenly mr-[20%] bg-white  min-w-[40%] border-black border-2 rounded-full p-[1rem] text-2xl ">
          {data.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={` ${
                index !== data.length - 1 ? "border-r-2" : ""
              } px-[2rem] `}
              style={{ fontSize: "1.4rem", fontWeight: "400" }}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>

  );
};

export default NavBar;
