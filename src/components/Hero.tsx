export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-200 dark:from-gray-800 dark:to-indigo-900 text-gray-900 dark:text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 
          className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 animate-fadeIn"
        >
          Welcome to My Portfolio
        </h1>
        <p 
          className="text-xl md:text-2xl mb-12 animate-fadeIn animation-delay-200"
        >
          I'm M Yazid Ar-Rosyadi, a Web Developer specializing in Laravel, PHP, and Tailwind CSS
        </p>
        <a 
          href="#contact" 
          className="bg-purple-600 text-white dark:bg-purple-500 dark:text-gray-100 py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-600 transition duration-300 inline-block animate-fadeIn animation-delay-400"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}

