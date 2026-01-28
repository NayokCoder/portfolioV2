"use client";

import { motion } from "framer-motion";
import React from "react";

const ShimmerEffect = () => (
  <motion.div
    className="absolute inset-0 -translate-x-full"
    animate={{ x: ["-100%", "100%"] }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </motion.div>
);

const SkeletonCard = () => (
  <div className="max-w-3xl rounded-3xl flex gap-8 items-center relative overflow-hidden">
    {/* Image Skeleton */}
    <div className="rounded-3xl w-full h-[300px] xl:h-[600px] bg-gray-800/50 relative overflow-hidden">
      <ShimmerEffect />
    </div>

    {/* Overlay Skeleton */}
    <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-3xl flex items-end justify-center md:py-2 lg:py-6 xl:py-10">
      <div className="w-2xl bg-black/50 backdrop-blur-xl rounded-3xl py-2 px-4 xl:p-5 flex items-center justify-between gap-4">
        <div className="xl:space-y-2 py-2 flex-1">
          <div className="space-y-2">
            {/* Description Skeleton */}
            <div className="h-4 xl:h-5 bg-gray-700/50 rounded-full w-3/4 relative overflow-hidden">
              <ShimmerEffect />
            </div>
            {/* Title Skeleton */}
            <div className="h-6 xl:h-8 bg-gray-600/50 rounded-full w-1/2 relative overflow-hidden">
              <ShimmerEffect />
            </div>
          </div>

          {/* Year Badge Skeleton */}
          <div className="mt-3">
            <div className="h-8 xl:h-10 w-20 xl:w-24 glassyBg rounded-full relative overflow-hidden">
              <ShimmerEffect />
            </div>
          </div>
        </div>

        {/* Arrow Button Skeleton */}
        <div className="w-16 h-16 xl:w-32 xl:h-32 flex items-center justify-center border border-gray-700/50 rounded-3xl relative overflow-hidden">
          <div className="w-6 h-6 xl:w-10 xl:h-10 bg-gray-700/50 rounded-lg" />
          <ShimmerEffect />
        </div>
      </div>
    </div>
  </div>
);

const ProjectCardSkeleton = ({ count = 3 }) => {
  return (
    <div className="rounded-3xl grid grid-cols-1 gap-6 xl:gap-10 mt-10 relative">
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
            ease: "easeOut",
          }}
        >
          <SkeletonCard />
        </motion.div>
      ))}

      {/* Loading Progress Bar */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="glassyBg rounded-full px-4 py-2 flex items-center gap-3">
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-chart-1"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          <span className="text-sm text-gray-300">Loading projects</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
