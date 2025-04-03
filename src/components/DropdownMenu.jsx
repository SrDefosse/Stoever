import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, children, dropdown = false }) => (
  <Link href={href}>
    <li
      className={`text-white font-medium transition-all duration-200 ${
        dropdown
          ? 'hover:text-blue-200 py-2 px-4 hover:bg-white/10 rounded-lg w-full'
          : 'hover:text-blue-200'
      }`}
    >
      {children}
    </li>
  </Link>
);

const DropdownMenu = ({ items, isOpen }) => {
  return (
    <div
      className={`absolute top-full left-0 bg-gray-500/90 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen
          ? 'opacity-100 translate-y-0 visible'
          : 'opacity-0 -translate-y-2 invisible pointer-events-none'
      }`}
    >
      <ul className="py-2 min-w-[200px]">
        {items.map((item) => (
          <NavLink key={item.href} href={item.href} dropdown>
            {item.text}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
