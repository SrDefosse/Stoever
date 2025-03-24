import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#00205B] text-white py-16 px-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Who We Are Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Who We Are</h2>
            <ul className="space-y-2">
              <li><Link href="/about-us" className="hover:text-gray-300">About Us</Link></li>
              <li><Link href="/technology" className="hover:text-gray-300">Technology</Link></li>
              <li><Link href="/leather" className="hover:text-gray-300">Leather</Link></li>
              <li><Link href="/construction" className="hover:text-gray-300">Construction</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Company</h2>
            <ul className="space-y-2">
              <li><Link href="/careers" className="hover:text-gray-300">Careers</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Support</h2>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">For News & Promotions. Join Our Newsletter!</h2>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Type your email. Ex. example@gmail.com"
                className="flex-grow p-2 rounded bg-transparent border-b border-white focus:outline-none"
              />
              <button className="bg-[#2563EB] text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="mt-12 text-center md:text-left">
          <p>Industriales 502, Fraccionamiento Julian de Obregon León, Gto. México</p>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">FOLLOW US:</h2>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.667 14.667H8.333v-1.666h7.334v1.666zM15.667 13H8.333v-1.667h7.334V13zm0-2.667H8.333V8.667h7.334v1.666z"/></svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
          </div>
          <p>STOEVER © 2020 | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
