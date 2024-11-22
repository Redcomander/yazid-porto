"use client";

import { motion } from "framer-motion";
import { WhatsappLogo, GithubLogo } from "phosphor-react";

export default function Contact() {
  const phoneNumber = "+628117886799"; // Replace with your actual WhatsApp number
  const message = encodeURIComponent(
    "Hi, I'm interested in your web development services."
  );
  const githubUsername = "Redcomander";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900"
    >
      <motion.div
        className="container mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
          variants={itemVariants}
        >
          Let&apos;s Connect
        </motion.h2>
        <motion.p
          className="mb-12 text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Ready to bring your web development ideas to life? I&apos;m just a message
          away. Let&apos;s create something amazing together!
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8"
          variants={itemVariants}
        >
          <motion.a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 text-white py-4 px-8 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <WhatsappLogo size={24} weight="fill" className="mr-3" />
            Chat on WhatsApp
          </motion.a>
          <motion.a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 text-white py-4 px-8 rounded-full text-lg font-semibold hover:bg-gray-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <GithubLogo size={24} weight="fill" className="mr-3" />
            View on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div
        className="mt-20 text-center text-gray-600 dark:text-gray-400"
        variants={itemVariants}
      >
        <p>Let&apos;s turn your vision into reality.</p>
        <p>I&apos;am excited to hear from you!</p>
      </motion.div>
    </section>
  );
}
