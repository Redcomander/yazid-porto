export default function Certificates() {
    const certificates = [
      { id: 1, name: 'Laravel Certification', issuer: 'Laravel', year: 2023 },
      { id: 2, name: 'PHP Developer Certification', issuer: 'Zend', year: 2022 },
      { id: 3, name: 'Frontend Web Development', issuer: 'FreeCodeCamp', year: 2021 },
    ]
  
    return (
      <section id="certificates" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 
            className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 animate-fadeIn"
          >
            My Certificates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div 
                key={cert.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 animate-fadeIn hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">{cert.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">Issuer: {cert.issuer}</p>
                <p className="text-gray-600 dark:text-gray-300">Year: {cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  