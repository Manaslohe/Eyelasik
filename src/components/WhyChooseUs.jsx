import { useState, useEffect, useRef } from 'react';
import '@fontsource/montserrat-alternates';
import '@fontsource/montserrat-alternates/400.css';
import '@fontsource/montserrat-alternates/500.css';
import '@fontsource/montserrat-alternates/700.css';

export default function WhyChooseUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);
  const touchStartRef = useRef(null);
  const touchEndRef = useRef(null);
  const carouselRef = useRef(null);
  const [touchDelta, setTouchDelta] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  // Track window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Fix for reliable auto-rotation
  useEffect(() => {
    if (isPaused) return;

    const intervalId = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
      setIsAnimating(true);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  // Modified pause auto-rotation
  const pauseAutoRotation = () => {
    setIsPaused(true);
    
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  // Improved touch handlers
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
    touchEndRef.current = e.touches[0].clientX;
    setTouchDelta(0);
    pauseAutoRotation();
  };

  const handleTouchMove = (e) => {
    if (!touchStartRef.current) return;
    
    const currentX = e.touches[0].clientX;
    touchEndRef.current = currentX;
    const delta = currentX - touchStartRef.current;
    const cappedDelta = Math.min(Math.max(delta, -150), 150);
    
    if (Math.abs(delta) > 10) {
      e.preventDefault();
    }
    
    setTouchDelta(cappedDelta);
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current) return;
    
    const finalDelta = touchEndRef.current - touchStartRef.current;
    const threshold = 40;

    if (Math.abs(finalDelta) < 10) {
      handleCardTap('center');
    } else if (finalDelta > threshold) {
      handleSlideChange((currentSlide - 1 + 3) % 3);
    } else if (finalDelta < -threshold) {
      handleSlideChange((currentSlide + 1) % 3);
    }
    
    touchStartRef.current = null;
    touchEndRef.current = null;
    setTouchDelta(0);
  };

  // Simplified slide change handler
  const handleSlideChange = (newIndex) => {
    if (isAnimating || newIndex === currentSlide) return;
    
    setIsAnimating(true);
    setCurrentSlide(newIndex);
    pauseAutoRotation();
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Modified card click handler for mobile
  const handleCardTap = (position) => {
    if (isAnimating || windowWidth < 640) {
      // On mobile, any tap advances to next slide
      handleSlideChange((currentSlide + 1) % 3);
      return;
    }
    
    // Desktop behavior remains the same
    pauseAutoRotation();
    if (position === 'left') {
      handleSlideChange((currentSlide - 1 + 3) % 3);
    } else if (position === 'right') {
      handleSlideChange((currentSlide + 1) % 3);
    } else if (position === 'center') {
      handleSlideChange((currentSlide + 1) % 3);
    }
  };

  // Ensure cleanup of all timeouts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Slides data
  const slides = [
    {
      icon: "/wcu1.png", // Placeholder for the eye icon
      title: "Advanced LASIK & Refractive Expertise",
      description: "Expert in modern refractive procedures including LASIK, Trans PRK, and PTK ensuring safe, precise, and effective vision correction.",
      tagline: "Modern Vision Correction with Precision, Safety, and Care."
    },
    {
      icon: "/wcu2.png", // Placeholder for the crown icon
      title: "15+ Years of Trusted Experience",
      description: "Delivering consistent, high-quality ophthalmic care with a proven track record in surgical excellence and patient satisfaction.",
      tagline: "Trusted Eye Care. Proven Excellence. Patient Centered Always."
    },
    {
      icon: "/wcu3.png", // Placeholder for the user-check icon
      title: "Patient-Centric Approach",
      description: "Every treatment is tailored through thorough preoperative evaluation, honest counseling, and meticulous follow-up care.",
      tagline: "Personalized Eye Care. Guided by Precision and Trust."
    }
  ];

  // Calculate card positions and animations
  const getCardDetails = (index) => {
    const positions = [
      { position: 'left', zIndex: 10, opacity: 'sm:opacity-100', scale: 'scale-90' },
      { position: 'center', zIndex: 20, opacity: 'opacity-100', scale: 'scale-100' },
      { position: 'right', zIndex: 10, opacity: 'sm:opacity-100', scale: 'scale-90' }
    ];
    
    // Calculate position in carousel (0=left, 1=center, 2=right)
    const positionIndex = (index - currentSlide + 3) % 3;
    return positions[positionIndex];
  };

  return (
    <div className="w-full bg-[#013A83] text-white -mt-82 pb-12 px-4 md:px-8 relative z-20 font-['Montserrat_Alternates']">
        <div 
          className="absolute z-0 overflow-visible flex items-center"
          style={{
            justifyContent: 'flex-start',
            pointerEvents: 'none',
            top: '-15vh',  // Extend 15% of viewport height above
            bottom: '-15vh', // Extend 15% of viewport height below
            left: 0,
            right: 0,
            height: 'calc(100% + 30vh)', // Increase height to account for the overlap
          }}
        >
          <img
            src="/gradient2.png"
            alt=""
            style={{
              height: '120%',
              opacity: 0.7,
              objectFit: 'cover',
              objectPosition: 'center left',
            }}
            className="block w-full sm:w-full"
            draggable={false}
          />
        </div>

        {/* Section heading */}
      <div className="text-center mb-10 relative z-10">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-medium mb-2">
          Why <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">Choose</span> Us
        </h2>
        <p className="text-sm md:text-lg text-blue-100 max-w-4xl mx-auto px-4 font-normal">
          Trusted expertise, cutting-edge technology, and a commitment to personalized, patient-first care.
        </p>
      </div>

      {/* Cards section */}
      <div 
        ref={carouselRef}
        className="max-w-7xl mx-auto flex justify-center items-center overflow-hidden px-2 h-[420px] md:h-[480px] lg:h-[520px] relative touch-pan-y z-10"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ touchAction: 'none' }} // Prevent default touch behaviors
      >
        {[0, 1, 2].map((slideIndex) => {
          const cardDetails = getCardDetails(slideIndex);
          const isCenterCard = cardDetails.position === 'center';
          
          // Improved responsive positioning to prevent overlap
          let translateX = '0%';
          if (cardDetails.position === 'left') translateX = 'calc(-50% - 400px)';
          if (cardDetails.position === 'center') translateX = '-50%';
          if (cardDetails.position === 'right') translateX = 'calc(-50% + 360px)';
          
          // Tablet positioning
          const tabletTranslateX = cardDetails.position === 'left' ? 'calc(-50% - 240px)' : 
                                  cardDetails.position === 'center' ? '-50%' : 'calc(-50% + 240px)';
          
          // Mobile positioning (show only center card) with swipe effect
          const mobileTranslateX = (() => {
            // Base positions
            const basePosition = cardDetails.position === 'center' ? '-50%' : 
                                 cardDetails.position === 'left' ? 'calc(-50% - 100%)' : 'calc(-50% + 100%)';
            
            // Add touch delta for drag effect on mobile only
            if (windowWidth < 640 && touchDelta !== 0) {
              // Convert the touchDelta to a percentage of the screen width for smoother animation
              const dragEffect = `${touchDelta}px`;
              return `calc(${basePosition} + ${dragEffect})`;
            }
            return basePosition;
          })();
          
          // Choose appropriate positioning based on screen size
          let activeTranslateX = translateX;
          if (windowWidth < 640) activeTranslateX = mobileTranslateX;
          else if (windowWidth < 1024) activeTranslateX = tabletTranslateX;
          
          return (
            <div 
              key={slideIndex}
              className={`absolute transition-all ${touchDelta !== 0 ? 'duration-0' : 'duration-700'} ease-in-out
                ${isCenterCard 
                  ? 'w-[280px] sm:w-[320px] md:w-[350px] lg:w-[380px] z-20 scale-100' 
                  : `w-[240px] sm:w-[280px] md:w-[320px] lg:w-[340px] z-10 ${cardDetails.scale} opacity-0 ${cardDetails.opacity}`
                } cursor-pointer`}
              style={{
                transform: `translateX(${activeTranslateX}) scale(${isCenterCard ? '1' : '0.9'})`,
                left: '50%',
                top: '50%',
                marginTop: isCenterCard ? '-200px' : '-190px',
              }}
              onClick={() => handleCardTap(cardDetails.position)}
              aria-label={cardDetails.position === 'left' ? 'Previous slide' : 
                         cardDetails.position === 'right' ? 'Next slide' : 'Current slide'}
            >
              <div className={`bg-white/5 backdrop-blur-sm rounded-[3rem] flex flex-col border-2 border-white/50 p-4 md:p-6 
                transition-all duration-700 hover:shadow-lg text-center relative
                ${isCenterCard ? 'min-h-[360px] md:min-h-[400px] shadow-xl' : 'min-h-[340px] md:min-h-[380px]'}`}>
                {/* Icon at the top */}
                <div className="absolute left-4 top-4">
                  <div className={`bg-blue-500 p-2 md:p-1 transition-transform duration-700
                    rounded-tl-3xl border border-white/80
                    ${isCenterCard ? 'scale-110' : 'scale-100'}`}>
                    <img 
                      src={slides[slideIndex].icon} 
                      alt="" 
                      className="w-6 h-6 md:w-12 md:h-12"
                    />
                  </div>
                </div>
                
                {/* Title with added top margin */}
                <h3 className={`font-medium mb-3 md:mb-4 leading-tight mx-auto max-w-[90%] mt-12 md:mt-16
                  ${isCenterCard ? 'text-lg md:text-2xl lg:text-3xl' : 'text-base md:text-xl lg:text-2xl'}`}>
                  {slides[slideIndex].title}
                </h3>
                
                {/* Description */}
                <p className={`text-blue-100 mb-4 md:mb-6 leading-relaxed mx-auto max-w-[90%]
                  ${isCenterCard ? 'text-sm md:text-base' : 'text-xs md:text-sm'}`}>
                  {slides[slideIndex].description}
                </p>
                
                {/* Tagline at bottom */}
                <div className="mt-auto">
                  <div className="bg-white/5 border-white/50 border rounded-b-2xl py-3 md:py-2 px-4 md:px-4 text-xs md:text-sm text-center">
                    {slides[slideIndex].tagline}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Mobile swipe indicators */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 sm:hidden">
          <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-white/20 
                          transition-opacity duration-300 ${touchDelta > 20 ? 'opacity-100' : 'opacity-0'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>

        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 sm:hidden">
          <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-white/20 
                          transition-opacity duration-300 ${touchDelta < -20 ? 'opacity-100' : 'opacity-0'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Slider dots */}
      <div className="flex justify-center mt-2 md:mt-4 space-x-3 relative z-10">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-110' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            disabled={isAnimating}
          />
        ))}
      </div>

      {/* Mobile swipe instruction moved closer */}
      <div className="text-center text-xs text-white/60 mt-1 sm:hidden relative z-10">
        Swipe or tap cards to navigate
      </div>
    </div>
  );
}