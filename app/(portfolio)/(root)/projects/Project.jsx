"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import React from "react";
import ProjectCard from "./ProjectCard";
import MarqueeProject from "./MarqueeProject";

const Project = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    // Find the custom scroll container (ScrollArea viewport); fallback to window
    const scrollContainer = box.closest("[data-radix-scroll-area-viewport]") || window;

    const mm = gsap.matchMedia();

    // XL fixed settings
    mm.add("(min-width: 1280px)", () => {
      const animation = gsap.to(box, {
        x: -35,
        ease: "none",
        scrollTrigger: {
          trigger: box,
          start: "top 95%",
          end: "top 10%",
          markers: false,
          scroller: scrollContainer,
          scrub: 2,
        },
      });

      setTimeout(() => ScrollTrigger.refresh(), 100);

      return () => {
        animation.scrollTrigger?.kill();
        animation.kill();
      };
    });

    // Responsive settings for smaller devices
    mm.add("(max-width: 1279px)", () => {
      const animation = gsap.to(box, {
        x: -150,
        ease: "none",
        scrollTrigger: {
          trigger: box,
          start: "top 98%",
          end: "top 10%",
          markers: false,
          scroller: scrollContainer,
          scrub: 1,
        },
      });

      setTimeout(() => ScrollTrigger.refresh(), 100);

      return () => {
        animation.scrollTrigger?.kill();
        animation.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="max-w-3xl flex flex-col  text-white mt-20">
      <div className="glassyBg rounded-3xl flex justify-end    gap-8 overflow-hidden ">
        <div ref={boxRef} className="rounded-3xl flex xl:gap-8 translate-x-20 items-center  will-change-transform ">
          <div className="bg-linear-to-r from-orange-400 to-chart-1 to-70% w-10 h-5 rounded-full"></div>
          <div className="c-heading  font-bold p-6 text-center">Selected Work</div>
          <div className="bg-linear-to-r from-chart-1 from-15% to-orange-400 w-10 h-5 rounded-full"></div>
        </div>
      </div>

      <ProjectCard />
      <MarqueeProject />
    </div>
  );
};

export default Project;
