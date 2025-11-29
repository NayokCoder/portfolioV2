"use client";

import { CountingNumber } from "@/components/ui/Counting-number";
import { useEffect, useState } from "react";
import Experience from "./Experience";
import SectionTitle from "@/components/sectionTitle/SectionTitle";

const Intro = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    // Update time immediately and then every second
    const updateTime = () => setTime(new Date());
    // eslint-disable-next-line react-hooks/set-state-in-effect
    updateTime(); // Set initial time

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); // cleanup
  }, []);

  // Format time
  const formattedTime = time
    ? new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(time)
    : "";

  return (
    <section className="min-h-screen max-w-4xl flex flex-col px-6 md:p-16  text-white">
      {/* Location and time */}
      <p className="text-normal font-medium text-secondary ">Dhaka Bangladesh{formattedTime && `, ${formattedTime}`}</p>

      <section className="py-12">
        {/* Section title */}
        <SectionTitle params="Introduction" />

        {/* Headline */}

        <div className="space-y-7 mt-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight ">Professional web developer focused On your project success.</h1>

          {/* Subheading */}
          <p className="text-muted-foreground text-normal font-medium  ">&quot;I am a passionate MERN Stack Developer with hands-on experience in building full-stack applications. Skilled in JavaScript, React, Node.js, Express.js, and database design using MySQL and MongoDB. I love solving problems, learning new technologies, and developing solutions that make a real impact.&quot;</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {["Branding", "Art Direction", "UI Design", "Webflow Development"].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full glassyBg text-secondary text-normal hover:bg-secondary hover:text-accent-foreground transition">
                {tag}
              </span>
            ))}
          </div>

          {/* Subheading */}
          <p className="text-muted-foreground text-sm ">হ্যালো, আমি মোঃ ফেরদৌস আলম । ছোটবেলা থেকেই টেকনোলজির প্রতি ভীষণ আগ্রহ ছিল। কোডিংয়ের মাধ্যমে সমস্যা সমাধান করতে আর নতুন কিছু তৈরি করতে ভীষণ ভালো লাগে। বর্তমানে আমি একজন মার্ন-স্ট্যাক ডেভেলপার হিসেবে কাজ করছি। ফ্রন্টএন্ডে রিয়েক্ট/নেক্সট এবং ব্যাকএন্ডে নোড, এক্সপ্রেস, ও ডাটাবেস (মাই-এসকিঊ-এল/মংগডিবি) ব্যবহার করি। আমার লক্ষ্য হচ্ছে এমন অ্যাপ্লিকেশন তৈরি করা, যা ব্যবহারকারীদের জীবনকে সহজ এবং কার্যকর করে তুলবে।</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-12">
          <div className="rounded-xl mt-8 max-w-xs  glassyBg text-white p-6 transition-all duration-300 hover:bg-[rgba(40,40,40,0.45)] hover:shadow- [0_6px_25px_rgba(0,0,0,0.45),inset_0_0_35px_rgba(255,255,255,0.08)]">
            <p className="text-sm text-gray-200 font-medium mb-4">• Success Rate of satisfied clients</p>
            <div className="flex justify-end items-center gap-2">
              <CountingNumber from={0} to={98} duration={3} className="text-5xl font-extrabold drop-shadow-lg" />
              <span className="text-3xl font-semibold opacity-90">%</span>
            </div>
          </div>
          <div className="rounded-xl mt-8 max-w-xs  glassyBg text-white p-6 transition-all duration-300 hover:bg-[rgba(40,40,40,0.45)] hover:shadow- [0_6px_25px_rgba(0,0,0,0.45),inset_0_0_35px_rgba(255,255,255,0.08)]">
            <p className="text-sm text-gray-200 font-medium mb-4">• Success Rate of satisfied clients</p>
            <div className="flex justify-end items-center gap-2">
              <CountingNumber from={0} to={98} duration={3} className="text-5xl font-extrabold drop-shadow-lg" />
              <span className="text-3xl font-semibold opacity-90">%</span>
            </div>
          </div>
        </div>
      </section>

      <Experience />
    </section>
  );
};

export default Intro;
