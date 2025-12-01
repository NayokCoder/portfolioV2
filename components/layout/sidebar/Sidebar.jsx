"use client";

import Image from "next/image";
import { FaDribbble, FaInstagram, FaFacebook } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import StartedButton from "@/components/startedButton/StartedButton";

const Sidebar = () => {
  const classValue = [{ width: "w-72", minWidth: "min-w-72" }, { bgColour: "bg-ring" }, { padding: "py-0" }, { text: "text-secondary" }];

  return (
    <div className="flex items-center">
      <div className="sidebar-card w-xl p-6 rounded-3xl shadow-xl flex flex-col items-center gap-6 relative">
        {/* Availability Badge */}
        <div className="flex items-center gap-3 border border-ring py-2 px-6 rounded-full">
          <span className="text-chart-1">
            <div className="w-3 h-3 bg-chart-1 rounded-full"></div>
          </span>
          <h1 className="text-secondary-content text-base">
            Available for <span className="text-secondary">3 projects</span>
          </h1>
        </div>

        {/* Profile Section */}
        <section className="flex-col items-center gap-3  py-2">
          {/* Profile Image */}
          <div className="rounded-lg overflow-hidden">
            <Image src="/asset/unnamed.jpg" alt="Profile" width={300} height={250} className="rounded-lg object-cover" />
          </div>

          {/* Signature Overlay */}
          <div className="absolute top-7/13 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-24">
            <img src="/asset/Ferdous-signeture.png" alt="Signature" className="object-cover w-full" />
          </div>

          {/* User Info */}
          <div className="mt-16 text-center space-y-5">
            <h2 className="text-2xl font-semibold text-muted-foreground">ferdous.anon@gmail.com</h2>
            <h4 className="text-muted-foreground">Based in Dhaka, Bangladesh</h4>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center mt-8">
            <div className="flex  gap-3 text-2xl text-secondary mt-4">
              {[
                { icon: <BsGlobe2 className="w-4 h-4" />, link: "#" },
                { icon: <FaDribbble className="w-4 h-4" />, link: "#" },
                { icon: <FaInstagram className="w-4 h-4" />, link: "#" },
                { icon: <FaFacebook className="w-4 h-4" />, link: "#" },
              ].map((item, index) => (
                <a key={index} href={item.link} className="social-icon w-10 h-10 glassyBg rounded-full flex items-center justify-center">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Button */}
        <StartedButton params={classValue} />
      </div>
    </div>
  );
};

export default Sidebar;
