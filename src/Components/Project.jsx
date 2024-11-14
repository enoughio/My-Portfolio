// enter data properly

import React from "react";
import Technology from "./config.js/Technology";
import ProjectAction from "./ProjectAction";

const Project = () => {
  return (
    <div className="w-[65%] rounded-xl bg-white h-[50vh]  p-5 flex justify-center gap-10 items-center ">
      <picture className="w-[30%] border-gray-300 border-2 h-[60%]  ">
        {/* <source srcSet='./image/fig.png' /> */}
        <img
          src="./images/image.jpeg"
          alt="Aniket project image"
          className=" object-cover  w-full h-full"
        />
      </picture>

      <div
        id="dets"
        className="w-[65%] h-full border-sky-400 border-2 p-5 flex flex-col items-center "
      >
        <div id="upper" className="max-w-[85%] border-red-300 border-2 ">
          <div id="tech-cover" className="p-2 ">
            <h1 className="font-bold my-4 text-2xl">Heading</h1>
            <p className="font-medium">
              It is a long established fact that a is that it has a more-or-less
              normal distribution of letters, as opposed to using 'Content here,
            </p>
          </div>

          <div id="tech_used" className=" flex gap-[12px] flex-wrap mt-4 ">
            <Technology />
            <Technology />
            <Technology />
            <Technology />
            <Technology />
          </div>
        </div>

        <div id="lower" className="flex mt-3 justify-center items-center gap-2">
          <ProjectAction />
          <ProjectAction icon={true} />
          <ProjectAction icon={true} />
        </div>


      </div>
    </div>
  );
};

export default Project;
