import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DropdownMenu from "../ui/DropdownMenu";

const NavLink = ({ href, children, mobile = false }) => (
  <Link href={href}>
    <li
      className={`text-white font-medium transition-all duration-200 ${
        mobile
          ? 'hover:text-blue-200 hover:translate-x-2 transform'
          : 'hover:text-blue-200'
      }`}
    >
      {children}
    </li>
  </Link>
);

const NavbarLeather = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = 50;
      setScrolled(window.scrollY > offset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto para cerrar el dropdown cuando se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown !== null) {
        // Si el click fue fuera de elementos con la clase 'dropdown-container'
        const dropdownContainers = document.querySelectorAll('.dropdown-container');
        let isClickInside = false;
        
        dropdownContainers.forEach(container => {
          if (container.contains(event.target)) {
            isClickInside = true;
          }
        });
        
        if (!isClickInside) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const navLinks = [
    { href: '/leather', text: 'Home' },
    { href: '/leather/about', text: 'About Us' },
    { href: '/leather/products', text: 'Products and Technology' },
    {
      text: 'Our Companies',
      items: [
        { href: '/', text: 'Stoever Group' },
        { href: '/leather', text: 'Stoever Leather' },
        { href: '/construction', text: 'Stoever Construction' },
      ],
    },
    { href: '/leather/contact', text: 'Contact' },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 w-full p-4 flex justify-center transition-all duration-300`}
    >
      <div className="flex w-full max-w-6xl flex-col lg:flex-row">
        {/* Top bar with logo and hamburger */}
        <div className="flex justify-between items-center w-full lg:w-auto">
          {/* Logo */}
          <Link href="/leather">
            <div className="flex items-center bg-gray-900/20 backdrop-blur-xl rounded-full py-2 px-6 shadow-lg border border-white/30 transition-transform duration-200 hover:scale-[1.02] cursor-pointer">
              <div className="hidden lg:block">
                <Image
                  src="/biosolutions_text_logo_white.png"
                  alt="Biosolutions for Leather"
                  width={150}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="lg:hidden">
                <Image
                  src="/stoever_logo_notext.png"
                  alt="Stoever Group"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </Link>

          {/* Botón del menú hamburguesa */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden bg-slate-900/20 backdrop-blur-xl rounded-full p-2 shadow-lg border border-white/30 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <svg
              className="w-6 h-6 text-white transition-transform duration-200"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menú móvil */}
        <div
          className={`lg:hidden mt-4 bg-slate-900/20 backdrop-blur-xl rounded-xl shadow-lg border border-white/30 overflow-hidden transform transition-all duration-300 ease-out ${
            isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`}
          style={{ transformOrigin: 'top' }}
        >
          <div className="p-4">
            <nav>
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <div key={index}>
                    {link.items ? (
                      <>
                        <div
                          className="text-white font-medium flex items-center justify-between cursor-pointer hover:text-blue-200 transition-all duration-200 dropdown-container"
                          onClick={() => {
                            setActiveDropdown(activeDropdown === index ? null : index);
                          }}
                        >
                          <span>{link.text}</span>
                          <svg
                            className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                              activeDropdown === index ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        <div
                          className={`pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out overflow-hidden ${
                            activeDropdown === index 
                              ? 'max-h-[300px] opacity-100' 
                              : 'max-h-0 opacity-0 pointer-events-none'
                          }`}
                        >
                          {link.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="py-2">
                              <Link 
                                href={item.href}
                                className="block text-white font-medium hover:text-blue-200 transform transition-all duration-200 hover:translate-x-2"
                              >
                                {item.text}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <NavLink href={link.href} mobile>
                        {link.text}
                      </NavLink>
                    )}
                  </div>
                ))}
                <li className="text-white font-medium pt-4 border-t border-white/30">
                  ENG <span className="mx-2 text-white/60">/</span> ESP
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Menú de escritorio */}
        <div className="hidden lg:flex flex-1 mx-4 bg-slate-900/20 backdrop-blur-xl rounded-xl shadow-lg border border-white/30">
          <nav className="flex items-center justify-center w-full">
            <ul className="flex space-x-8">
              {navLinks.map((link, index) => (
                <div 
                  key={index} 
                  className="relative dropdown-container"
                  onMouseEnter={() => setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.items ? (
                    <>
                      <div
                        className="text-white font-medium cursor-pointer hover:text-blue-200 flex items-center space-x-1 relative"
                      >
                        <span>{link.text}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                            activeDropdown === index ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <DropdownMenu
                        items={link.items}
                        isOpen={activeDropdown === index}
                      />
                    </>
                  ) : (
                    <NavLink href={link.href}>{link.text}</NavLink>
                  )}
                </div>
              ))}
            </ul>
          </nav>
        </div>

        {/* Sección derecha (solo escritorio) */}
        <div className="hidden lg:flex items-center bg-slate-900/20 backdrop-blur-xl rounded-xl px-6 shadow-lg border border-white/30">
          <div className="font-medium text-white cursor-pointer">
            ENG <span className="mx-2 text-white/60">/</span> ESP
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarLeather;

