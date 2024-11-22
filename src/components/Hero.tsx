"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";

const floatingIcons = [
  { icon: "💻", delay: 0 },
  { icon: "🚀", delay: 1 },
  { icon: "🌐", delay: 2 },
  { icon: "⚡", delay: 3 },
  { icon: "🔧", delay: 4 },
];

export default function Hero() {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 0%", "100% 100%", "0% 100%", "100% 0%", "0% 0%"],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-indigo-900 text-gray-900 dark:text-white"
      animate={controls}
      style={{
        backgroundImage: "var(--hero-gradient)",
        backgroundSize: "400% 400%",
      }}
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-12 text-gray-700 dark:text-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          I'm M Yazid Ar-Rosyadi, a Web Developer specializing in Laravel, PHP,
          and Tailwind CSS
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-100 font-semibold py-3 px-8 rounded-full text-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
            x: [0, Math.random() * 400 - 200],
            y: [0, Math.random() * -300 - 100],
          }}
          transition={{
            duration: 5,
            delay: item.delay,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <motion.div
        className="absolute inset-0 bg-blue-900 dark:bg-white opacity-5 dark:opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, transparent 10%, currentColor 90%)",
          backgroundSize: "5px 5px",
        }}
        animate={{
          backgroundPosition: [
            `0px 0px`,
            `${mousePosition.x / 20}px ${mousePosition.y / 20}px`,
          ],
        }}
        transition={{ type: "spring", stiffness: 75, damping: 100 }}
      />

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ yoyo: Infinity, duration: 0.8 }}
      >
        <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-200" />
      </motion.div>
    </motion.section>
  );
}
