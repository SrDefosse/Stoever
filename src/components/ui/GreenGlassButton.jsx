import React from "react";
import { FiArrowRight } from "react-icons/fi";

const GreenGlassButton = ({ text = "Click me", onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="group flex h-10 items-center gap-2 rounded-full bg-green-500/30 backdrop-blur-md border border-white/30 pl-3 pr-4 text-white shadow-md transition-all duration-300 ease-in-out hover:bg-green-600 hover:pl-2 hover:shadow-lg active:bg-green-700"
    >
      <span className="rounded-full bg-white p-1 text-sm transition-colors duration-300 group-hover:bg-white">
        <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-green-600" />
      </span>
      <span className="transition-colors duration-300 group-hover:text-white">{text}</span>
    </button>
  );
};

export default GreenGlassButton;
