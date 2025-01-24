import { motion } from 'framer-motion'

const Construction = () => {
  const services = [
    {
      title: 'Impermeabilizantes',
      description: 'Soluciones avanzadas para la protección contra la humedad y el agua.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: 'Aditivos para Concreto',
      description: 'Mejoradores de resistencia y durabilidad para estructuras de concreto.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Selladores',
      description: 'Productos especializados para el sellado y protección de superficies.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ]

  const projects = [
    {
      title: 'Edificios Comerciales',
      description: 'Soluciones integrales para la construcción y mantenimiento de edificios comerciales.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Infraestructura',
      description: 'Productos especializados para proyectos de infraestructura pública y privada.',
      image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Residencial',
      description: 'Sistemas de impermeabilización y protección para proyectos residenciales.',
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">División de</span>
                  <span className="block text-secondary-DEFAULT">Construcción</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Soluciones innovadoras y sostenibles para la industria de la construcción,
                  respaldadas por más de 50 años de experiencia.
                </p>
              </div>
            </main>
          </motion.div>
        </div>
      </div>

      {/* Services */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Ofrecemos una amplia gama de soluciones para la industria de la construcción
            </p>
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {services.map((service, index) => (
              <div
                key={service.title}
                className="relative bg-white p-6 rounded-lg shadow-soft hover:shadow-md transition-shadow duration-300"
              >
                <div className="inline-flex p-3 bg-primary-light bg-opacity-10 text-primary-DEFAULT rounded-lg">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{service.title}</h3>
                <p className="mt-2 text-base text-gray-500">{service.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Projects */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Proyectos Destacados
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Conoce algunos de nuestros proyectos más relevantes
            </p>
          </motion.div>

          <motion.div
            className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="relative bg-white rounded-lg shadow-soft overflow-hidden group"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{project.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-secondary-DEFAULT">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">¿Listo para comenzar tu proyecto?</span>
            <span className="block text-primary-light">Contáctanos hoy mismo.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-secondary-DEFAULT bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                Contactar ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Construction 