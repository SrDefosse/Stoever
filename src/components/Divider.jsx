import React from 'react';

const Divider = ({ className = '' }) => {
  return (
    <div className={`w-full flex justify-center py-8 ${className}`}>
      <div className="w-[90%] h-px bg-blue-900 rounded-full"></div>
    </div>
  );
};

export default Divider;
