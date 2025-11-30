import React from "react";
import ProjectCard from "./ProjectCard";
import MarqueeProject from "./MarqueeProject";

const Project = () => {
  return (
    <div className="min-h-screen max-w-4xl flex flex-col c-padding text-white">
      <div className="glassyBg rounded-3xl flex justify-center gap-8 ">
        <div className=" rounded-3xl flex gap-8 items-center ">
          <div className="bg-linear-to-r from-orange-400  to-chart-1 to-70% w-10 h-5 rounded-full"></div>
          <div className="text-7xl font-bold p-6 text-center">Selected Work</div>
          <div className="bg-linear-to-r from-chart-1 from-15%  to-orange-400  w-10 h-5 rounded-full"></div>
        </div>
      </div>
      <ProjectCard />
      <MarqueeProject />
    </div>
  );
};

export default Project;
