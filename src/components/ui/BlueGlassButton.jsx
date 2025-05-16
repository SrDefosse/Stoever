import React from "react";
import { FiArrowRight } from "react-icons/fi";

const BlueGlassButton = ({ text = "Click me", onClick, href = "#" }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group flex h-10 items-center gap-2 rounded-full bg-blue-500/30 backdrop-blur-md border border-white/30 pl-3 pr-4 text-white shadow-md transition-all duration-300 ease-in-out hover:bg-blue-600 hover:pl-2 hover:shadow-lg active:bg-blue-700"
    >
      <span className="rounded-full bg-white p-1 text-sm transition-colors duration-300 group-hover:bg-white">
        <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-blue-600" />
      </span>
      <span className="transition-colors duration-300 group-hover:text-white">{text}</span>
    </a>
  );
};

export default BlueGlassButton;
