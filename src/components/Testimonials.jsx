import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      initial: 'D',
      name: 'Deepshikha Agarwal',
      role: 'House Wife',
      text: 'Online consultation with Dr. Shruti was smooth, easy, and very effective.',
      date: '14 feb 2022',
      location: 'Bangkok'
    },
    {
      initial: 'S',
      name: 'Saroj Sigtia',
      role: 'House Wife',
      text: 'Dr. Shruti\'s diagnosis was accurate and results were excellent. She explained everything clearly.',
      date: '1 Jun 2019',
      location: 'Indore'
    },
    {
      initial: 'S',
      name: 'Sharanya Agarwal',
      role: 'House Wife',
      text: 'Dr. Shruti\'s video consultation relieved my eye strain. She was kind and clear.',
      date: '15 May 2020',
      location: 'Mumbai'
    },
    {
      initial: 'A',
      name: 'Avinash Naidu',
      role: 'Consultant',
      text: 'Dr. Shruti is one of the best ophthalmologists. Professional, humble, and highly recommended.',
      date: '20 Aug 2021',
      location: 'Nagpur'
    },
    {
      initial: 'S',
      name: 'Shruti Chourasia',
      role: 'Consultant',
      text: 'Dr. Shruti is calm, friendly, and answers all queries patiently. Truly trustworthy',
      date: '05 Sep 2023',
      location: 'Nagpur'
    },
    {
      initial: 'M',
      name: 'Monika Khurana',
      role: 'Consultant',
      text: 'Dr. Shruti made me feel at ease. She listens patiently and explains everything clearly.',
      date: '08 Dec 2024',
      location: 'New Delhi'
    },
    {
      initial: 'O',
      name: 'Om Pawar',
      role: 'Multimedia Designer',
      text: 'Felt completely comfortable with Dr. Shruti. Her kind approach and clear guidance really helped.',
      date: '10 May 2025',
      location: 'Pune'
    }
  ];

  return (
    <div className="pt-0 pb-20 px-2 sm:px-4 text-white relative">
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
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl mb-8 sm:mb-16 font-medium">
          <span className="text-white">Their Words,</span>
          <span className="text-[#3a96ef]"> Our Pride</span>
        </h1>

        <Carousel 
          className="w-full sm:w-[90%] max-w-[1600px] mx-auto"
          opts={{
            align: "start",
            containScroll: "trimSnaps"
          }}
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div 
                  className="relative flex-shrink-0 w-full transform transition-transform duration-300 hover:scale-[1.02]"
                  style={{ 
                    background: "url('/testi.png')",
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '400px',
                    padding: '12px',
                  }}
                >
                  <div className="p-4 sm:p-6 flex flex-col h-full">
                    <div className="flex items-start space-x-4 sm:space-x-6">
                      <div 
                        className="w-28 h-28 sm:w-40 sm:h-40 text-[#1E88E5] flex items-center 
                                 justify-center text-4xl sm:text-5xl font-medium relative flex-shrink-0"
                        style={{
                          backgroundImage: "url('/testi2.png')",
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        <span className="z-10 relative">{testimonial.initial}</span>
                      </div>
                      <div className="flex-1 pt-6 sm:pt-12">
                        <h3 className="font-medium text-lg sm:text-xl break-words sm:text-nowrap">{testimonial.name}</h3>
                        <p className="text-white/80 text-sm italic">{testimonial.role}</p>
                        <div className="w-full h-[1px] bg-white/30 my-2 sm:my-3"></div>
                        <p className="text-sm sm:text-lg leading-relaxed">{testimonial.text}</p>
                      </div>
                    </div>

                    <div className="absolute bottom-6 sm:bottom-8 left-6 right-6 flex justify-between text-sm sm:text-base text-white/90">
                      <div className="flex items-center">
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {testimonial.date}
                      </div>
                      <div className="mr-4 flex items-center">
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M19.5 10C19.5 15.2467 12 20 12 20C12 20 4.5 15.2467 4.5 10C4.5 6.13401 7.86401 3 12 3C16.136 3 19.5 6.13401 19.5 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
