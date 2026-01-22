import React from "react";
import Education from "./Education";
import SectionTitle from "@/components/sectionTitle/SectionTitle";

const Course = () => {
  return (
    <div className="min-h-screen max-w-3xl flex flex-col c-padding mt-7 text-white">
      <SectionTitle params="Courses" />
      <Education />
    </div>
  );
};

export default Course;
