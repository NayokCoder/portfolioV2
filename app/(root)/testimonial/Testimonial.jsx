import React from "react";
import { testimonials } from "@/lib/testimonials";
import { AnimatedTestimonials } from "@/components/ui/shadcn-io/animated-testimonials";

const Testimonial = () => {
  return (
    <div className="min-h-screen max-w-5xl flex flex-col px-6 md:p-16 text-white ">
      <div className="glassyBg rounded-3xl">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Testimonial;
