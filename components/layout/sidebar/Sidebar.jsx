"use client";

import Image from "next/image";
import { FaDribbble, FaInstagram, FaFacebook } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { ArrowUpRight } from "lucide-react";
import StartedButton from "@/components/startedButton/StartedButton";

const Sidebar = () => {
  const classValue = [
    {
      width: "w-72",
      minWidth: "min-w-72",
    },
    {
      bgColour: "bg-secondary",
    },
  ];
  return (
    <div className={`flex items-center  `}>
      <div className="flex flex-col items-center gap-6 w-xl sidebar-card p-6 rounded-3xl shadow-xl relative">
        <div className="flex items-center gap-3 border border-ring py-2 px-6 rounded-full">
          <sapn className="text-chart-1 list-disc">
            <div className="w-3 h-3 bg-chart-1 rounded-full"></div>
          </sapn>
          <h1 className="text-secondary-content text-base">
            Available for <span className="text-secondary">3 projects</span>
          </h1>
        </div>
        {/* Profile Image */}
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/asset/unnamed.jpg" // put your image in public/ folder
            alt="Profile"
            width={300}
            height={250}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="absolute top-7/13 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-24">
          <img src="/asset/Ferdous-signeture.png" alt="" className="object-cover w-full" />
        </div>

        <div className="mt-16">
          {/* Name */}
          <h2 className="text-2xl font-semibold text-muted-foreground">ferdous.anon@gmail.com</h2>
          <h4 className="text-muted-foreground text-center">Based in Dhaka, Bangladesh</h4>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl text-secondary">
          <a href="#" className="social-icon w-10 h-10 glassyBg rounded-full flex items-center justify-center">
            <BsGlobe2 className="w-4 h-4" />
          </a>
          <a href="#" className="social-icon w-10 h-10 glassyBg rounded-full flex items-center justify-center">
            <FaDribbble className="w-4 h-4" />
          </a>
          <a href="#" className="social-icon w-10 h-10 glassyBg rounded-full flex items-center justify-center">
            <FaInstagram className="w-4 h-4" />
          </a>
          <a href="#" className="social-icon w-10 h-10 glassyBg rounded-full flex items-center justify-center">
            <FaFacebook className="w-4 h-4" />
          </a>
        </div>
        <StartedButton params={classValue} />
      </div>
    </div>
  );
};

export default Sidebar;
