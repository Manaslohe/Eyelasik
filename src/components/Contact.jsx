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
      className="min-h-screen flex items-center justify-start font-['Montserrat_Alternates'] relative"
      style={{
        backgroundImage: `url(${isMobile ? '/contactm.png' : '/contact.png'})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text visibility if needed */}
      <div className="absolute inset-0 bg-[#013A83]/30"></div>
      
      {/* Back Button */}
      <BackButton />
      
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 animate-fade-in-out font-['Montserrat_Alternates']">
          {toast.message}
        </div>
      )}
      
      {/* Main Content Container */}
      <div className="relative z-10 pl-4 sm:pl-8 md:pl-28 lg:pl-40 py-6 md:py-12 h-full flex items-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-[2.1rem] overflow-hidden relative border border-white/60 shadow-lg p-6 md:p-8 lg:p-12 w-[90vw] sm:w-auto max-w-lg h-[650px] flex flex-col justify-center">
          {/* Corner Dots */}
          <div className="absolute top-5 left-5 w-3 h-3 bg-white rounded-full opacity-80"></div>
          <div className="absolute top-5 right-5 w-3 h-3 bg-white rounded-full opacity-80"></div>
          <div className="absolute bottom-5 left-5 w-3 h-3 bg-white rounded-full opacity-80"></div>
          <div className="absolute bottom-5 right-5 w-3 h-3 bg-white rounded-full opacity-80"></div>
          
          {/* Contact Content Area */}
          <div className="text-white flex flex-col justify-between h-full py-4 md:py-6">
            <div className="w-full">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal mb-8 lg:mb-16 text-center">Connect with Us</h1>
              
              {/* For Appointment Section */}
              <div className="mb-8 lg:mb-14">
                <p className="text-lg lg:text-xl mb-4">For Appointment</p>
                <div className="flex items-center gap-2">
                  <a 
                    href="tel:+919265131270" 
                    className="flex items-center bg-white/20 rounded-full px-4 lg:px-6 py-3 hover:bg-white/30 transition-colors flex-grow min-w-0"
                  >
                    <span className="inline-flex justify-center items-center mr-4 w-8 h-8 bg-white/30 rounded-full shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <span className="text-base lg:text-xl truncate">+919265131270</span>
                  </a>
                  <button 
                    onClick={() => copyToClipboard('+919265131270', 'Phone number')}
                    className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors shrink-0"
                    aria-label="Copy phone number"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  </button>
                </div>
              </div>
              
              {/* Appointment by mail Section */}
              <div className="mb-12 lg:mb-20">
                <p className="text-lg lg:text-xl mb-4">Appointment by mail</p>
                <div className="flex items-center gap-2">
                  <a 
                    href="mailto:drshruti.sanghavi@gmail.com" 
                    className="flex items-center bg-white/20 rounded-full px-4 lg:px-6 py-3 hover:bg-white/30 transition-colors flex-grow min-w-0"
                  >
                    <span className="inline-flex justify-center items-center mr-4 w-8 h-8 bg-white/30 rounded-full shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <span className="text-base lg:text-xl truncate">drshruti.sanghavi@gmail.com</span>
                  </a>
                  <button 
                    onClick={() => copyToClipboard('drshruti.sanghavi@gmail.com', 'Email')}
                    className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors shrink-0"
                    aria-label="Copy email address"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Tagline - Centered */}
            <div className="mt-auto w-full text-center">
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-light text-white text-nowrap opacity-70">Beyond eyesight</h2>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-white opacity-70">complete eye care</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
