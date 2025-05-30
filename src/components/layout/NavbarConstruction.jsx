import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from "../ui/DropdownMenu";

// Reusing NavLink structure from Navbar.jsx/NavbarLeather.jsx for consistency
const NavLink = ({ to, children, mobile = false }) => (
  <Link to={to}>
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

const NavbarConstruction = () => {
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown !== null) {
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

  // Construction specific links within the target structure
  const navLinks = [
    { href: '/construction', text: 'Home' },
    { href: '/construction/about', text: 'About Us' },
    { href: '/construction/productsandservices', text: 'Products and Services' },
    {
      text: 'Our Companies', // Added dropdown
      items: [
        { href: '/', text: 'Stoever Group' },
        { href: '/leather', text: 'Stoever Leather' },
        { href: '/construction', text: 'Stoever Construction' },
      ],
    },
    { href: '/construction/contact', text: 'Contact' },
  ];

  return (
    // Using the fixed positioning and structure from target navbars
    <div className={`fixed top-0 left-0 right-0 z-50 w-full p-4 flex justify-center transition-all duration-300 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'} lg:pointer-events-auto`}>
      <div className="flex w-full max-w-6xl flex-col lg:flex-row">
        {/* Left section: Logo */} 
        <div className="flex justify-between items-center w-full lg:w-auto pointer-events-auto">
          <Link to="/construction"> {/* Link to construction home */} 
            <div className="flex items-center bg-gray-900/20 backdrop-blur-xl rounded-full py-2 px-6 shadow-lg border border-white/30 transition-transform duration-200 hover:scale-[1.02] cursor-pointer">
              <div className="hidden lg:block">
                <img
                  src="/icons/construction_text_icon_white.webp" // Construction Logo
                  alt="Stoever Construction"
                  className="object-contain h-12 w-auto"
                  loading="eager"
                />
              </div>
              <div className="lg:hidden"> {/* Mobile Logo - Using Stoever S for consistency */}
                <img
                  src="/icons/stoever_logo_notext.webp"
                  alt="Stoever Group"
                  className="object-contain h-10 w-10"
                />
              </div>
            </div>
          </Link>

          {/* Hamburger button (same as target) */} 
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden bg-slate-900/20 backdrop-blur-xl rounded-full p-2 shadow-lg border border-white/30 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <svg
              className="w-6 h-6 text-white transition-transform duration-200"
              fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"
              style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Structure from target) */} 
        <div
          className={`lg:hidden mt-4 bg-slate-900/20 backdrop-blur-xl rounded-xl shadow-lg border border-white/30 overflow-hidden transform transition-all duration-300 ease-out ${isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-0 pointer-events-none'}`}
          style={{ transformOrigin: 'top' }}
        >
          <div className="p-4">
            <nav>
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <div key={index}>
                    {link.items ? (
                      <div className="relative">
                        <div
                          className="text-white font-medium flex items-center justify-between cursor-pointer hover:text-blue-200 transition-all duration-200 dropdown-container"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveDropdown(activeDropdown === index ? null : index);
                          }}
                          role="button"
                          aria-haspopup="true"
                          aria-expanded={activeDropdown === index}
                        >
                          <span>{link.text}</span>
                          <svg className={`w-4 h-4 transition-transform duration-300 ease-in-out ${activeDropdown === index ? 'rotate-180' : ''}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        <div className={`pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out overflow-hidden ${activeDropdown === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                          {link.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="py-2">
                              <Link
                                to={item.href}
                                onClick={() => {
                                  setIsOpen(false);
                                  setActiveDropdown(null);
                                }}
                                className="block text-white font-medium hover:text-blue-200 transform transition-all duration-200 hover:translate-x-2"
                              >
                                {item.text}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <NavLink to={link.href} mobile>
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

        {/* Desktop Menu (Center section - structure from target) */} 
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
                        onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                        role="button"
                        aria-haspopup="true" 
                        aria-expanded={activeDropdown === index}
                        id="dropdown-button"
                      >
                        <span>{link.text}</span>
                        <svg className={`w-4 h-4 transition-transform duration-300 ease-in-out ${activeDropdown === index ? 'rotate-180' : ''}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <DropdownMenu items={link.items} isOpen={activeDropdown === index} />
                    </>
                  ) : (
                    <NavLink to={link.href}>{link.text}</NavLink>
                  )}
                </div>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right section: Language switcher (Structure from target) */} 
        <div className="hidden lg:flex items-center bg-slate-900/20 backdrop-blur-xl rounded-xl px-6 shadow-lg border border-white/30">
          <div className="font-medium text-white cursor-pointer">
            ENG <span className="mx-2 text-white/60">/</span> ESP
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarConstruction;
