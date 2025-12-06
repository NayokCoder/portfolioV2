import GsapleftAnimation from "@/components/ui/GsapleftAnimation";
import { selectedWork } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProjectCard = () => {
  const work = selectedWork;
  return (
    <div className=" rounded-3xl grid grid-cols-1 gap-8 mt-12  relative">
      {work.map((item) => (
        <GsapleftAnimation key={item.id}>
          <div key={item.id} className="max-w-4xl rounded-3xl flex gap-8 items-center relative">
            {/* Image */}
            <Image src={item.image} width={900} height={700} alt="ProjectCard" className="rounded-3xl w-full h-[600px] object-cover " />

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-3xl flex items-end justify-center py-10">
              <div className="w-2xl bg-black/50 backdrop-blur-xl group rounded-3xl p-5 flex items-center justify-between gap-4">
                <div className="space-y-2 py-2">
                  <div className="space-y-2">
                    <h3 className="text-lg">{item.description}</h3>
                    <p className="text-3xl font-bold group-hover:text-chart-1">{item.name}</p>
                  </div>

                  <div className="rounded-full text-gray-200 text-normal">
                    <p className="w-fit glassyBg px-4 py-2 rounded-full">{item.year}</p>
                  </div>
                </div>

                <div className="w-32 h-32 flex items-center justify-center border border-secondary group-hover:border-chart-1 rounded-3xl">
                  <ArrowUpRight className="w-10 h-10 group-hover:text-chart-1" />
                </div>
              </div>
            </div>
          </div>
        </GsapleftAnimation>
      ))}
    </div>
  );
};

export default ProjectCard;
