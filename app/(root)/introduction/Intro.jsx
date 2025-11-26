"use client";

import { CountingNumber } from "@/components/ui/Counting-number";
import { useEffect, useState } from "react";
import Experience from "./Experience";

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
    <section className="min-h-screen flex flex-col px-6 md:p-16  text-white">
      {/* Location and time */}
      <p className="text-sm font-medium text-gray-200 mb-2">Dhaka Bangladesh{formattedTime && `, ${formattedTime}`}</p>

      {/* Section title */}
      <p className="text-gray-500 font-medium mb-4">• Introduction</p>

      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
        Professional web developer focused <br />
        On your project success.
      </h1>

      <div className="space-y-6">
        {/* Subheading */}
        <p className="text-gray-400 max-w-2xl mb-8">&quot;I am a passionate MERN Stack Developer with hands-on experience in building full-stack applications. Skilled in JavaScript, React, Node.js, Express.js, and database design using MySQL and MongoDB. I love solving problems, learning new technologies, and developing solutions that make a real impact.&quot;</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          {["Branding", "Art Direction", "UI Design", "Webflow Development"].map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full glassyBg text-gray-200 text-sm hover:bg-secondary hover:text-accent-foreground transition">
              {tag}
            </span>
          ))}
        </div>

        {/* Subheading */}
        <p className="text-gray-400 max-w-2xl mb-8">হ্যালো, আমি Md Ferdous Alam। ছোটবেলা থেকেই টেকনোলজির প্রতি ভীষণ আগ্রহ ছিল। কোডিংয়ের মাধ্যমে সমস্যা সমাধান করতে আর নতুন কিছু তৈরি করতে ভীষণ ভালো লাগে। বর্তমানে আমি একজন MERN Stack ডেভেলপার হিসেবে কাজ করছি। ফ্রন্টএন্ডে React/Next.js এবং ব্যাকএন্ডে Node.js, Express ও ডাটাবেস (MySQL/MongoDB) ব্যবহার করি। আমার লক্ষ্য হচ্ছে এমন অ্যাপ্লিকেশন তৈরি করা, যা ব্যবহারকারীদের জীবনকে সহজ এবং কার্যকর করে তুলবে।</p>
      </div>

      <div className="rounded-xl mt-8 max-w-xs  glassyBg text-white p-6 transition-all duration-300 hover:bg-[rgba(40,40,40,0.45)] hover:shadow- [0_6px_25px_rgba(0,0,0,0.45),inset_0_0_35px_rgba(255,255,255,0.08)]">
        <p className="text-sm text-gray-200 font-medium mb-4">• Success Rate of satisfied clients</p>

        <div className="flex justify-end items-center gap-2">
          <CountingNumber from={0} to={98} duration={3} className="text-5xl font-extrabold drop-shadow-lg" />
          <span className="text-3xl font-semibold opacity-90">%</span>
        </div>
      </div>

      <Experience />
    </section>
  );
};

export default Intro;
