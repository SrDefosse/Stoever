import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterLeather = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-[#1B4332] to-[#081C15] text-white">
      <div className="w-full px-4 pt-12 pb-12">
        {/* Contenido principal del Footer */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Información de la compañía */}
          <div className="flex flex-col space-y-12">
            <div className="flex items-center">
              <div className="h-12 w-auto relative mb-6">
                <img
                  src="/icons/stoever_group_logo_white.webp"
                  alt="Stoever Group Logo"
                  width={120}
                  height={48}
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-gray-300">
              With over 70 years of experience in the chemical industry, Stoever Group is a leader in developing innovative solutions for leather processing and construction materials.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                <FaTwitter className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                <FaInstagram className="text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="lg:px-8">
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-green-400/30">Quick Links</h3>
            <ul className="space-y-2">
              <li className="transition-transform hover:translate-x-1">
                <Link to="/leather" className="text-gray-300 hover:text-white flex items-center">
                  <span className="mr-2">›</span>Home
                </Link>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <Link to="/leather/about" className="text-gray-300 hover:text-white flex items-center">
                  <span className="mr-2">›</span>About Us
                </Link>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <Link to="/leather/products" className="text-gray-300 hover:text-white flex items-center">
                  <span className="mr-2">›</span>Products and Technology
                </Link>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <Link to="/" className="text-gray-300 hover:text-white flex items-center">
                  <span className="mr-2">›</span>Stoever Group
                </Link>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <Link to="/leather" className="text-gray-300 hover:text-white flex items-center">
                  <span className="mr-2">›</span>Stoever Leather
                </Link>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <Link to="/construction" className="text-gray-300 hover:text-white flex items-center">
                  <span className="mr-2">›</span>Stoever Construction
                </Link>
              </li>
              <li className="transition-transform hover:translate-x-1">
                <Link to="/leather/contact" className="text-gray-300 hover:text-white flex items-center">
                  <span className="mr-2">›</span>Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="lg:px-4">
            <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-green-400/30">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="text-green-400 mt-1 mr-3" />
                <span className="text-gray-300">Industriales 502, Fraccionamiento Julian de Obregon León, Gto. México</span>
              </li>
              <li className="flex items-center">
                <FiPhone className="text-green-400 mr-3" />
                <span className="text-gray-300">+52 (477) 275-2012</span>
              </li>
              <li className="flex items-center">
                <FiMail className="text-green-400 mr-3" />
                <span className="text-gray-300">info@stoever.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divisor inferior */}
        <div className="max-w-7xl mx-auto border-t border-green-400/30 my-8"></div>

        {/* Copyright y políticas */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {currentYear} Stoever Group. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white">Terms of Service</Link>
            <Link to="/cookie-policy" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLeather;
