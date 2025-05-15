import React from "react";
import { FiArrowRight } from "react-icons/fi";

const YellowGlassButton = ({ text = "Click me", onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="group flex h-10 items-center gap-2 rounded-full bg-yellow-400/30 backdrop-blur-md border border-yellow-400/30 pl-3 pr-4 text-white shadow-md transition-all duration-300 ease-in-out hover:bg-yellow-400 hover:pl-2 hover:shadow-lg active:bg-yellow-700"
    >
      <span className="rounded-full bg-yellow-400 p-1 text-sm transition-colors duration-300 group-hover:bg-yellow-400">
        <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-white" />
      </span>
      <span className="transition-colors duration-300 group-hover:text-black">{text}</span>
    </button>
  );
};

export default YellowGlassButton;
