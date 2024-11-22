'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import DarkModeToggle from './DarkModeToggle'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
            M Yazid Ar-Rosyadi
          </Link>
          <div className="flex items-center space-x-6">
            <ul className="hidden md:flex space-x-6">
              {['About', 'Projects', 'Skills', 'Certificates', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}

