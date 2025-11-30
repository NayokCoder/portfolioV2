"use client";
import React from "react";
import { motion } from "motion/react";
import { Award, GraduationCap, Calendar, ArrowUpRight } from "lucide-react";
import StartedButton from "@/components/startedButton/StartedButton";

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="w-full mt-12">
      <div className="space-y-6">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="space-y-3">
          <h2 className="text-5xl font-semibold tracking-tight">Education & Certifications</h2>
          <p className="text-muted-foreground text-xl">My academic journey and professional development</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* Certificate Card */}
          <motion.article variants={itemVariants} whileHover={{ y: -5 }} className="group relative flex flex-col gap-4 p-6 rounded-xl  shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 flex items-start justify-between">
              <div className="flex items-start gap-4">
                <motion.div whileHover={{ rotate: 12, scale: 1.1 }} className="p-3 bg-linear-to-br from-amber-500/10 to-amber-600/5 rounded-xl  shadow-sm">
                  <Award className="w-6 h-6 text-amber-600 dark:text-amber-500" />
                </motion.div>

                <div>
                  <h3 className="font-semibold text-lg">Complete Web Development</h3>
                  <div className="flex items-center gap-2 text-sm hover:text-secondary text-muted-foreground mt-1">
                    <span>Programming Hero</span>
                    <span className="font-bold">•</span>
                    <span>Jun 2024</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="relative z-10 text-normal hover:text-chart-1 text-muted-foreground leading-relaxed">Completed a comprehensive web development program covering HTML, CSS, JavaScript, React, Node.js and deployment workflows. Built multiple projects and a portfolio-ready application.</p>

            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} target="_blank" rel="noreferrer">
              <div className="flex px-6 group">
                <button className={` flex items-center justify-between rounded-full p-1 bg-secondary text-foreground group-hover:text-chart-1 `}>
                  <p className="px-3 text-base font-bold">Cirtificate</p>
                  <div className=" flex h-8 w-8 items-center justify-center rounded-full bg-black ">
                    <ArrowUpRight className="h-4 w-4 text-secondary group-hover:text-chart-1" />
                  </div>
                </button>
              </div>
            </motion.a>
          </motion.article>

          {/* Education List */}
          <motion.article variants={itemVariants} whileHover={{ y: -5 }} className=" relative p-6 rounded-xl   shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <motion.div whileHover={{ rotate: 12, scale: 1.1 }} className="p-3 bg-linear-to-br from-amber-500/10 to-amber-600/5 rounded-xl  shadow-sm">
                  <GraduationCap className="w-6 h-6 text-amber-600 dark:text-amber-500" />
                </motion.div>

                <h3 className="text-xl font-semibold">Education</h3>
              </div>

              <div className="space-y-6">
                {[
                  {
                    degree: "Bachelor of Science in Computer Science & Engineering",
                    institution: "Tejgaon College (National University)",
                    period: "2015 – 2020",
                    cgpa: "2.62 / 4.00",
                  },
                  {
                    degree: "Higher Secondary School Certificate",
                    institution: "Quality Education College",
                    period: "2012 – 2014",
                    cgpa: "4.50 / 5.00",
                  },
                  {
                    degree: "Secondary School Certificate",
                    institution: "Dakhin Banasree Model High School",
                    period: "2010 – 2012",
                    cgpa: "4.06 / 5.00",
                  },
                ].map((edu, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + index * 0.1 }} className="group relative  pl-4 border-l-2 border-muted-foreground hover:border-primary/50 transition-colors duration-300">
                    <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-secondary group-hover:scale-150 transition-transform duration-300" />
                    <p className="font-medium group-hover:text-chart-1 mt-6">{edu.degree}</p>
                    <p className="text-sm text-secondary mt-1">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1 group-hover:text-chart-1">
                      <Calendar className="w-3 h-3" />
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span>
                        CGPA: <span className="font-semibold text-foreground">{edu.cgpa}</span>
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.article>
        </div>

        {/* Decorative Timeline */}
        <motion.div variants={itemVariants} className="relative flex items-center justify-center gap-4 py-4 mt-12">
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-chart-1" />
          <div className="flex items-center gap-2 text-base text-secondary font-medium px-4 py-2 rounded-full glassyBg border">
            <div className="w-2 h-2 rounded-full bg-chart-1 animate-pulse" />
            <span>Education Journey • Dhaka, Bangladesh</span>
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-transparent via-border to-chart-1" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;
