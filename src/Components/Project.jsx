// enter data properly
import React from "react";
import Technology from "./config.js/Technology";
import ProjectAction from "./ProjectAction";

const Project = ({ title, description, image, technologies, actions }) => {
  return (
    <div className="md:max-w-[75%] md:min-h-[400px] md:min-w-min rounded-xl border-[.1px]  p-5 flex flex-col md:flex-row justify-center md:gap-10 items-center ">
      <picture className=" w-20 sm:max-h-[200px] lg:max-h-[250px] sm:min-w-[200px] lg:max-w-[250px] border-gray-300 border-2 h-[60%]  ">
        {/* <source srcSet='./image/fig.png' /> */}
        <img
          src={image}
          alt="Aniket project image"
          className=" object-cover  w-full h-full"
        />
      </picture>

      <div
        id="dets"
        className="w-[65%] h-full p-5 flex flex-col items-center "
      >
        <div id="upper" className=" min-w-min ">
          <div id="tech-cover" className="p-2 ">
            <h1 className="font-bold my-4 text-2xl">{title}</h1>
            <p className="font-medium">{description}</p>
          </div>

          {/* <div id="tech_used" className=" flex gap-[12px] flex-wrap mt-4 ">
            {technologies.map((item, index) => (
              <Technology key={index} tech={item} />
            ))}
          </div> */}
        </div>

        <div id="lower" className=" flex flex-col  md:flex-row  sm:mt-11 flex-wrap items-center gap-2">
          {actions.map((action, index) => (
            <ProjectAction text={action.text} icon={action.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
