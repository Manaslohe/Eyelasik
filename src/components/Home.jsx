import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, position, linePosition }) => {
  return (
    <div className={`absolute ${position} w-64`}>
      {/* Card with glass effect and blue gradient */}
      <div className="relative bg-gradient-to-br from-[#0157c8]/70 to-[#013A83]/70 backdrop-blur-md p-5 text-center flex flex-col items-center justify-center h-48 rounded-xl border border-blue-300/50 overflow-hidden">
        {/* Corner dots with proper positioning */}
        <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute bottom-2 right-2 w-2 h-2 bg-white rounded-full"></div>
        
        {/* Card content */}
        <div className="flex justify-center mb-3">
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-1 text-white">{title}</h3>
        <p className="text-xs text-white">{description}</p>
      </div>
      
      {/* Connecting line */}
      {linePosition && (
        <div className={`absolute ${linePosition} bg-blue-300/30 z-0`}></div>
      )}
    </div>
  );
};

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white text-center relative">
      {/* Main content with relative position to stay above the background */}
      <div className="relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-8xl font-bold mb-5 pt-4">
          Complete <span className="text-[#3B9BFF]">Vision</span> Care
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-8 md:mb-16 max-w-4xl mx-auto px-4">
          From Checkups to Clarity. Advanced Solutions for Every Eye. Complete Vision Care, All in One Place.
        </p>
        
        {/* CTA Button */}
        <div className="mb-12 md:mb-18 flex justify-center relative z-30">
          <button
            id="book-appointment-btn"
            className="px-8 md:px-14 py-2 md:py-3 rounded-full text-lg md:text-xl font-medium shadow-lg transition-all duration-300 cursor-pointer
              bg-gradient-to-r from-[#007FFF] to-[#013A83]
              border border-white/80
              text-white
              font-[Poppins]
              tracking-wide
              outline-none
              hover:hover:shadow-blue-600/30
              "
            type="button"
            style={{
              borderWidth: '2px',
              borderColor: '#b3e0ff',
              letterSpacing: '0.04em',
            }}
          >
            BOOK YOUR APPOINTMENT
          </button>
        </div>

        {/* Services Section with Eye Image Center */}
        <div className="relative max-w-5xl mx-auto">
          {/* Eye Image and glow effects */}
          <div className="relative mb-8 md:mb-0">
            {/* Bright blue glow effect behind the image */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
              <div className="w-[500px] h-[500px] rounded-full bg-[#1e90ff] opacity-60 blur-3xl"></div>
            </div>
            {/* Glow effect behind the image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[850px] h-[850px] rounded-full bg-gradient-to-r from-[#0078FF] to-[#013A83] opacity-40 blur-xl"></div>
            </div>
            
            {/* Image at larger size */}
            <img 
              src="/hero.png" 
              alt="Eye" 
              className="w-full max-w-[600px] mx-auto relative z-10"
            />
            
            {/* Center text overlay - Fixed z-index and increased visibility */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className=" bg-opacity-90 rounded-full p-5 shadow-xl ">
                <h2 className="text-xl font-bold text-white">OUR <br />SERVICES</h2>
              </div>
            </div>
          </div>
          
          {/* Services Cards - Mobile: 2 columns grid, Desktop: absolute positioning */}
          <div className="md:hidden grid grid-cols-2 gap-4 px-4 mt-8">
            <ServiceCard 
              position=""
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              }
              title="LASIK & Refractive Surgery"
              description="Advanced vision correction for a glasses-free life."
            />
            
            <ServiceCard 
              position=""
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              }
              title="Dry Eye & Ocular Surface Treatment"
              description="Relieving irritation and ensuring comfort with advanced eye surface care."
            />
            
            <ServiceCard 
              position=""
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="Cornea & Transplants"
              description="Restoring clarity through expert cornea care and transplants."
            />
            
            <ServiceCard 
              position=""
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              }
              title="General Eye Care"
              description="Comprehensive eye health services for all ages and needs."
            />
            
            <ServiceCard 
              position=""
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
              title="Pediatric & Glaucoma"
              description="Specialized eye care for children and expert management of glaucoma."
            />
          </div>

          {/* Desktop layout - hidden on mobile */}
          <div className="hidden md:block">
            {/* Original absolutely positioned cards */}
            {/* LASIK Card - Top Left */}
            <ServiceCard 
              position="top-10 left-0 md:-left-16"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              }
              title="LASIK & Refractive Surgery"
              description="Advanced vision correction for a glasses-free life."
            />
            
            {/* Dry Eye Card - Top Right */}
            <ServiceCard 
              position="top-10 right-0 md:-right-16"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              }
              title="Dry Eye & Ocular Surface Treatment"
              description="Relieving irritation and ensuring comfort with advanced eye surface care."
            />
            
            {/* Cornea Card - Bottom Left */}
            <ServiceCard 
              position="top-110 left-0 md:-left-16"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="Cornea & Transplants"
              description="Restoring clarity through expert cornea care and transplants."
            />
            
            {/* General Eye Care - Bottom Right */}
            <ServiceCard 
              position="top-110 right-0 md:-right-16"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              }
              title="General Eye Care"
              description="Comprehensive eye health services for all ages and needs."
            />
            
            {/* Pediatric & Glaucoma - Bottom Center */}
            <ServiceCard 
              position="-bottom-70 mx-auto left-0 right-0"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
              title="Pediatric & Glaucoma"
              description="Specialized eye care for children and expert management of glaucoma."
            />
          </div>
        </div>
        
        {/* Spacing for bottom cards */}
        <div className="h-20 md:h-80"></div>
      </div>
    </div>
  );
};

export default Home;
