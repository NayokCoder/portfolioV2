"use client";

import Image from "next/image";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import StartedButton from "@/components/startedButton/StartedButton";
import { useRouter } from "next/navigation";

export function SocialSection() {
  const socials = [
    { icon: <BsGlobe2 className="w-4 h-4" />, link: "https://ferdousanon.vercel.app/" },
    { icon: <FaGithub className="w-4 h-4" />, link: "https://github.com/NayokCoder" },
    { icon: <FaLinkedin className="w-4 h-4" />, link: "https://www.linkedin.com/in/md-ferdous-alam-7ab44121b/" },
    { icon: <FaFacebook className="w-4 h-4" />, link: "https://www.facebook.com/ferdous.alam.182/" },
  ];

  return (
    <>
      {/* Social Icons */}
      <div className="flex justify-center w-full">
        <div className="flex gap-2 lg:gap-3 text-xl lg:text-2xl text-secondary">
          {socials.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="social-icon w-9 h-9 lg:w-10 lg:h-10 glassyBg rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

const Sidebar = () => {
  const router = useRouter();
  const classValue = [{ width: "w-full  xl:w-72", minWidth: "" }, { bgColour: "bg-ring" }, { padding: "py-0" }, { text: "text-secondary" }];

  return (
    <div className="flex justify-center w-screen lg:max-w-4xl xl:w-full  px-4 md:px-10  py-12  xl:py-0">
      <div className="w-full  xl:max-w-2xl rounded-2xl glassyBg">
        <div className="relative flex flex-col items-center gap-6 px-4 py-6 lg:px-6 lg:py-10">
          {/* Header */}
          <div className="flex w-full items-center justify-between gap-3">
            <img src="/asset/align-left-svgrepo-com.svg" alt="menu" className="w-6 h-6 lg:w-8 lg:h-8" />

            {/* Availability Badge */}
            <div className="flex items-center gap-2 border border-ring rounded-full px-4 py-1.5 lg:px-6 lg:py-2">
              <span className="w-3 h-3 rounded-full bg-chart-1" />
              <p className="text-sm lg:text-base text-secondary-content whitespace-nowrap">
                Available for <span className="text-secondary">3 projects</span>
              </p>
            </div>
          </div>

          {/* Profile Section */}
          <section className="flex flex-col items-center w-full gap-6">
            {/* Profile Image */}
            <div className="w-full max-w-sm overflow-hidden rounded-xl p-6 xl:p-0">
              <Image src="/asset/unnamed.jpg" alt="Profile" width={350} height={350} className="w-full h-auto object-cover rounded-lg" />
            </div>

            {/* Signature Overlay */}
            <div className="absolute top-1/2 left-1/2 w-56 -translate-x-1/2 -translate-y-1/2 lg:w-72">
              <img src="/asset/Ferdous-signeture.png" alt="Signature" className="w-full object-contain" />
            </div>

            {/* User Info */}
            <div className="mt-14 w-full space-y-2 text-center">
              <h2 className="text-lg lg:text-2xl font-semibold text-muted-foreground break-all">ferdous.anon@gmail.com</h2>
              <p className="text-sm lg:text-base text-muted-foreground">Based in Dhaka, Bangladesh</p>
            </div>

            <SocialSection />
          </section>

          {/* CTA */}
          <div className="w-full md:w-1/2 cursor-pointer" onClick={() => router.push("/#contact")}>
            <StartedButton params={classValue} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
