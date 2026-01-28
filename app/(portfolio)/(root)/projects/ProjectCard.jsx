"use client";

import GsapleftAnimation from "@/components/ui/GsapleftAnimation";
import ProjectCardSkeleton from "@/components/ui/ProjectCardSkeleton";
import { getProjects } from "@/lib/api/projects/api-projects";
import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getProjects();
        console.log("Fetched projects:", data);
        setProjects(data.data);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  if (loading) return <ProjectCardSkeleton count={3} />;

  return (
    <div className="rounded-3xl grid grid-cols-1 gap-6 xl:gap-10 mt-10 relative">
      {projects.map((item) => (
        <GsapleftAnimation key={item.id}>
          <div className="max-w-3xl rounded-3xl flex gap-8 items-center relative">
            {/* Image */}
            <img src={item.image || "/asset/project/p1.avif"} alt={item.title} className="rounded-3xl w-full h-[300px] xl:h-[600px] object-cover" />

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-3xl flex items-end justify-center md:py-2 lg:py-6 xl:py-10">
              <div className="w-2xl bg-black/50 backdrop-blur-xl group rounded-3xl py-2 px-4 xl:p-5 flex items-center justify-between gap-4">
                <div className="xl:space-y-2 py-2">
                  <div className="space-y-2">
                    <h3 className="xl:text-lg">{item.description}</h3>
                    <p className="text-xl xl:text-3xl font-bold group-hover:text-chart-1">{item.title}</p>
                  </div>

                  <div className="rounded-full text-gray-200 text-normal">
                    <p className="w-fit glassyBg px-2 py-1 xl:px-4 xl:py-2 rounded-full">{item.year}</p>
                  </div>
                </div>

                <div className="w-16 h-16 xl:w-32 xl:h-32 flex items-center justify-center border border-secondary group-hover:border-chart-1 rounded-3xl">
                  <ArrowUpRight className="xl:w-10 xl:h-10 group-hover:text-chart-1" />
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
