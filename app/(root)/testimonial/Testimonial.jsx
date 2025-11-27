import React from "react";
import { testimonials } from "@/lib/testimonials";
import { AnimatedTestimonials } from "@/components/ui/shadcn-io/animated-testimonials";
import SectionTitle from "@/components/sectionTitle/SectionTitle";

const Testimonial = () => {
  return (
    <div className="min-h-screen max-w-5xl rounded-3xl bg-linear-to-bl from-transparent via-transparent  to-chart-1/50 animate-gradient-x">
      <div className=" flex flex-col px-6 md:p-16 glassyBg  rounded-3xl text-white ">
        <div className=" rounded-3xl">
          <SectionTitle params="Testimonials" />
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
