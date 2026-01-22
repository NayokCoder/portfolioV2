import About from "@/app/(root)/about/About";
import Blog from "@/app/(root)/blog/Blog";
import Contact from "@/app/(root)/contact/Contact";
import Course from "@/app/(root)/courses/Course";
import Intro from "@/app/(root)/introduction/Intro";
import Project from "@/app/(root)/projects/Project";
import Testimonial from "@/app/(root)/testimonial/Testimonial";
import React from "react";

const Content = () => {
  return (
    <div>
      <Intro />
      <About />
      <Course />
      <Project />
      <Testimonial />
      {/* <Contact />
      <Blog /> */}
    </div>
  );
};

export default Content;
