"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";
import { BsGlobe2 } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import SectionTitle from "../sectionTitle/SectionTitle";

function Drawer({ ...props }) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
}

function DrawerTrigger({ ...props }) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

function DrawerPortal({ ...props }) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

function DrawerClose({ ...props }) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

function DrawerOverlay({ className, ...props }) {
  return <DrawerPrimitive.Overlay data-slot="drawer-overlay" className={cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className)} {...props} />;
}

function DrawerContent({ className, children, showOverlay = true, onOverlayClick, ...props }) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      {showOverlay && <DrawerOverlay onClick={onOverlayClick} />}
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "group/drawer-content glassyBg fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-l-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh]  data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-2/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:w-64 flex justify-around items-center",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

function DrawerMenuItem({ className, ...props }) {
  return <div data-slot="drawer-menu-item" className={cn("data-[active=true]:bg-secondary w-fit  text-white data-[active=true]:text-accent-foreground rounded-full flex items-center justify-center  tooltip   tooltip-left", className)} {...props} />;
}

function DrawerMenuIcon({ icon, id }) {
  if (!icon) return null; // যদি icon না থাকে তাহলে কিছু render না করে

  return (
    <span className="text-xl gap-3 flex items-center justify-center">
      {icon} <span className="text-base"> {id}</span>
    </span>
  );
}

function DrawerHeader({ className, ...props }) {
  return <div data-slot="drawer-header" className={cn("flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left", className)} {...props} />;
}

function DrawerFooter({ className, ...props }) {
  return <div data-slot="drawer-footer" className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />;
}

function DrawerTitle({ className, ...props }) {
  return <DrawerPrimitive.Title data-slot="drawer-title" className={cn("text-foreground font-semibold", className)} {...props} />;
}

function DrawerDescription({ className, ...props }) {
  return <DrawerPrimitive.Description data-slot="drawer-description" className={cn("text-muted-foreground text-sm", className)} {...props} />;
}

// Social Section
function SocialSection() {
  const socials = [
    { icon: <BsGlobe2 className="w-4 h-4" />, link: "https://ferdousanon.vercel.app/" },
    { icon: <FaGithub className="w-4 h-4" />, link: "https://github.com/NayokCoder" },
    { icon: <FaLinkedin className="w-4 h-4" />, link: "https://www.linkedin.com/in/md-ferdous-alam-7ab44121b/" },
    { icon: <FaFacebook className="w-4 h-4" />, link: "https://www.facebook.com/ferdous.alam.182/" },
  ];

  return (
    <>
      <div className="flex justify-center">
        <SectionTitle params="Find me on" />
      </div>

      {/* Social Icons */}
      <div className="flex justify-center ">
        <div className="flex gap-3 text- xl text-secondary mt-4">
          {socials.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="social-icon w-8 h-8 glassyBg rounded-full flex items-center justify-center">
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export { Drawer, DrawerPortal, DrawerOverlay, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription, DrawerMenuItem, DrawerMenuIcon, SocialSection };
