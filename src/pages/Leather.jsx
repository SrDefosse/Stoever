import { motion } from 'framer-motion'
import { LinkButton } from '../components/buttons'
import MasonryGallery from '../components/MasonryGallery'

const Leather = () => {
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1605007493699-af65834f8a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Acabados Premium',
      description: 'Calidad superior en cada detalle'
    },
    {
      url: 'https://images.pexels.com/photos/4452603/pexels-photo-4452603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Marroquinería',
      description: 'Soluciones para artículos de lujo'
    },
    {
      url: 'https://images.unsplash.com/photo-1559633030-76931a0d6a20?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Automotriz',
      description: 'Innovación en interiores'
    },
    {
      url: 'https://images.unsplash.com/photo-1553346647-e87c21cd3cd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Mobiliario',
      description: 'Elegancia y durabilidad'
    },
    {
      url: 'https://images.unsplash.com/photo-1585139786570-905432b5b0d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Tratamientos Especializados',
      description: 'Soluciones a medida'
    },
    {
      url: 'https://images.unsplash.com/photo-1561455590-085c8e93afbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Procesos Sostenibles',
      description: 'Compromiso ambiental'
    },
    {
      url: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Productos de Lujo',
      description: 'Acabados excepcionales'
    },
    {
      url: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Tapicería',
      description: 'Soluciones duraderas'
    },
    {
      url: 'https://images.unsplash.com/photo-1595341887894-73647feadb52?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Calzado',
      description: 'Tratamientos especializados'
    },
    {
      url: 'https://images.unsplash.com/photo-1553346647-e87c21cd3cd5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Accesorios',
      description: 'Detalles perfectos'
    },
    {
      url: 'https://images.unsplash.com/photo-1561455590-085c8e93afbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Innovación',
      description: 'Tecnología avanzada'
    },
    {
      url: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Personalización',
      description: 'Soluciones únicas'
    }
  ]

  const features = [
    {
      title: 'Acabados Premium',
      description: 'Soluciones de alta calidad para el tratamiento y acabado de pieles.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: 'Tratamientos Especializados',
      description: 'Procesos personalizados para cada tipo de piel y necesidad específica.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: 'Sostenibilidad',
      description: 'Procesos eco-amigables y productos biodegradables.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-text-primary">
              División Piel
            </h1>
            <p className="mt-4 text-xl text-text-secondary max-w-3xl mx-auto">
              Soluciones innovadoras para el tratamiento y acabado de pieles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-text-primary">
              Nuestras Soluciones
            </h2>
            <p className="mt-4 text-text-secondary">
              Innovación y calidad en cada proceso
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-xl shadow-soft p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-text-primary">
              Nuestros Trabajos
            </h2>
            <p className="mt-4 text-text-secondary">
              Descubre la calidad de nuestros acabados
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg aspect-[4/3] group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold text-white">
                      {image.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/90">
                      {image.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              ¿Necesitas una solución específica?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Nuestro equipo está listo para asesorarte
            </p>
            <LinkButton to="/contact" variant="primary">
              Contactar ahora
            </LinkButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Leather 