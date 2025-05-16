import React from "react";
import { FiArrowRight } from "react-icons/fi";

const YellowButton = ({ text = "Click me", href, onClick }) => {
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className="group inline-flex h-10 items-center gap-2 rounded-full bg-yellow-400 pl-3 pr-4 text-gray-800 shadow-md transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:pl-2 hover:shadow-lg active:bg-yellow-600"
      >
        <span className="rounded-full bg-gray-800 p-1 text-sm text-yellow-400 transition-colors duration-300 group-hover:bg-gray-800">
          <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-yellow-400 group-active:-rotate-45" />
        </span>
        <span>{text}</span>
      </a>
    );
  }

  return (
    <button 
      onClick={onClick}
      className="group inline-flex h-10 items-center gap-2 rounded-full bg-yellow-400 pl-3 pr-4 text-gray-800 shadow-md transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:pl-2 hover:shadow-lg active:bg-yellow-600"
    >
      <span className="rounded-full bg-gray-800 p-1 text-sm text-yellow-400 transition-colors duration-300 group-hover:bg-gray-800">
        <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-yellow-400 group-active:-rotate-45" />
      </span>
      <span>{text}</span>
    </button>
  );
};

export default YellowButton;
