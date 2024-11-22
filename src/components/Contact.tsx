export default function Contact() {
  const phoneNumber = '+628117886799' // Replace with your actual WhatsApp number
  const message = encodeURIComponent('Hi, I\'m interested in your web development services.')

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 text-center">
        <h2 
          className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 animate-fadeIn"
        >
          Get in Touch
        </h2>
        <p 
          className="mb-8 text-gray-700 dark:text-gray-300 animate-fadeIn animation-delay-200"
        >
          Interested in working together? Let's chat on WhatsApp!
        </p>
        <a
          href={`https://wa.me/${phoneNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-500 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300 animate-fadeIn animation-delay-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
              clipRule="evenodd"
            />
          </svg>
          Contact via WhatsApp
        </a>
      </div>
    </section>
  )
}

