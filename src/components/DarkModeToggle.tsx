'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <motion.button
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative h-12 w-24 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      whileTap={{ scale: 0.95 }}
    > 
      <motion.div
        className="absolute inset-0 rounded-full bg-white opacity-50 dark:bg-gray-800"
        animate={{
          opacity: isDark ? 0.1 : 0.7,
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg"
        animate={{
          x: isDark ? 48 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <motion.div
          animate={{
            rotate: isDark ? 180 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
        >
          {isDark ? (
            <Moon className="h-6 w-6 text-indigo-900" />
          ) : (
            <Sun className="h-6 w-6 text-yellow-500" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  )
}

