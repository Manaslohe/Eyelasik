import React, { useState, useEffect } from 'react';
import BackButton from './BackButton';

const Contact = () => {
  const [toast, setToast] = useState({ show: false, message: '' });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setToast({ 
          show: true, 
          message: `${type} copied to clipboard!` 
        });
        
        // Hide toast after 3 seconds
        setTimeout(() => {
          setToast({ show: false, message: '' });
        }, 3000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center font-['Montserrat_Alternates'] relative"
      style={{
        backgroundImage: `url(${isMobile ? '/contactm.png' : '/contact.png'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#013A83]/40 to-[#013A83]/20"></div>
      
      <BackButton />
      
      {toast.show && (
        <div className="fixed top-4 right-4 bg-white/90 text-[#013A83] px-6 py-3 rounded-full shadow-lg z-50 animate-fade-in-out font-medium transition-all duration-300 ease-in-out">
          {toast.message}
        </div>
      )}
      
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-8 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12 w-full max-w-2xl transition-all duration-300 hover:shadow-3xl">
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-white/30 rounded-tl-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-white/30 rounded-br-3xl"></div>

            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-light text-white text-center mb-12 tracking-wide">
              Connect with Us
            </h1>

            {/* Contact Methods */}
            <div className="space-y-8">
              {/* Phone Section */}
              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <p className="text-white/90 text-lg mb-3 font-medium">Schedule an Appointment</p>
                <div className="flex items-center gap-3">
                  <a 
                    href="tel:+919265131270" 
                    className="flex items-center bg-white/15 rounded-xl px-6 py-4 hover:bg-white/25 transition-all duration-300 flex-grow group"
                  >
                    <span className="inline-flex justify-center items-center mr-4 w-10 h-10 bg-white/20 rounded-full group-hover:bg-white/30 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <span className="text-lg text-white/90 group-hover:text-white transition-colors duration-300">+919265131270</span>
                  </a>
                  <button 
                    onClick={() => copyToClipboard('+919265131270', 'Phone number')}
                    className="bg-white/15 p-4 rounded-xl hover:bg-white/25 transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Email Section */}
              <div className="transform transition-all duration-300 hover:scale-[1.02]">
                <p className="text-white/90 text-lg mb-3 font-medium">Email Us</p>
                <div className="flex items-center gap-3">
                  <a 
                    href="mailto:drshruti.sanghavi@gmail.com" 
                    className="flex items-center bg-white/15 rounded-xl px-6 py-4 hover:bg-white/25 transition-all duration-300 flex-grow group"
                  >
                    <span className="inline-flex justify-center items-center mr-4 w-10 h-10 bg-white/20 rounded-full group-hover:bg-white/30 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <span className="text-lg text-white/90 group-hover:text-white transition-colors duration-300 truncate">
                      drshruti.sanghavi@gmail.com
                    </span>
                  </a>
                  <button 
                    onClick={() => copyToClipboard('drshruti.sanghavi@gmail.com', 'Email')}
                    className="bg-white/15 p-4 rounded-xl hover:bg-white/25 transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-8 border-t border-white/20">
                <div className="flex justify-center space-x-6">
                  {['facebook', 'instagram', 'linkedin'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-white/70 hover:text-white transition-colors duration-300"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-10 h-10 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition-all duration-300">
                        <i className={`fab fa-${social} text-xl`}></i>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div className="mt-12 text-center">
              <h2 className="text-4xl md:text-5xl font-light text-white/80 tracking-wide mb-2">
                Beyond eyesight
              </h2>
              <p className="text-2xl md:text-3xl font-light text-white/70">
                complete eye care
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
