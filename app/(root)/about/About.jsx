import React from "react";
import Swip from "./Swip";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import Heading from "@/components/Heading";
import ScrollRevealText from "@/components/ui/ScrollRevealText";

const About = () => {
  return (
    <div className="min-h-screen max-w-4xl flex flex-col px-6 md:px-16 text-white">
      <div className="flex mt-12">
        <div className="w-2/12">
          <SectionTitle params="About Me" />
        </div>
        <div className="w-10/12">
          <ScrollRevealText>
            {" "}
            <Heading>Great development starts with a clear purpose.</Heading>
          </ScrollRevealText>

          <p className="mt-12 text-normal text-muted-foreground hover:text-chart-1">A deep understanding of business goals, user needs, and technical direction guides every stage of development. When these elements align, decisions become clearer, solutions become smarter, and the final product delivers real, lasting value. This clarity ensures that every feature we build serves a purpose and contributes meaningfully to the overall product vision.</p>

          <div className=" mt-12 space-y-4 ml-4 ">
            <div className="flex gap-4 ">
              <li>Clean code</li>
              <h4>Love writing clean, maintainable code</h4>
            </div>
            <div className="flex gap-4 ">
              <li>Problem-solving</li>
              <h4>Strong problem-solving and debugging skills</h4>
            </div>
            <div className="flex gap-4 ">
              <li>UI/UX awareness</li>
              <h4>Always learning new technologies</h4>
            </div>
            <div className="flex gap-4 ">
              <li>Fast learner</li>
              <h4>Can work under pressure</h4>
            </div>
            <div className="flex gap-4 ">
              <li>Team collaboration</li>
              <h4>collaborates effectively with others</h4>
            </div>
          </div>
          <div className="mt-12 text-2xl space-y-5">
            <h3>Technologies I am Comfortable With</h3>
            <div className="flex flex-wrap gap-3">
              {["React.js", "Next.js", "Tailwind CSS", "Gsap", "Node.js", "Express.js", "MongoDB", "MySQL", "Firebase", "GitHub"]
                .sort((a, b) => a.localeCompare(b))
                .map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full glassyBg text-secondary text-base hover:bg-secondary hover:text-accent-foreground transition">
                    {tag}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-5xl text-secondary font-semibold my-12">Tech Stack</h1>
      <div className="">
        <Swip />
      </div>
    </div>
  );
};

export default About;
