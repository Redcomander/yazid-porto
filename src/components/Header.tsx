"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "about",
        "projects",
        "skills",
        "certificates",
        "contact",
      ];
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection =
    (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: "smooth",
        });
      }
    };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-purple-100/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
          >
            M Yazid Ar-Rosyadi
          </Link>
          <div className="flex items-center space-x-6">
            <ul className="hidden md:flex space-x-6">
              {["About", "Projects", "Skills", "Certificates", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      onClick={scrollToSection(item.toLowerCase())}
                      className={`text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 ${
                        activeSection === item.toLowerCase()
                          ? "text-purple-600 dark:text-purple-400 font-semibold"
                          : ""
                      }`}
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
