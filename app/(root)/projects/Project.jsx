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

    // Find the custom scroll container (ScrollArea viewport)
    const scrollContainer = box.closest("[data-radix-scroll-area-viewport]");
    if (!scrollContainer) return;

    // Create ScrollTrigger animation
    const animation = gsap.to(box, {
      x: -80,
      ease: "none",
      scrollTrigger: {
        trigger: box,
        start: "top 95%",
        end: "top 10%",
        scroller: scrollContainer,

        scrub: 2,
      },
    });

    setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <div className="max-w-4xl flex flex-col c-padding text-white">
      <div className="glassyBg rounded-3xl flex justify-end    gap-8 overflow-hidden ">
        <div ref={boxRef} className="rounded-3xl flex gap-8 translate-x-20 items-center  will-change-transform ">
          <div className="bg-linear-to-r from-orange-400 to-chart-1 to-70% w-10 h-5 rounded-full"></div>
          <div className="text-7xl font-bold p-6 text-center">Selected Work</div>
          <div className="bg-linear-to-r from-chart-1 from-15% to-orange-400 w-10 h-5 rounded-full"></div>
        </div>
      </div>

      <ProjectCard />
      <MarqueeProject />
    </div>
  );
};

export default Project;
