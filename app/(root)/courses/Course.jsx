import React from "react";
import Education from "./Education";
import SectionTitle from "@/components/sectionTitle/SectionTitle";

const Course = () => {
  return (
    <div className="min-h-screen max-w-4xl flex flex-col c-padding  text-white">
      <SectionTitle params="Courses" />
      <Education />
    </div>
  );
};

export default Course;
