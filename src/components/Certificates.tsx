'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, Calendar, X } from 'lucide-react'
import Image from 'next/image'

interface Certificate {
  id: number
  name: string
  issuer: string
  year: number
  image: string
  details: {
    certNumber?: string
    fullName: string
    birthInfo?: string
    studentId?: string
    program?: string
    issueDate?: string
    director?: string
    nip?: string
    achievement?: string
  }
}

const certificates: Certificate[] = [
  {
    id: 1,
    name: 'Computer & Internet Professional Program',
    issuer: 'PalComTech',
    year: 2023,
    image: '/images/completion.png',
    details: {
      certNumber: '01260056195-T2-2023',
      fullName: 'M Yazid Ar-Rosyadi',
      birthInfo: 'Palembang, April 20, 2002',
      studentId: '2122940056',
      program: '1 Year Computer & Internet Professional Program',
      issueDate: 'December 21, 2023',
      director: 'Mei Sutrisno',
      nip: '01.PCT.21'
    }
  },
  {
    id: 2,
    name: 'Best Project of PalComTech',
    issuer: 'PalComTech',
    year: 2023,
    image: '/images/best.png',
    details: {
      fullName: 'M Yazid Ar-Rosyadi & Nurul Arifin',
      achievement: 'Best Project of PalComTech 2023'
    }
  }
]

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
        >
          My Certificates
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCert(cert)}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer"
            >
              <div className="relative h-48">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                  <p className="text-sm text-gray-300">{cert.issuer}</p>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{cert.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">{selectedCert.name}</h3>
                <button onClick={() => setSelectedCert(null)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                  <span className="text-gray-700 dark:text-gray-300">{selectedCert.issuer}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
                  <span className="text-gray-700 dark:text-gray-300">{selectedCert.year}</span>
                </div>
                {selectedCert.details && (
                  <div className="mt-4 space-y-2">
                    {Object.entries(selectedCert.details).map(([key, value]) => (
                      <p key={key} className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {value}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

