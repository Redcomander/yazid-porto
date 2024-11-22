"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Palette, Layers } from "lucide-react";

const skillsData = [
  { name: "Laravel", icon: Code2, color: "text-red-600" },
  { name: "PHP", icon: Database, color: "text-blue-600" },
  { name: "HTML", icon: Globe, color: "text-orange-600" },
  { name: "CSS", icon: Palette, color: "text-indigo-600" },
  { name: "Tailwind CSS", icon: Layers, color: "text-teal-600" },
];

export default function Skills() {
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className={`w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4 ${skill.color}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <skill.icon size={40} />
              </motion.div>
              <motion.span
                className="text-lg font-semibold text-gray-800 dark:text-gray-200"
                whileHover={{ scale: 1.05 }}
              >
                {skill.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
