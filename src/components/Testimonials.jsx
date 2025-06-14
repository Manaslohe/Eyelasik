import React, { useEffect, useRef } from 'react';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import '@fontsource/montserrat-alternates';
import '@fontsource/montserrat-alternates/400.css';
import '@fontsource/montserrat-alternates/500.css';
import '@fontsource/montserrat-alternates/700.css';

const Testimonials = () => {
  const autoplay = useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false })
  );

  // Just need the total count for images
  const totalTestimonials = 7;

  return (
    <div className="pt-0 pb-20 px-2 sm:px-4 text-white relative font-['Montserrat_Alternates']">
      {/* Background image with reduced opacity */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/testimonial background.png')",
          backgroundRepeat: 'repeat-y',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          opacity: 0.001
        }}
      />
      <div className="relative z-10">
        <h1 className="text-center text-3xl sm:text-5xl md:text-6xl mb-8 sm:mb-16 font-medium font-['Montserrat_Alternates']">
          <span className="text-white">Their Words,</span>
          <span className="bg-gradient-to-r from-[#3a96ef] to-white text-transparent bg-clip-text"> Our Pride</span>
        </h1>

        <Carousel 
          className="w-full sm:w-[90%] max-w-[1600px] mx-auto font-['Montserrat_Alternates']"
          opts={{
            align: "start",
            containScroll: "trimSnaps",
            loop: true,
          }}
          plugins={[autoplay.current]}
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {[...Array(totalTestimonials)].map((_, index) => (
              <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="transform transition-transform duration-300 hover:scale-[1.02] px-4 sm:px-0">
                  <img 
                    src={`/testimonials/${index + 1}.png`}
                    alt={`Testimonial ${index + 1}`}
                    className="w-full h-auto max-w-[90%] sm:max-w-full mx-auto"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
