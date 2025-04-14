import React from 'react';

const WhiteDivider = ({ className = '' }) => {
  return (
    <div className={`w-full flex justify-center py-8 ${className}`}>
      <div className="w-[90%] h-px bg-white rounded-full"></div>
    </div>
  );
};

export default WhiteDivider;
