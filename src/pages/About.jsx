import { motion } from 'framer-motion'
import Timeline from '../components/Timeline'
import { OutlineButton } from '../components/buttons'

const About = () => {
  const timelineEvents = [
    {
      year: '1970',
      title: 'Fundación',
      description: 'Grupo Stoever inicia operaciones en México, estableciendo las bases de lo que se convertiría en un líder en la industria.'
    },
    {
      year: '1985',
      title: 'Expansión',
      description: 'Ampliación de operaciones y desarrollo de nuevas líneas de productos para la industria de la construcción y el cuero.'
    },
    {
      year: '2000',
      title: 'Innovación',
      description: 'Implementación de tecnologías avanzadas y desarrollo de productos Bio-Colágeno de alta calidad.'
    },
    {
      year: '2024',
      title: 'Presente',
      description: 'Consolidación como líder en soluciones innovadoras para múltiples industrias a nivel internacional.'
    }
  ]

  const values = [
    {
      title: 'Innovación',
      description: 'Buscamos constantemente nuevas formas de mejorar nuestros productos y servicios.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Calidad',
      description: 'Mantenemos los más altos estándares en todos nuestros procesos y productos.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: 'Sostenibilidad',
      description: 'Comprometidos con el medio ambiente y el desarrollo sostenible.',
      icon: (
        <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-l from-green-400 to-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Nuestra Historia
            </h1>
            <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
              Más de 50 años de innovación y excelencia en la industria
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Nuestra Trayectoria
            </h2>
            <p className="mt-4 text-text-secondary">
              Un viaje de crecimiento e innovación constante
            </p>
          </motion.div>

          <Timeline events={timelineEvents} />
        </div>
      </section>

      {/* Values Section */}
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
              Nuestros Valores
            </h2>
            <p className="mt-4 text-text-secondary">
              Los principios que guían nuestro trabajo diario
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-xl shadow-soft p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-text-secondary">
                  {value.description}
                </p>
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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Sé parte de nuestra historia
            </h2>
            <p className="text-black/90 mb-8 max-w-2xl mx-auto">
              Descubre cómo podemos colaborar juntos en tu próximo proyecto
            </p>
            <OutlineButton to="/contact" className='bg-gradient-to-r from-primary to-secondary text-white'>
              Contáctanos
            </OutlineButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About 