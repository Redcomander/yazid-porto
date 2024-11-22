"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Database, Globe, Palette, Layers } from "lucide-react";

interface Skill {
  name: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  description: string;
}

const skillsData: Skill[] = [
  {
    name: "Laravel",
    icon: Code2,
    color: "text-red-600",
    bgColor: "bg-red-100 dark:bg-red-900/30",
    description:
      "Expert in building robust and scalable web applications using Laravel, leveraging its powerful features for rapid development.",
  },
  {
    name: "PHP",
    icon: Database,
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    description:
      "Proficient in PHP, crafting efficient backend solutions and integrating complex systems with ease.",
  },
  {
    name: "HTML",
    icon: Globe,
    color: "text-orange-600",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
    description:
      "Skilled in creating semantic and accessible HTML structures, ensuring solid foundations for web projects.",
  },
  {
    name: "CSS",
    icon: Palette,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
    description:
      "Adept at styling web applications with CSS, creating responsive and visually appealing user interfaces.",
  },
  {
    name: "Tailwind CSS",
    icon: Layers,
    color: "text-teal-600",
    bgColor: "bg-teal-100 dark:bg-teal-900/30",
    description:
      "Experienced in using Tailwind CSS to rapidly build custom designs and create consistent, utility-first stylesheets.",
  },
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className={`w-28 h-28 rounded-full ${skill.bgColor} flex items-center justify-center mb-4 cursor-pointer relative overflow-hidden`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedSkill(index)}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 dark:to-white/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                {React.createElement(skill.icon, {
                  size: 56,
                  className: skill.color,
                })}
              </motion.div>
              <motion.span
                className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center"
                whileHover={{ scale: 1.05 }}
              >
                {skill.name}
              </motion.span>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedSkill !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-12 bg-gray-100 dark:bg-gray-700 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-16 h-16 rounded-full ${skillsData[selectedSkill].bgColor} flex items-center justify-center mr-4`}
                >
                  {React.createElement(skillsData[selectedSkill].icon, {
                    size: 32,
                    className: skillsData[selectedSkill].color,
                  })}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  {skillsData[selectedSkill].name}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {skillsData[selectedSkill].description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
