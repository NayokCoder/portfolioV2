import About from "@/app/(portfolio)/(root)/about/About";
import Blog from "@/app/(portfolio)/(root)/blog/Blog";
import Contact from "@/app/(portfolio)/(root)/contact/Contact";
import Course from "@/app/(portfolio)/(root)/courses/Course";
import Intro from "@/app/(portfolio)/(root)/introduction/Intro";
import Project from "@/app/(portfolio)/(root)/projects/Project";
import Testimonial from "@/app/(portfolio)/(root)/testimonial/Testimonial";
import React from "react";

const Content = () => {
  return (
    <div>
      <Intro />
      <About />
      <Course />
      <Project />
      <Testimonial />
      <Contact />
      <Blog />
    </div>
  );
};

export default Content;
