import React from 'react';
import '@fontsource/montserrat-alternates';

const EyeButton = ({ icon, alt }) => (
  <button className="group relative">
    <div 
      className="w-32 h-16 sm:w-48 sm:h-20 relative flex items-center justify-center transition-all duration-300 hover:scale-105"
      style={{
        background: `url('/elipse.png') no-repeat center center / 100% 100%`
      }}
    >
      <img 
        src={`/icons/${icon}.png`}
        alt={`${alt} Icon`}
        className="w-6 h-6 sm:w-14 sm:h-14 brightness-0 invert transform transition-transform group-hover:scale-110"
      />
    </div>
  </button>
);

const SocialMediaSection = () => {
  return (
    <div className="min-h-fit md:min-h-screen bg-[#013A83] py-6 md:py-12 overflow-x-hidden relative">
      {/* Background Image */}
      <div className="absolute bottom-0 w-full pointer-events-none">
        <img 
          src="/socialb.png"
          alt="Background Decoration"
          className="w-auto h-[550px] md:h-[800px] mx-auto md:mr-0 md:ml-auto opacity-100 md:opacity-100"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 flex flex-col items-center relative pb-4 md:pb-12">
        {/* Header Text */}
        <div className="text-center mb-10 w-full">
          <h1 className="text-4xl sm:text-7xl font-medium text-white font-['Montserrat_Alternates']">join with us</h1>
          <p className="mt-3 text-ls sm:text-2xl text-gray-200 font-['Montserrat Alternates']">
            Join us on social media for the latest updates, eye care tips, and patient stories.
          </p>
        </div>

        {/* Social Media "Eye" Buttons */}
        <div className="flex justify-center items-center space-x-8 mb-12">
          <EyeButton icon="instagram" alt="Instagram" />
          <EyeButton icon="facebook" alt="Facebook" />
        </div>

        {/* Image container with YouTube button */}
        <div className="w-full relative">
          {/* Desktop promo image */}
          <img 
            src="/promo.png" 
            alt="Social Media Promotion Desktop"
            className="w-full h-auto object-contain hidden md:block"
          />
          
          {/* Mobile promo image */}
          <img 
            src="/socialm.png" 
            alt="Social Media Promotion Mobile"
            className="w-full h-auto object-contain block md:hidden"
          />
          
          {/* YouTube button overlay */}
          <button className="absolute top-17 right-12 md:top-57 md:right-25 transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-full cursor-pointer">
            <img 
              src="/youtubeb.png"
              alt="YouTube Button"
              className="w-30 md:w-54 h-auto z-10"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaSection;