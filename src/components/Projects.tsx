'use client'

import { useRef, useEffect } from 'react'

export default function Projects() {
  const projects = [
    { id: 1, title: 'E-commerce Platform', description: 'A full-featured online store built with Laravel and Vue.js' },
    { id: 2, title: 'Task Management App', description: 'A productivity tool developed using Laravel and React' },
    { id: 3, title: 'Portfolio Website', description: 'A responsive portfolio site created with Next.js and Tailwind CSS' },
  ]

  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    let animationId

    const animate = () => {
      if (container) {
        container.scrollTop += 1
        if (container.scrollTop >= container.scrollHeight / 2) {
          container.scrollTop = 0
        }
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 
          className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 animate-fadeIn"
        >
          My Projects
        </h2>
        <div ref={containerRef} className="overflow-hidden h-[400px]">
          <div className="flex flex-col space-y-8">
            {[...projects, ...projects].map((project, index) => (
              <div 
                key={`${project.id}-${index}`}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

