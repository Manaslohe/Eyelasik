import { useState, useEffect } from 'react';

export default function WhyChooseUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
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

  // Handle dot navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full bg-[#013A83] text-white -mt-82 pb-12 px-4 md:px-8 relative z-20">
      {/* Section heading */}
      <div className="text-center mb-10">
        <h2 className="text-6xl font-normal mb-2">
          Why <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">Choose</span> Us
        </h2>
        <p className="text-lg text-blue-100 max-w-4xl mx-auto">
          Trusted expertise, cutting-edge technology, and a commitment to personalized, patient-first care.
        </p>
      </div>

      {/* Cards section */}
      <div className="max-w-6xl mx-auto flex justify-center items-center overflow-x-hidden px-2 h-[520px]">
        {[0, 1, 2].map((index) => {
          const slideIndex = (currentSlide + index) % 3;
          const isCenterCard = index === 1;
          
          let translateX = '0%';
          if (index === 0) translateX = '-120%'; // Uniform gap from center
          if (index === 2) translateX = '120%';  // Uniform gap from center
          
          return (
            <div 
              key={slideIndex}
              className={`absolute transition-all duration-700 ease-in-out transform
                ${isCenterCard 
                  ? 'w-[400px] z-20 scale-100' 
                  : 'w-[340px] z-10 scale-90'  // Adjusted to uniform width
                }`}
              style={{
                transform: `translateX(${translateX}) scale(${isCenterCard ? '1' : '0.9'})`,
                left: '50%',
                marginLeft: isCenterCard ? '-200px' : '-170px', // Adjusted for equal spacing
              }}
            >
              <div className={`bg-white/16 backdrop-blur-sm rounded-[2rem] flex flex-col border border-white/80 p-6 
                transition-all duration-700 hover:shadow-lg text-center relative
                ${isCenterCard ? 'min-h-[400px] shadow-xl' : 'min-h-[380px]'}`}>
                {/* Icon at the top */}
                <div className="absolute left-2 top-2">
                  <div className={` bg-blue-500 p-3 transition-transform duration-700
                    rounded-tl-[2rem] border border-white/80
                    ${isCenterCard ? 'scale-110' : 'scale-100'}`}>
                    <img 
                      src={slides[slideIndex].icon} 
                      alt="" 
                      className="w-8 h-8"
                    />
                  </div>
                </div>
                
                {/* Title with added top margin */}
                <h3 className={`font-bold mb-4 leading-tight mx-auto max-w-[90%] mt-16
                  ${isCenterCard ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                  {slides[slideIndex].title}
                </h3>
                
                {/* Description */}
                <p className={`text-blue-100 mb-6 leading-relaxed mx-auto max-w-[90%]
                  ${isCenterCard ? 'text-base' : 'text-sm'}`}>
                  {slides[slideIndex].description}
                </p>
                
                {/* Tagline at bottom */}
                <div className="mt-auto">
                  <div className="bg-white/5 rounded-2xl py-4 px-6 text-sm text-center">
                    {slides[slideIndex].tagline}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Slider dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-3' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}