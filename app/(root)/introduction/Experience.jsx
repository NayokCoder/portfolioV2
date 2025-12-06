"use client";
import Heading from "@/components/Heading";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import GsapleftAnimation from "@/components/ui/GsapleftAnimation";

import ScrollRevealText from "@/components/ui/ScrollRevealText";
import React from "react";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const experiences = [
    {
      company: "Drake",
      role: "Product Designer",
      date: "2022 - Present",
    },
    {
      company: "Minus",
      role: "Product Designer",
      date: "2021 - 2022",
    },
    {
      company: "Avox Studio",
      role: "Product Designer",
      date: "2020 - 2021",
    },
  ];

  // const boxRef = useRef(null);

  // useEffect(() => {
  //   const box = boxRef.current;
  //   if (!box) return;

  //   // Find the custom scroll container (ScrollArea viewport)
  //   const scrollContainer = box.closest("[data-radix-scroll-area-viewport]");
  //   if (!scrollContainer) return;

  //   // Create ScrollTrigger animation
  //   const animation = gsap.fromTo(
  //     box,
  //     { x: -60, opacity: 0 },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       ease: "sine.in",
  //       scrollTrigger: {
  //         trigger: box,
  //         start: "top 95%",
  //         end: "top 50%",
  //         scroller: scrollContainer,
  //         scrub: 2,
  //       },
  //     }
  //   );

  //   setTimeout(() => ScrollTrigger.refresh(), 100);

  //   return () => {
  //     animation.scrollTrigger?.kill();
  //     animation.kill();
  //   };
  // }, []);
  return (
    <section className="text-white mt-12">
      {/* Section Title */}
      <div className="font-bold  space-y-12 mb-12 ">
        <SectionTitle params="Experience" />
        {/* <ScrollRevealParagraph /> */}
        <ScrollRevealText>
          <Heading>I will offer more than just a place to live; it's a space designed to reflect your unique style and inspiration.</Heading>
        </ScrollRevealText>
      </div>

      {/* Experience List */}
      <GsapleftAnimation>
        <div className="space-y-12">
          {experiences.map((item, idx) => (
            <div
              key={idx}
              className="
        group relative border-b border-border pb-6
        transition-colors duration-300
        hover:border-amber-500
      "
            >
              {/* Company */}
              <h3 className="text-gray-400 text-lg font-medium">{item.company}</h3>

              {/* Role */}
              <p className="text-2xl font-semibold mt-1 text-white group-hover:text-chart-1">{item.role}</p>

              {/* Date Tag (Right side, Glass style) */}
              <span
                className="
          absolute right-0 top-1/2 -translate-y-1/2
          bg-[rgba(30,30,30,0.45)] backdrop-blur-xl group-hover:bg-chart-1
          border border-border
          px-5 py-2 rounded-full
          text-sm text-gray-300
          shadow-[0_4px_15px_rgba(0,0,0,0.25)]
          transition-all duration-300
          group-hover:border-chart-1 group-hover:shadow-lg
        "
              >
                {item.date}
              </span>
            </div>
          ))}
        </div>
      </GsapleftAnimation>
    </section>
  );
};

export default Experience;
