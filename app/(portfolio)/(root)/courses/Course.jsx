import React from "react";
import Education from "./Education";
import SectionTitle from "@/components/sectionTitle/SectionTitle";

const Course = () => {
  return (
    <div className=" max-w-3xl flex flex-col  mt-20 text-white">
      <SectionTitle params="Courses" />
      <Education />
    </div>
  );
};

export default Course;
