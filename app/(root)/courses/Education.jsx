"use client";
import React from "react";
import { motion } from "motion/react";
import { Award, GraduationCap, Calendar } from "lucide-react";

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
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="w-full">
      <div className="space-y-6">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Education & Certifications</h2>
          <p className="text-muted-foreground">My academic journey and professional development</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
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
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <span>Programming Hero</span>
                    <span>•</span>
                    <span>Jun 2024</span>
                  </div>
                </div>
              </div>

              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://drive.google.com/file/d/1rCCxx2gEUi3QwvS2ilDeUCWMOASXqIRl/view?usp=sharing" target="_blank" rel="noreferrer" className="text-sm px-4 py-2 rounded-lg border bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-200 font-medium shadow-sm">
                View
              </motion.a>
            </div>

            <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">Completed a comprehensive web development program covering HTML, CSS, JavaScript, React, Node.js and deployment workflows. Built multiple projects and a portfolio-ready application.</p>
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
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + index * 0.1 }} className="group relative pl-4 border-l-2 border-muted-foreground hover:border-primary/50 transition-colors duration-300">
                    <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-secondary group-hover:scale-150 transition-transform duration-300" />
                    <p className="font-medium group-hover:text-chart-1">{edu.degree}</p>
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
        <motion.div variants={itemVariants} className="relative flex items-center justify-center gap-4 py-4">
          <div className="flex-1 h-px bg-linear-to-r from-transparent via-border to-chart-1" />
          <div className="flex items-center gap-2 text-xs text-secondary font-medium px-4 py-2 rounded-full glassyBg border">
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
