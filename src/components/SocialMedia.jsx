import React from 'react';

const SocialMediaSection = () => {
  // Replace with the actual path to your doctor image
  const doctorImageUrl = '/images/doctor-pointing.png'; // Example: place in public/images/

  return (
    <div className="min-h-screen bg-[#013A83] py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center font-sans">
      {/* Header Text */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">join with us</h1>
        <p className="mt-3 text-lg text-gray-200">
          Join us on social media for the latest updates, eye care tips, and patient stories.
        </p>
      </div>

      {/* Social Media "Eye" Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 mb-12">
        {/* Instagram Button */}
        <button
          className="relative w-48 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-105"
          style={{ clipPath: 'ellipse(50% 35% at 50% 50%)' }} // Basic almond shape
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-blue-700">instagram</span>
          </div>
        </button>

        {/* Facebook Button */}
        <button
          className="relative w-48 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-105"
          style={{ clipPath: 'ellipse(50% 35% at 50% 50%)' }} // Basic almond shape
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-blue-700">facebook</span>
          </div>
        </button>
      </div>

      {/* YouTube Promotion Card */}
      <div className="w-full max-w-7xl p-1.5">
        <div className="bg-white/10 rounded-[2.1rem] overflow-hidden min-h-[480px] relative border border-white/60 shadow-lg">
          {/* Right Image Area - Positioned absolutely to remain fixed regardless of content changes */}
          <div className="absolute right-0 bottom-0 w-[45%] h-full z-0 md:block hidden">
            <img
              src="/promo.png"
              alt="Dr. Shruti Sanghavi pointing towards YouTube promotion"
              className="max-w-none h-auto 
                md:h-[380px] lg:h-[700px] 
                w-auto md:w-[450px] lg:w-[1350px]
                object-contain object-bottom pointer-events-none 
                absolute bottom-24 -right-2 
                transform translate-y-12 md:translate-x-16"
            />
          </div>
          <div className="absolute right-0 bottom-0 w-[45%] h-full z-30 md:block hidden">
            <img
              src="/promo2.png"
              alt="Dr. Shruti Sanghavi pointing towards YouTube promotion"
              className="max-w-none h-auto 
                md:h-[380px] lg:h-[700px] 
                w-auto md:w-[450px] lg:w-[1450px]
                object-contain object-bottom pointer-events-none 
                absolute bottom-12 -right-17 
                transform translate-y-12 md:translate-x-16"
            />
          </div>
          <div className="flex flex-col md:flex-row h-full relative">
            {/* Left Content Area */}
            <div className="w-full md:w-[55%] p-12 lg:p-16 text-white flex flex-col justify-center relative z-10">
              {/* YouTube button with absolute positioning to adjust independently */}
              <div className="relative">
                <button className="absolute  border border-white/60 top-0 mt-7 left-0 px-6 py-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full inline-flex items-center justify-start shadow-md hover:shadow-lg transition-shadow z-20 w-48">
                  <div className="rounded-full py-1.5 flex items-center justify-start w-full">
                    <img 
                      src="/icons/youtube.png" 
                      alt="YouTube Icon" 
                      className="w-8 h-8 mr-2" 
                    />
                    <span className="font-normal text-2xl text-white ">YOUTUBE</span>
                  </div>
                </button>
              </div>
              
              {/* Add spacing to account for the absolute positioned button */}
              <div className="h-16"></div>

              {/* Headline - independently positionable */}
              <div className="relative mb-8 mt-14">
                <h2 className="text-4xl lg:text-7xl font-normal leading-tight z-10">
                  <span className="bg-gradient-to-r from-white via-blue-300 to-blue-500 text-transparent bg-clip-text inline-block">
                    Join Our YouTube
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-white via-blue-300 to-blue-500 text-transparent bg-clip-text inline-block">
                    Channel
                  </span>
                </h2>
              </div>
              
              {/* Subheading - independently positionable */}
              <div className="relative mb-8 -mt-8">
                <p className="text-4xl font-normal z-10">Your Vision Matters!</p>
              </div>
              
              {/* Description text - independently positionable */}
              <div className="relative mt-10 -ml-10 bg-white/10 backdrop-blur-sm rounded-[2rem] rounded-tl-none shadow-lg md:w-[155%] z-5">
                <p className="text-lg text-gray-200 leading-relaxed p-6">
                  Join our YouTube channel for expert eye care tips and guidance from Dr. Shruti Sanghavi.
                  Learn how to protect your vision, understand common eye conditions, and get trusted
                  advice on treatments, eye drops, and daily habits. Subscribe now and take a step toward
                  healthier eyes!
                </p>
              </div>
            </div>

            {/* Placeholder div to maintain layout with absolutely positioned image */}
            <div className="w-full md:w-[45%] relative"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaSection;