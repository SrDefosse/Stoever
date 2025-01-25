import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-xl font-bold">
              Grupo Stoever
            </Link>
            <p className="mt-4 text-gray-600">
              Más de 50 años de experiencia en productos basados en Bio-Colágeno, construcción y piel.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Enlaces Rápidos
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-600">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="text-gray-600">
                <a href="tel:+525555555555">
                  +52 (55) 5555-5555
                </a>
              </li>
              <li className="text-gray-600">
                <a href="mailto:contacto@grupostoever.com">
                  contacto@grupostoever.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {currentYear} Grupo Stoever. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 