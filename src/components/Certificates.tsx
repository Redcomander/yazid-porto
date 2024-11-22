"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Award,
  Calendar,
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  year: number;
  image: string;
  details: {
    certNumber?: string;
    fullName: string;
    birthInfo?: string;
    studentId?: string;
    program?: string;
    issueDate?: string;
    director?: string;
    NIP?: string;
    achievement?: string;
  };
  fullCertificateUrl: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    name: "Computer & Internet Professional Program",
    issuer: "PalComTech",
    year: 2023,
    image: "/images/completion.png",
    details: {
      certNumber: "01260056195-T2-2023",
      fullName: "M Yazid Ar-Rosyadi",
      birthInfo: "Palembang, April 20, 2002",
      studentId: "2122940056",
      program: "1 Year Computer & Internet Professional Program",
      issueDate: "December 21, 2023",
      director: "Mei Sutrisno",
      NIP: "01.PCT.21",
    },
    fullCertificateUrl: "/images/completion.png",
  },
  {
    id: 2,
    name: "Best Project of PalComTech",
    issuer: "PalComTech",
    year: 2023,
    image: "/images/best.png",
    details: {
      fullName: "M Yazid Ar-Rosyadi & Nurul Arifin",
      achievement: "Best Project of PalComTech 2023",
    },
    fullCertificateUrl: "/images/best.png",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedCert) {
        if (event.key === "Escape") {
          setSelectedCert(null);
        } else if (event.key === "ArrowLeft") {
          navigateCertificate(-1);
        } else if (event.key === "ArrowRight") {
          navigateCertificate(1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCert]);

  const navigateCertificate = (direction: number) => {
    const newIndex =
      certificates.findIndex((cert) => cert.id === selectedCert?.id) +
      direction;
    if (newIndex >= 0 && newIndex < certificates.length) {
      setSelectedCert(certificates[newIndex]);
    }
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  return (
    <section
      id="certificates"
      className="py-20 bg-gray-50 dark:bg-gray-800"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
        >
          My Certificates
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedCert(cert);
                setCurrentIndex(index);
              }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-cover transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cert.issuer}
                  </p>
                </div>
                <motion.div
                  variants={badgeVariants}
                  className="mt-4 flex items-center justify-center bg-purple-100 dark:bg-purple-900 rounded-full py-2 px-4"
                >
                  <Calendar className="w-4 h-4 mr-2 text-purple-600 dark:text-purple-400" />
                  <span className="text-purple-600 dark:text-purple-400 font-medium">
                    {cert.year}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full p-6 overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {selectedCert.name}
                </h3>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={selectedCert.image}
                      alt={selectedCert.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <a
                    href={selectedCert.fullCertificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Full Certificate
                  </a>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-lg">
                    <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-800 dark:text-gray-200 font-semibold">
                      {selectedCert.issuer}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-lg">
                    <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <span className="text-gray-800 dark:text-gray-200 font-semibold">
                      {selectedCert.year}
                    </span>
                  </div>
                  {selectedCert.details && (
                    <div className="space-y-4 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-inner">
                      {Object.entries(selectedCert.details).map(
                        ([key, value]) => (
                          <div key={key} className="flex flex-col space-y-1">
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                              {key
                                .split(/(?=[A-Z])/)
                                .map(
                                  (word) =>
                                    word.charAt(0).toUpperCase() + word.slice(1)
                                )
                                .join(" ")}
                            </span>
                            <span className="text-gray-800 dark:text-gray-200">
                              {value}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => navigateCertificate(-1)}
                  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                  disabled={currentIndex === 0}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => navigateCertificate(1)}
                  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
                  disabled={currentIndex === certificates.length - 1}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
