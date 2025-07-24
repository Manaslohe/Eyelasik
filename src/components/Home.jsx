import React from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/montserrat-alternates/400.css';  // Regular
import '@fontsource/montserrat-alternates/500.css';  // Medium
import '@fontsource/montserrat-alternates/700.css';  // Bold
import '@fontsource/montserrat-alternates';

// Add react-icons import
import { FaEye, FaGlasses, FaRegEye, FaBandAid, FaBurn, FaLayerGroup } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description, position, linePosition }) => {
  return (
    <div className={`md:absolute relative ${position} md:w-64 w-full font-['Montserrat_Alternates']`}>
      {/* Card with glass effect and blue gradient */}
      <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-blue-300/10 backdrop-blur-md p-5 text-center flex flex-col items-center justify-center h-48 rounded-xl border border-blue-300/50 overflow-hidden shadow-lg">
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
    <div className="container mx-auto px-0 py-8 text-white text-center relative font-['Montserrat_Alternates']">
      {/* Main content with relative position to stay above the background */}
      <div className="relative z-10">
        {/* Main Heading */}
        <h1 className="text-[2.2rem] md:text-8xl font-[500] mb-0 pt-4">
          Complete <span className="bg-gradient-to-r from-[#3B9BFF] to-white text-transparent bg-clip-text">Vision</span> Care
        </h1>
        
        {/* Subtitle and below wrapped in background image */}
        <div className="relative z-0 -mt-2 pb-0">
          {/* Subtitle */}
          <div className="flex  md:px-0 px-4  items-center justify-center">
            <p className="text-[0.8rem] md:text-xl mb-8 md:mb-16 max-w-none md:max-w-5xl mx-auto px-4 pt-6 font-medium leading-normal">
              <span className="md:whitespace-nowrap">From Checkups to Clarity. Advanced Solutions for Every Eye. Complete Vision Care, All in One Place.</span>
            </p>
          </div>

          {/* Background Image Container */}
          <div 
            className="absolute z-0 w-screen left-[50%] translate-x-[-50%]"
            style={{
              top: '120px', // Changed from '0' to '100px'
              height: 'calc(100% + 25vh)',
            }}
          >
            <img
              src="/herobg.png"
              alt=""
              style={{
                width: '100%',
                height: '100%',
                opacity: 0.6,
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              className="block"
              draggable={false}
            />
          </div>

          {/* CTA Button */}
          <div className="mb-12 md:mb-18 flex justify-center relative z-30">
            <button
              id="book-appointment-btn"
              className="px-2 md:px-14 py-2 md:py-3 rounded-full text-[0.8rem] md:text-xl font-medium shadow-lg transition-all duration-300 cursor-pointer
                bg-gradient-to-r from-[#007FFF] to-[#013A83]
           border-white/50
                text-white
                font-['Montserrat_Alternates']
                tracking-wide
                outline-none
                hover:hover:shadow-blue-600/30
                "
              type="button"
              style={{
                borderWidth: '1px',
                letterSpacing: '0.04em',
              }}
            >
              BOOK YOUR APPOINTMENT
            </button>
          </div>

          {/* Services Section with Eye Image Center */}
          <div className="relative max-w-5xl mx-auto md:mt-0 mt-8">
            {/* Eye Image and glow effects */}
            <div className="relative mb-8 md:top-50 px-4 md:px-0"> {/* Added md:mb-32 for desktop spacing */}
              {/* Bright blue glow effect behind the image */}
              <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none scale-75 md:scale-100 md:translate-y-20"> {/* Added md:translate-y-20 */}
                <div className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-[#1e90ff] opacity-60 blur-3xl"></div>
              </div>
              
              {/* Glow effect behind the image */}
              <div className="absolute inset-0 flex items-center justify-center scale-75 md:scale-100">
                <div className="w-[450px] md:w-[850px] h-[450px] md:h-[850px] rounded-full bg-gradient-to-r from-[#0078FF] to-[#013A83] opacity-40 blur-xl"></div>
              </div>
              
              {/* Image at larger size */}
              <img 
                src="/hero.png" 
                alt="Eye" 
                className="w-full max-w-[300px] md:max-w-[600px] mx-auto relative z-10"
              />
              
              {/* Center text overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="bg-opacity-90 rounded-full p-3 md:p-5 shadow-xl">
                  <h2 className="text-sm md:text-xl font-bold text-white">OUR <br />SERVICES</h2>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Grid Layout */}
            <div className="md:hidden grid grid-cols-2 gap-4 px-4 mt-12">
              <ServiceCard 
                position=""
                icon={<FaGlasses className="h-8 w-8 md:h-12 md:w-12" />}
                title="LASIK & Refractive Surgery"
                description="Helping people achieve clear vision for a glasses-free life"
              />
              <ServiceCard 
                position=""
                icon={<FaEye className="h-8 w-8 md:h-12 md:w-12" />}
                title="Cataract Surgery"
                description="Cataract surgery is quick and safe, removing the eye's clouded lens with an artificial lens"
              />
              <ServiceCard 
                position=""
                icon={<FaRegEye className="h-8 w-8 md:h-12 md:w-12" />}
                title="Pterygium Surgery"
                description="Pterygium removal treats abnormal surface growth, leading to resolution and improving vision"
              />
              <ServiceCard 
                position=""
                icon={<FaBandAid className="h-8 w-8 md:h-12 md:w-12" />}
                title="Amniotic Membrane Transplantation"
                description="Promote healing of eye surface using biological membrane tissue"
              />
              <ServiceCard 
                position=""
                icon={<FaLayerGroup className="h-8 w-8 md:h-12 md:w-12" />}
                title="Collagen Cross-Linking"
                description="Collagen Cross-Linking strengthens the cornea to stop progression and prevent further vision loss"
              />
              <ServiceCard 
                position=""
                icon={<FaBurn className="h-8 w-8 md:h-12 md:w-12" />}
                title="Chemical and Thermal Burns"
                description="Urgent care for chemical and thermal burns to protect and preserve eye health"
              />
            </div>

            {/* Desktop layout - keep existing code */}
            <div className="hidden md:block">
              {/* LASIK Card - Top Center */}
              <ServiceCard 
                position="top-0  mx-auto left-0 right-0"
                icon={<FaGlasses className="h-12 w-12" />}
                title="LASIK & Refractive Surgery"
                description="Helping people achieve clear vision for a glasses-free life"
              />

              {/* Cataract Card - Top Left */}
              <ServiceCard 
                position="top-50 left-0 md:-left-16"
                icon={<FaEye className="h-12 w-12" />}
                title="Cataract Surgery"
                description="Cataract surgery is quick and safe, removing the eye's clouded lens with an artificial lens"
              />

              {/* Pterygium Card - Top Right */}
              <ServiceCard 
                position="top-50 right-0 md:-right-16"
                icon={<FaRegEye className="h-12 w-12" />}
                title="Pterygium Surgery"
                description="Pterygium removal treats abnormal surface growth, leading to resolution and improving vision"
              />

              {/* Amniotic Membrane - Bottom Left */}
              <ServiceCard 
                position="top-150 left-0 md:-left-16"
                icon={<FaBandAid className="h-12 w-12" />}
                title="Amniotic Membrane Transplantation"
                description="Promote healing of eye surface using biological membrane tissue"
              />

              {/* Collagen Cross-Linking - Bottom Right */}
              <ServiceCard 
                position="top-150 right-0 md:-right-16"
                icon={<FaLayerGroup className="h-12 w-12" />}
                title="Collagen Cross-Linking"
                description="Collagen Cross-Linking strengthens the cornea to stop progression and prevent further vision loss"
              />

              {/* Chemical and Thermal Burns - Bottom Center */}
              <ServiceCard 
                position="-bottom-15 mx-auto left-0 right-0"
                icon={<FaBurn className="h-12 w-12" />}
                title="Chemical and Thermal Burns"
                description="Urgent care for chemical and thermal burns to protect and preserve eye health"
              />
            </div>

            {/* Spacing for bottom cards */}
            <div className="h-0 md:h-80"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
