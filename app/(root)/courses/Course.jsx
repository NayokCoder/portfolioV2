import React from "react";
import Education from "./Education";
import SectionTitle from "@/components/sectionTitle/SectionTitle";

const Course = () => {
  return (
    <div className="min-h-screen max-w-5xl flex flex-col px-6 md:p-16  text-white">
      <SectionTitle params="Education" />
      <Education />
    </div>
  );
};

export default Course;
