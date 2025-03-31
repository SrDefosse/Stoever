import React from 'react';
import WhiteButton from './WhiteButton';

const HomeContactUs = () => {
  return (
    <section className="w-full relative py-16 md:py-24">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#011961] mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to learn more about our products and services? 
            Get in touch with our team and we'll be happy to assist you.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#007AFFff] backdrop-blur-md rounded-xl shadow-2xl p-6 md:p-8 border border-white/20">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-white text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-white text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-white text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-white text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="message" className="block text-white text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="md:col-span-2 flex justify-center mt-4">
                <WhiteButton text="Send Message" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactUs;
