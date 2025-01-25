import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { LinkButton } from '../components/buttons'
import Hero from '../components/Hero'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: 'Innovación con Bio-Colágeno',
      description: 'Liderando la industria por más de 50 años',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    },
    {
      title: 'Soluciones en Construcción',
      description: 'Innovación y calidad en cada proyecto',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    },
    {
      title: 'División de Piel',
      description: 'Excelencia en tratamientos y acabados',
      image: 'https://images.unsplash.com/photo-1473188588951-666fce8e7c68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80'
    }
  ]

  const features = [
    {
      title: 'División de Construcción',
      description: 'Soluciones innovadoras para la industria de la construcción.',
      image: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      link: '/construction'
    },
    {
      title: 'División de Piel',
      description: 'Productos especializados para el tratamiento y cuidado de la piel.',
      image: 'https://images.unsplash.com/photo-1473188588951-666fce8e7c68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      link: '/leather'
    },
    {
      title: 'Bio-Colágeno',
      description: 'Productos innovadores basados en Bio-Colágeno de la más alta calidad.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      link: '/products'
    }
  ]

  const stats = [
    { number: 50, suffix: '+', label: 'Años de Experiencia' },
    { number: 1000, suffix: '+', label: 'Proyectos Completados' },
    { number: 100, suffix: '+', label: 'Productos Desarrollados' },
    { number: 10, suffix: '+', label: 'Países Alcanzados' }
  ]

  const projects = [
    {
      url: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Innovación en Bio-Colágeno',
      description: 'Desarrollo de productos de alta pureza para aplicaciones médicas'
    },
    {
      url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Construcción Sostenible',
      description: 'Soluciones avanzadas para proyectos de infraestructura'
    },
    {
      url: 'https://images.pexels.com/photos/4452511/pexels-photo-4452511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Acabados Premium',
      description: 'Tratamientos especializados para la industria del cuero'
    },
    {
      url: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Investigación y Desarrollo',
      description: 'Innovación continua en nuestros laboratorios'
    },
    {
      url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Proyectos Industriales',
      description: 'Soluciones a gran escala para la industria'
    },
    {
      url: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Control de Calidad',
      description: 'Estándares rigurosos en cada proceso'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const AnimatedNumber = ({ number, suffix = '' }) => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
      const duration = 2000
      const steps = 60
      const stepTime = duration / steps
      const increment = number / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= number) {
          current = number
          clearInterval(timer)
        }
        setCount(Math.floor(current))
      }, stepTime)
      
      return () => clearInterval(timer)
    }, [number])
    
    return <span>{count}{suffix}</span>
  }

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <Hero slides={heroSlides} />

      {/* Features Section */}
      <section className="py-12 bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-gray-100">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              Nuestras Divisiones
            </h2>
            <p className="mt-4 text-xl text-text-secondary">
              Descubre nuestras soluciones especializadas en cada área
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Link
                  to={feature.link}
                  className="block group relative overflow-hidden rounded-xl bg-white shadow-soft hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <motion.img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center text-white">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-primary/20 p-3 rounded-lg backdrop-blur-sm"
                          >
                            {feature.icon}
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                      {feature.description}
                    </p>
                    <motion.div
                      className="mt-4 flex items-center text-primary font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <span>Explorar</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="text-4xl sm:text-5xl font-extrabold text-primary"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
                >
                  <AnimatedNumber number={stat.number} suffix={stat.suffix} />
                </motion.div>
                <p className="mt-2 text-sm sm:text-base text-primary/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-text-primary">
              Nuestros Proyectos
            </h2>
            <p className="mt-4 text-text-secondary">
              Descubre nuestras soluciones en diferentes industrias
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white shadow-soft hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={project.url}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-white/90">
                          {project.description}
                        </p>
                        <div className="mt-4 flex items-center text-white font-medium">
                          <span>Ver detalles</span>
                          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-primary">
              ¿Listo para comenzar?
            </h2>
            <p className="mt-4 text-text-secondary">
              Contáctanos para discutir tu próximo proyecto
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <LinkButton to="/contact" variant="primary">
                Contactar ahora
              </LinkButton>
              <LinkButton to="/products" variant="secondary">
                Ver productos
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 