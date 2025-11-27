import { selectedWork } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProjectCard = () => {
  const work = selectedWork;
  return (
    <div className=" rounded-3xl grid grid-cols-1 gap-8 mt-10 relative">
      {work.map((item) => (
        <div key={item.id} className="max-w-5xl rounded-3xl flex gap-8 items-center relative">
          {/* Image */}
          <Image src={item.image} width={900} height={700} alt="ProjectCard" className="rounded-3xl w-full h-[600px] object-cover " />

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-3xl flex items-end justify-center py-10">
            <div className="w-4xl bg-black/50 backdrop-blur-xl group rounded-3xl p-4 flex items-center justify-between gap-4">
              <div className="space-y-4 ml-4 py-2">
                <div className="space-y-3">
                  <h3 className="text-xl">{item.description}</h3>
                  <p className="text-5xl font-bold group-hover:text-chart-1">{item.name}</p>
                </div>

                <div className="rounded-full text-gray-200 text-normal">
                  <p className="w-fit glassyBg px-4 py-2 rounded-full">{item.year}</p>
                </div>
              </div>

              <div className="w-36 h-36 flex items-center justify-center border border-secondary group-hover:border-chart-1 rounded-3xl">
                <ArrowUpRight className="w-12 h-12 group-hover:text-chart-1" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
