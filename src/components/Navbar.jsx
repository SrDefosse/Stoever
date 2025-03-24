import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled || isMenuOpen ? 'bg-slate-900/75 backdrop-blur-sm' : ''
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative w-32 h-8">
              <Image
                src="/stoever_logo_white.png"
                alt="Stoever Group"
                fill
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-white hover:text-[#FFDD0A] transition-colors">
                Home
              </Link>
              <Link href="/aboutUs" className="text-white hover:text-[#FFDD0A] transition-colors">
                About Us
              </Link>
              <Link href="/technology" className="text-white hover:text-[#FFDD0A] transition-colors">
                Technology
              </Link>
              <Link href="/leather" className="text-white hover:text-[#FFDD0A] transition-colors">
                Leather
              </Link>
              <Link href="/construction" className="text-white hover:text-[#FFDD0A] transition-colors">
                Construction
              </Link>
              <Link href="/more" className="text-white hover:text-[#FFDD0A] transition-colors">
                More
              </Link>
            </div>

            {/* Contact Button (Desktop) */}
            <Link
              href="/contact"
              className="hidden md:block px-6 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-[#FFDD0A] transition-colors"
            >
              Contact
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-50 relative"
              aria-label="Toggle Menu"
            >
              <div
                className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <div
                className={`w-6 h-[2px] bg-white my-[6px] transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <div
                className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </button>
          </div>
        </nav>
        <div className="h-[1px] bg-gray-200 w-full"></div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gradient-to-b from-slate-900 to-slate-800 transform transition-transform duration-300 ease-in-out md:hidden z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-xl">
          <Link
            href="/"
            className="text-white hover:text-[#FFDD0A] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/aboutUs"
            className="text-white hover:text-[#FFDD0A] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/technology"
            className="text-white hover:text-[#FFDD0A] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Technology
          </Link>
          <Link
            href="/leather"
            className="text-white hover:text-[#FFDD0A] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Leather
          </Link>
          <Link
            href="/construction"
            className="text-white hover:text-[#FFDD0A] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Construction
          </Link>
          <Link
            href="/more"
            className="text-white hover:text-[#FFDD0A] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            More
          </Link>
          <Link
            href="/contact"
            className="px-6 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-[#FFDD0A] transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
