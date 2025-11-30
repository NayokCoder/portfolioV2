"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { selectedWork } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const MarqueeProject = () => {
  const [isPaused, setIsPaused] = useState(false);

  const work = selectedWork;
  const animationDuration = 25; // seconds for one complete loop

  return (
    <div className="w-full flex items-center justify-center mt-12">
      <div className="max-w-4xl px-6 md:p-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-3xl " onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          {/* Animated Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1.5  overflow-hidden">
            <motion.div
              className="h-full bg-linear-to-r from-white via-orange-400 to-chart-1 relative"
              initial={{ width: "0%" }}
              animate={{
                width: isPaused ? undefined : "100%",
              }}
              transition={{
                duration: animationDuration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              {/* Shimmer effect on progress bar */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </div>

          {/* Pause/Play Indicator */}
          <AnimatePresence>
            {isPaused && (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} className="absolute top-6 right-6 z-10 px-4 py-2 rounded-full bg-gray-900/90 border border-gray-700 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-1 h-4 bg-linear-to-b from-blue-400 to-purple-400 rounded-full" />
                    <div className="w-1 h-4 bg-linear-to-b from-blue-400 to-purple-400 rounded-full" />
                  </div>
                  <span className="text-sm font-medium text-gray-300">Paused</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Content */}
          <div className="">
            {/* Marquee Container with fade edges */}
            <div className="relative py-5 ">
              {/* Left Fade */}

              {/* Marquee Content */}
              <div className="overflow-hidden py-3 ">
                <motion.div
                  className="flex gap-8 whitespace-nowrap "
                  animate={{
                    x: isPaused ? undefined : [0, -600 * work.length],
                  }}
                  transition={{
                    x: {
                      duration: animationDuration,
                      ease: "linear",
                      repeat: Infinity,
                      repeatType: "loop",
                    },
                  }}
                >
                  {/* First set of content */}
                  {work.map((item, index) => (
                    <motion.div key={`first-${index}`} className="relative group cursor-pointer" whileHover={{ scale: isPaused ? 1.03 : 1, y: isPaused ? -5 : 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                      <div className="w-[400px] h-[250px] rounded-3xl relative overflow-hidden border-2 border-gray-700  group-hover:border-chart-1/50 transition-all duration-300 shadow-lg group-hover:shadow-lg group-hover:shadow-chart-1/20">
                        {/* Image with overlay linear */}
                        <div className="relative w-full h-full">
                          <Image src={item.image} width={400} height={350} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                          {/* linear overlay */}
                          <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-between p-8">
                          {/* Top section - Year badge */}
                          <div className="flex justify-between items-start">
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="px-4 py-2 rounded-full bg-linear-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-600/50">
                              <span className="text-sm font-semibold text-gray-200">{item.year}</span>
                            </motion.div>

                            {/* Arrow Icon */}
                            <motion.div className="w-12 h-12 flex items-center justify-center rounded-full bg-linear-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border-2 border-gray-600/50 group-hover:border-chart-1 group-hover:bg-chart-1/20 transition-all duration-300" whileHover={{ rotate: 45 }} transition={{ duration: 0.3 }}>
                              <ArrowUpRight className="w-6 h-6 text-gray-300 group-hover:text-chart-1 transition-colors duration-300" />
                            </motion.div>
                          </div>

                          {/* Bottom section - Project info */}
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <motion.p className="text-gray-300 text-sm font-medium tracking-wide uppercase" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 + 0.1 }}>
                                {item.description.split(" ").length > 5 ? item.description.split(" ").slice(0, 5).join(" ") + " ..." : item.description}
                              </motion.p>

                              <motion.h3 className="text-2xl font-bold text-white group-hover:text-chart-1 transition-colors duration-300 leading-tight" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 + 0.2 }}>
                                {item.name}
                              </motion.h3>
                            </div>

                            {/* Progress indicator line */}
                            <motion.div className="w-0 h-1 bg-linear-to-r from-white to-chart-1 rounded-full group-hover:w-24 transition-all duration-500" />
                          </div>
                        </div>

                        {/* Shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
                          initial={{ x: "-100%" }}
                          animate={{ x: "200%" }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 4,
                            ease: "linear",
                          }}
                        />

                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-linear-to-br from-chart-1/0 via-chart-1/0 to-purple-500/0 group-hover:from-chart-1/10 group-hover:via-purple-500/5 group-hover:to-chart-1/10 transition-all duration-500 pointer-events-none rounded-3xl" />
                      </div>
                    </motion.div>
                  ))}
                  {/* Second set of content */}
                  {work.map((item, index) => (
                    <motion.div key={`first-${index}`} className="relative group cursor-pointer" whileHover={{ scale: isPaused ? 1.03 : 1, y: isPaused ? -5 : 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                      <div className="w-[400px] h-[250px] rounded-3xl relative overflow-hidden border-2 border-gray-700  group-hover:border-chart-1/50 transition-all duration-300 shadow-lg group-hover:shadow-lg group-hover:shadow-chart-1/20">
                        {/* Image with overlay linear */}
                        <div className="relative w-full h-full">
                          <Image src={item.image} width={400} height={350} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                          {/* linear overlay */}
                          <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-between p-8">
                          {/* Top section - Year badge */}
                          <div className="flex justify-between items-start">
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="px-4 py-2 rounded-full bg-linear-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-md border border-gray-600/50">
                              <span className="text-sm font-semibold text-gray-200">{item.year}</span>
                            </motion.div>

                            {/* Arrow Icon */}
                            <motion.div className="w-12 h-12 flex items-center justify-center rounded-full bg-linear-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border-2 border-gray-600/50 group-hover:border-chart-1 group-hover:bg-chart-1/20 transition-all duration-300" whileHover={{ rotate: 45 }} transition={{ duration: 0.3 }}>
                              <ArrowUpRight className="w-6 h-6 text-gray-300 group-hover:text-chart-1 transition-colors duration-300" />
                            </motion.div>
                          </div>

                          {/* Bottom section - Project info */}
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <motion.p className="text-gray-300 text-sm font-medium tracking-wide uppercase" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 + 0.1 }}>
                                {item.description.split(" ").length > 5 ? item.description.split(" ").slice(0, 5).join(" ") + " ..." : item.description}
                              </motion.p>

                              <motion.h3 className="text-2xl font-bold text-white group-hover:text-chart-1 transition-colors duration-300 leading-tight" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 + 0.2 }}>
                                {item.name}
                              </motion.h3>
                            </div>

                            {/* Progress indicator line */}
                            <motion.div className="w-0 h-1 bg-linear-to-r from-white to-chart-1 rounded-full group-hover:w-24 transition-all duration-500" />
                          </div>
                        </div>

                        {/* Shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
                          initial={{ x: "-100%" }}
                          animate={{ x: "200%" }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 4,
                            ease: "linear",
                          }}
                        />

                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-linear-to-br from-chart-1/0 via-chart-1/0 to-purple-500/0 group-hover:from-chart-1/10 group-hover:via-purple-500/5 group-hover:to-chart-1/10 transition-all duration-500 pointer-events-none rounded-3xl" />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeProject;
