import React, { useState } from 'react';
import WhiteGlassButton from "../ui/WhiteGlassButton"; // Asegúrate que este componente exista
import CustomSelect from "../ui/CustomSelect";

const ContactUs = () => {
  const [division, setDivision] = useState('');

  const divisionOptions = [
    { value: 'leather', label: 'Stoever Leather' },
    { value: 'construction', label: 'Stoever Construction' }
  ];

  return (
    <section className="w-full relative py-20 md:py-28">
      <div className="container mx-auto px-4 relative z-10">
        {/* --- Encabezado --- */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            Have questions or want to learn more about our products and services?
            Get in touch with our team and we'll be happy to assist you.
          </p>
        </div>

        {/* --- Contenedor Principal (Grid) --- */}
        {/* items-start asegura que las columnas no se estiren para igualar altura, h-full en la columna izquierda permitirá al mt-auto funcionar dentro de su propia altura de contenido */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start shadow-2xl rounded-xl p-8">
          
          {/* --- Columna Izquierda: Información de la empresa --- */}
          {/* Convertido a flex vertical, altura completa y padding inferior para separar el logo del borde */}
          <div className="flex flex-col h-full pb-4"> 
            {/* Div intermedio para agrupar el contenido superior y mantener el espaciado */}
            <div className="space-y-8"> 
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">Get in Touch</h3>
                <p className="text-gray-600">
                  We're here to help and answer any questions you might have. We look forward to hearing from you.
                </p>
              </div>

              {/* Detalles de contacto */}
              <div className="space-y-6">
                 {/* Our Location */}
                <div className="flex items-start space-x-4">
                  <div className="text-green-600 mt-1 shrink-0"> {/* shrink-0 para evitar que el icono se encoja */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">Our Location</h4>
                    <p className="text-gray-600">Industriales 502, Fraccionamiento Julian de Obregon León, Gto. México</p>
                  </div>
                </div>

                 {/* Email Us */}
                <div className="flex items-start space-x-4">
                  <div className="text-green-600 mt-1 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">Email Us</h4>
                    <p className="text-gray-600">info@stoever.com</p>
                  </div>
                </div>

                 {/* Call Us */}
                <div className="flex items-start space-x-4">
                  <div className="text-green-600 mt-1 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">Call Us</h4>
                    <p className="text-gray-600">+52 (477) 275-2012</p>
                  </div>
                </div>

                 {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="text-green-600 mt-1 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div> {/* Fin de Detalles de contacto */}
            </div> {/* Fin del Div intermedio */}

            {/* --- Logo --- */}
            {/* mt-auto empuja este div hacia abajo. pt-8 añade espacio arriba */}
            <div className="mt-auto pt-8"> 
              <img
                src="/icons/biosolutions_logo.webp"
                alt="Biosolutions Logo"
                className="h-24 md:h-32 object-contain"
              />
            </div>
          </div> {/* --- Fin Columna Izquierda --- */}

          {/* --- Columna Derecha: Formulario --- */}
          <div className="bg-green-600/75 backdrop-blur-lg rounded-xl shadow-2xl p-6 md:p-10 border border-white/20">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Type your full name" 
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:bg-white/15"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="example@yourcompany.com" 
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:bg-white/15"
                />
              </div>

              <div>
                <label htmlFor="division" className="block text-sm font-medium text-white/80 mb-1">Select Division</label>
                <CustomSelect
                  options={divisionOptions}
                  value={division}
                  onChange={setDivision}
                  placeholder="Select a division..."
                  variant="green"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="What is this about?" 
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:bg-white/15"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  placeholder="Write your comment or question here..." 
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent resize-none transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:bg-white/15"
                />
              </div>

              <div className="pt-4">
                <WhiteGlassButton text="Send Message" />
              </div>
            </form>
          </div> {/* --- Fin Columna Derecha --- */}

        </div> {/* --- Fin Contenedor Principal (Grid) --- */}

        {/* --- Mapa de Google --- */}
        <div className="max-w-7xl mx-auto mt-16 md:mt-24">
          <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-6 text-center md:text-left">
            Our Headquarters
          </h3>
          <div className="w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl border border-green-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59555.233035071!2d-101.70241655136712!3d21.10450880000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbfce99289a9f%3A0xe4ed8f64e56ef1c4!2sQuimica%20Stoever!5e0!3m2!1ses-419!2smx!4v1748975300557!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
