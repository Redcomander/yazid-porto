"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Code2, Rocket, Users, Coffee } from "lucide-react";

export default function AboutMe() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [text, setText] = useState("");

  const paragraphs = [
    "II am a passionate web developer with expertise in Laravel, PHP, and modern frontend technologies. I love creating elegant, efficient, and user-friendly web applications that solve real-world problems.",
    "WWith years of experience in full-stack development, I specialize in building scalable web applications that combine powerful backend systems with intuitive user interfaces.",
    "BBeyond coding, I'm deeply committed to staying current with emerging technologies and best practices in web development. I believe in writing clean, maintainable code and creating solutions that make a real difference.",
  ];

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < paragraphs[currentTextIndex].length) {
        setText(
          (prevText) => prevText + paragraphs[currentTextIndex].charAt(i)
        );
        i++;
      } else {
        clearInterval(typingEffect);
        if (currentTextIndex < paragraphs.length - 1) {
          setTimeout(() => {
            setText("");
            setCurrentTextIndex((prev) => prev + 1);
          }, 2000);
        }
      }
    }, 30);

    return () => clearInterval(typingEffect);
  }, [currentTextIndex]);

  const features = [
    { icon: Code2, text: "Full Stack Developer" },
    { icon: Rocket, text: "Performance Enthusiast" },
    { icon: Users, text: "Team Collaborator" },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="relative w-full aspect-square max-w-md mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl transform rotate-6 scale-95 opacity-25" />
              <Image
                src="/images/yazid.jpeg"
                alt="Professional portrait"
                className="rounded-2xl shadow-xl relative z-10"
                width={400}
                height={400}
                priority
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <motion.p
                key={currentTextIndex}
                className="text-lg text-gray-700 dark:text-gray-300 min-h-[150px]"
              >
                {text}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-0.5 h-5 bg-current ml-1"
                />
              </motion.p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  <feature.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
