import React from 'react';

const LeatherVideo = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="w-[95%] md:w-[80%] h-[50vh] md:h-[85vh] relative rounded-xl shadow-2xl overflow-hidden">
        <video
          autoPlay
          loop
          playsInline
          controls
          className="w-full h-full object-cover"
        >
          <source src="/leather/leather-video.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </div>
  );
};

export default LeatherVideo;
