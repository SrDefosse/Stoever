import { motion } from 'framer-motion'
import Accordion from '../components/Accordion'
import { LinkButton } from '../components/buttons'
import MasonryGallery from '../components/MasonryGallery'

const Products = () => {
  const productCategories = [
    {
      title: 'Bio-Colágeno Premium',
      description: 'Nuestra línea de colágeno de grado médico con la más alta pureza.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      content: [
        {
          title: 'Especificaciones Técnicas',
          content: [
            {
              title: 'Pureza y Composición',
              description: '• Pureza: >99%\n• Origen: Bovino\n• Certificaciones: ISO 13485, GMP',
              image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            },
            {
              title: 'Presentaciones',
              description: '• Polvo micronizado\n• Solución concentrada\n• Gel estabilizado',
              image: 'https://images.unsplash.com/photo-1576073719676-aa95576db207?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
          ]
        },
        {
          title: 'Beneficios',
          content: [
            {
              title: 'Calidad Superior',
              description: '• Máxima biocompatibilidad\n• Trazabilidad completa\n• Estabilidad garantizada',
              image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            },
            {
              title: 'Soporte Técnico',
              description: '• Asesoría especializada\n• Control de calidad riguroso\n• Documentación completa',
              image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
          ]
        }
      ]
    },
    {
      title: 'Colágeno Hidrolizado',
      description: 'Soluciones de colágeno para la industria nutricional y cosmética.',
      image: 'https://images.unsplash.com/photo-1576073719676-aa95576db207?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      content: [
        {
          title: 'Especificaciones Técnicas',
          content: [
            {
              title: 'Características Físico-Químicas',
              description: '• Peso molecular: 2000-5000 Da\n• Solubilidad: Alta\n• Biodisponibilidad: >90%',
              image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            },
            {
              title: 'Certificaciones',
              description: '• GRAS\n• Halal\n• ISO 22000',
              image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
          ]
        },
        {
          title: 'Aplicaciones',
          content: [
            {
              title: 'Nutrición',
              description: '• Suplementos alimenticios\n• Bebidas funcionales\n• Alimentos fortificados',
              image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            },
            {
              title: 'Cosmética',
              description: '• Cremas y lociones\n• Productos capilares\n• Tratamientos antiedad',
              image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
          ]
        }
      ]
    },
    {
      title: 'Colágeno Industrial',
      description: 'Soluciones especializadas para aplicaciones industriales.',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      content: [
        {
          title: 'Especificaciones Técnicas',
          content: [
            {
              title: 'Propiedades',
              description: '• Concentración: 30-60%\n• Viscosidad: Adaptable\n• pH: 2.5-7.0',
              image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            },
            {
              title: 'Presentaciones',
              description: '• Gel industrial\n• Solución concentrada\n• Polvo técnico',
              image: 'https://images.unsplash.com/photo-1581093458791-9d19a5f32640?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
          ]
        },
        {
          title: 'Aplicaciones Industriales',
          content: [
            {
              title: 'Sectores',
              description: '• Adhesivos especializados\n• Recubrimientos técnicos\n• Películas protectoras',
              image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            },
            {
              title: 'Ventajas',
              description: '• Alta resistencia\n• Durabilidad extendida\n• Costo-efectividad',
              image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
            }
          ]
        }
      ]
    }
  ]

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Bio-Colágeno Premium',
      description: 'Calidad médica certificada'
    },
    {
      url: 'https://images.unsplash.com/photo-1576073719676-aa95576db207?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Colágeno Hidrolizado',
      description: 'Soluciones nutricionales'
    },
    {
      url: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      title: 'Aplicaciones Industriales',
      description: 'Versatilidad y rendimiento'
    }
  ]

  return (
    <div className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-DEFAULT to-secondary-DEFAULT">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Nuestros Productos
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Soluciones innovadoras en Bio-Colágeno para diversas industrias
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Gallery */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-text-primary">
              Línea de Productos
            </h2>
            <p className="mt-4 text-text-secondary">
              Descubre nuestra gama completa de soluciones
            </p>
          </motion.div>

          <MasonryGallery images={galleryImages} />
        </div>
      </section>

      {/* Technical Specifications */}
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
              Especificaciones Técnicas
            </h2>
            <p className="mt-4 text-text-secondary">
              Información detallada sobre nuestros productos
            </p>
          </motion.div>

          <div className="space-y-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-white rounded-xl shadow-soft overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-semibold text-text-primary">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-text-secondary">
                    {category.description}
                  </p>
                </div>
                <div className="p-6">
                  <Accordion items={category.content} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-black mb-4">
              ¿Necesitas más información?
            </h2>
            <p className="text-black/90 mb-8 max-w-2xl mx-auto">
              Nuestro equipo técnico está listo para asesorarte
            </p>
            <LinkButton to="/contact" variant="outline">
              Solicitar información
            </LinkButton>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Products 