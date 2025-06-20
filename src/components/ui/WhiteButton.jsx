import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const WhiteButton = ({ text = "Click me", onClick, href = "#" }) => {
  const navigate = useNavigate();
  const isScrollLink = href.startsWith('#');
  
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    
    if (isScrollLink) {
      // Para scroll, usar comportamiento normal
      return;
    }
    
    // Para navegación, prevenir default y usar navigate
    e.preventDefault();
    navigate(href);
  };
  
  const buttonClasses = "group flex h-10 items-center gap-2 rounded-full bg-white pl-3 pr-4 text-gray-800 shadow-md transition-all duration-300 ease-in-out hover:bg-gray-100 hover:pl-2 hover:shadow-lg active:bg-gray-200 cursor-pointer";
  
  const content = (
    <>
      <span className="rounded-full bg-gray-800 p-1 text-sm text-white transition-colors duration-300 group-hover:bg-gray-800">
        <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-white group-active:-rotate-45" />
      </span>
      <span>{text}</span>
    </>
  );

  if (isScrollLink) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={buttonClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <div
      onClick={handleClick}
      className={buttonClasses}
    >
      {content}
    </div>
  );
};

export default WhiteButton;
