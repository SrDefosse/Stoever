import React from 'react';

const Divider = ({ className = '' }) => {
  return (
    <div className={`w-full flex justify-center py-8 ${className}`}>
      <div className="w-[90%] h-0.5 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full shadow-md"></div>
    </div>
  );
};

export default Divider;
