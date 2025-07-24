import React from 'react';
import '@fontsource/montserrat-alternates';
import { FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';

// Button info
const socialButtons = [
  {
    name: 'YOUTUBE',
    url: 'https://youtube.com/',
    icon: <FaYoutube size={28} color="#fff" />,
  },
  {
    name: 'INSTAGRAM',
    url: 'https://instagram.com/',
    icon: <FaInstagram size={28} color="#fff" />,
  },
  {
    name: 'FACEBOOK',
    url: 'https://facebook.com/',
    icon: <FaFacebookF size={28} color="#fff" />,
  }
];

// Button with gradient line component
function SocialButton({ name, url, icon, mobile }) {
  if (mobile) {
    // Mobile style: gradient background full width, small button centered, no border radius on gradient
    return (
      <div className="relative w-full min-w-screen my-2 flex items-center justify-center" style={{ height: '52px' }}>
        {/* Gradient background */}
        <div
          className="absolute left-0 top-0 w-full h-full"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #fff 50%, transparent 100%)',
            zIndex: 0,
          }}
        />
        {/* Centered small button with fixed width and font */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center border border-white h-13 w-[220px] max-w-xs rounded-full bg-[#007dfb] z-10 transition-transform duration-400 hover:scale-105 font-['Montserrat_Alternates']"
          style={{
            fontFamily: "'Montserrat Alternates', sans-serif",
            margin: '0 auto',
          }}
        >
          <span className="flex items-center justify-center pl-4 w-12 h-12 rounded-full bg-[#007dfb]">
            {icon}
          </span>
          <span
            className="ml-3 text-xl font-medium text-white tracking-wide font-['Montserrat_Alternates']"
          >
            {name}
          </span>
        </a>
      </div>
    );
  }
  // Desktop style button
  return (
    <div className="relative w-full flex items-center justify-start" style={{ height: '68px' }}>
      {/* Gradient line background */}
      <div
        className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-14 w-full rounded-full -z-10"
        style={{ background: 'linear-gradient(90deg, #FFFFFF 5%, transparent 100%)' }}
      />
      {/* Short button over gradient */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center h-14 w-[12vw] ml-0 border border-white rounded-full overflow-hidden transition-transform duration-400 hover:scale-105"
        style={{
          background: 'linear-gradient(90deg, #007dfb 5%, #007FFF 100%)',
          textDecoration: 'none',
          position: 'relative',
          fontFamily: "'Montserrat Alternates', sans-serif"
        }}
      >
        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-transparent ml-2">
          {icon}
        </span>
        <span className="ml-2 text-base md:text-[1rem] font-medium text-white tracking-wide"
          style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
        >
          {name}
        </span>
      </a>
    </div>
  );
}

const SocialMediaSection = () => {
  return (
    <div className="min-h-fit md:min-h-screen bg-[#013A83] py-6 md:py-12 overflow-x-hidden relative">
      <div className="max-w-full mx-auto px-0 md:px-4 flex flex-col items-center relative pb-4 md:pb-12">
        {/* Desktop view */}
        <div className="relative w-full hidden md:block">
          <img
            src="/promo.png"
            alt="Social Media Promotion"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            className="block ml-0"
          />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-6 w-full flex flex-col items-center text-center z-10">
            <h1 className="text-4xl sm:text-7xl font-medium text-white font-['Montserrat_Alternates'] drop-shadow-lg">join with us</h1>
            <p className="mt-3 text-ls sm:text-2xl text-gray-200 font-['Montserrat Alternates'] drop-shadow-lg">
              Join us on social media for the latest updates, eye care tips, and patient stories.
            </p>
          </div>
          {/* Right-side overlay */}
          <div className="absolute top-0 right-0 h-full flex items-center justify-end w-full pointer-events-none z-20">
            <div className="w-full md:w-[60%] bg-transparent flex flex-col justify-center items-start px-6 md:px-10 md:pt-0 py-8"
              style={{ pointerEvents: 'auto' }}>
              <h1 className="text-2xl md:text-6xl font-medium font-['Montserrat_Alternates'] mb-2 leading-tight text-left w-full bg-gradient-to-r from-[#007FFF] via-white to-white bg-clip-text text-transparent">
                Join Us on Social<br />Media and YouTube
              </h1>
              <p
                className="text-base md:text-2xl text-white mb-6 text-left w-full"
                style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
              >
                Subscribe on YouTube for expert eye care tips by Dr. Shruti Sanghavi.
                Follow us on social media for trusted vision advice &amp; updates!
              </p>
              {/* Social buttons over gradient lines */}
              {socialButtons.map((btn, idx) => (
                <SocialButton key={btn.name} {...btn} />
              ))}
              <div className="w-full text-right">
                <span
                  className="text-white text-base font-medium tracking-wide"
                  style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
                >
                  Your Vision Matters!
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile view */}
        <div className="w-full md:hidden flex flex-col items-center px-0">
          <h1 className="text-4xl font-medium text-white font-['Montserrat_Alternates'] drop-shadow-lg text-center mt-4">join with us</h1>
          <p className="mt-3 text-base text-gray-200 font-['Montserrat Alternates'] drop-shadow-lg text-center">
            Join us on social media for the latest updates, eye care tips, and patient stories.
          </p>
          <img
            src="/promom.png"
            alt="Social Media Promotion Mobile"
            className="w-full mx-auto my-6"
            style={{ objectFit: 'cover', width: '100%' }}
          />
          <div className="w-full flex flex-col items-center px-2">
            {socialButtons.map((btn, idx) => (
              <SocialButton key={btn.name} {...btn} mobile />
            ))}
            <div className="w-full text-center mt-2">
              <span
                className="text-white text-lg font-medium tracking-wide"
                style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
              >
                Your Vision Matters!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaSection;