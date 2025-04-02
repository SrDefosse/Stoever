import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavLink = ({ href, children, mobile = false }) => (
  <Link href={href}>
    <li className={`text-white font-medium transition-all duration-200 ${
      mobile 
        ? 'hover:text-blue-200 hover:translate-x-2 transform' 
        : 'hover:text-blue-200'
    }`}>
      {children}
    </li>
  </Link>
);

const NavbarLeather = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = 50;
      setScrolled(window.scrollY > offset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/leather', text: 'Home' },
    { href: '/aboutUs', text: 'About Us' },
    { href: '/leather/products', text: 'Products' },
    { href: '/leather/technology', text: 'Technology' },
    { href: '/contact', text: 'Contact' },
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 w-full p-4 flex justify-center transition-all duration-300 `}>
      <div className="flex w-full max-w-6xl flex-col lg:flex-row">
        {/* Top bar with logo and hamburger */}
        <div className="flex justify-between items-center w-full lg:w-auto">
          {/* Left rounded section - glassmorphism effect */}
          <Link href="/leather">
            <div className="flex items-center bg-gray-900/20 backdrop-blur-xl rounded-full py-2 px-6 shadow-lg border border-white/30 transition-transform duration-200 hover:scale-[1.02] cursor-pointer">
              <div className="hidden lg:block">
                <Image
                  src="/biosolutions_text_logo_white.png"
                  alt="Biosolutions"
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

          {/* Hamburger menu button */}
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

        {/* Mobile menu */}
        <div 
          className={`lg:hidden mt-4 bg-slate-900/20 backdrop-blur-xl rounded-xl shadow-lg border border-white/30 overflow-hidden transition-all duration-200 ease-in-out ${
            isOpen 
              ? 'opacity-100 max-h-[500px] translate-y-0' 
              : 'opacity-0 max-h-0 -translate-y-4'
          }`}
        >
          <div className="p-4">
            <nav>
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <NavLink key={link.href} href={link.href} mobile>
                    {link.text}
                  </NavLink>
                ))}
                <li className="text-white font-medium pt-4 border-t border-white/30">
                  ENG <span className="mx-2 text-white/60">/</span> ESP
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex flex-1 mx-4 bg-slate-900/20 backdrop-blur-xl rounded-xl shadow-lg border border-white/30">
          <nav className="flex items-center justify-center w-full">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.text}
                </NavLink>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right section - glassmorphism effect (desktop only) */}
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
