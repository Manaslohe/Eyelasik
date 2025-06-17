import React, { useState, useRef, useEffect } from "react";
import Faq from './Faq';
import BackButton from './BackButton';
import '@fontsource/montserrat-alternates';
import '@fontsource/montserrat-alternates/400.css';
import '@fontsource/montserrat-alternates/500.css';
import '@fontsource/montserrat-alternates/700.css';

// Reusable EyeIcon component
const EyeIcon = () => (
  <svg
    width="62"
    height="62"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[62px] h-[62px] flex-shrink-0"
  >
    <path
      d="M29.7086 46.5C40.042 46.5 48.9803 40.765 53.5786 32.2917C48.9803 23.8183 40.042 18.0833 29.7086 18.0833C19.3753 18.0833 10.437 23.8183 5.83865 32.2917C10.437 40.765 19.3753 46.5 29.7086 46.5ZM29.7086 15.5C41.4886 15.5 51.667 22.3458 56.472 32.2917C51.667 42.2375 41.4886 49.0833 29.7086 49.0833C17.9286 49.0833 7.75031 42.2375 2.94531 32.2917C7.75031 22.3458 17.9286 15.5 29.7086 15.5ZM29.7086 20.6667C36.167 20.6667 41.3336 25.8333 41.3336 32.2917C41.3336 38.75 36.167 43.9167 29.7086 43.9167C23.2503 43.9167 18.0836 38.75 18.0836 32.2917C18.0836 25.8333 23.2503 20.6667 29.7086 20.6667ZM29.7086 23.25C27.3106 23.25 25.0109 24.2026 23.3152 25.8982C21.6196 27.5939 20.667 29.8937 20.667 32.2917C20.667 34.6897 21.6196 36.9894 23.3152 38.6851C25.0109 40.3807 27.3106 41.3333 29.7086 41.3333C32.1066 41.3333 34.4064 40.3807 36.1021 38.6851C37.7977 36.9894 38.7503 34.6897 38.7503 32.2917C38.7503 29.8937 37.7977 27.5939 36.1021 25.8982C34.4064 24.2026 32.1066 23.25 29.7086 23.25Z"
      fill="white"
    />
  </svg>
);

// Updated QuestionCard component
const QuestionCard = ({ question }) => (
  <div className="group cursor-pointer flex relative items-center px-6 w-full rounded-2xl backdrop-blur-[5px] bg-white/10 hover:bg-white/20 transition-all duration-300 h-[80px] max-md:px-5 max-md:h-20 max-sm:px-4 max-sm:h-[70px]">
    <div>
      <EyeIcon />
    </div>
    <div className="flex-1 ml-6 text-xl text-white font-['Montserrat_Alternates'] max-md:ml-5 max-md:text-lg max-sm:ml-4 max-sm:text-base">
      {question}
    </div>
  </div>
);

// Updated ScrollIndicator component
const ScrollIndicator = ({ scrollPercentage, onScroll }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startScrollPercentage, setStartScrollPercentage] = useState(0);
  const trackRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setStartY(e.clientY);
    setStartScrollPercentage(scrollPercentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !trackRef.current) return;

    const trackHeight = trackRef.current.clientHeight;
    const delta = e.clientY - startY;
    const percentageDelta = delta / trackHeight;
    const newPercentage = Math.max(0, Math.min(1, startScrollPercentage + percentageDelta));
    
    onScroll(newPercentage);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startY, startScrollPercentage]);

  return (
    <div className="absolute z-10 right-1 top-0 h-full max-md:right-[2%] max-sm:hidden">
      <div 
        ref={trackRef}
        className="relative w-1 bg-white/30 rounded-sm h-full"
      />
      <div
        onMouseDown={handleMouseDown}
        className={`absolute w-[35px] h-[35px] -left-[15.5px] -translate-y-1/2 cursor-grab ${isDragging ? 'cursor-grabbing' : ''}`}
        style={{ 
          top: `${scrollPercentage * 100}%`,
          transition: isDragging ? 'none' : 'top 0.1s ease-out'
        }}
      >
        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_2079_292)">
            <circle cx="21.5" cy="17.5" r="17.5" fill="#007FFF" />
            <circle cx="21.5" cy="17.5" r="17" stroke="white" />
          </g>
          <defs>
            <filter id="filter0_d_2079_292" x="0" y="0" width="43" height="43" filterUnits="userSpaceOnUse">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" />
              <feBlend in="SourceGraphic" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

// NavigationTabs component
const NavigationTabs = () => {
  const scrollToFAQ = () => {
    document.querySelector('#faq-section').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="flex absolute z-10 gap-24 items-center right-[4.17%] top-[3.61%] max-md:gap-6 max-md:right-[2%] max-md:top-[2%]">
      <div className="relative group">
        <div className="h-6 text-xl font-medium text-center text-white font-['Montserrat_Alternates'] w-[60px] max-md:text-base max-md:w-[45px] cursor-pointer hover:text-blue-200 transition-colors">
          BLOG
        </div>
        <div className="absolute left-0 bottom-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </div>
      <div className="relative group">
        <div 
          onClick={scrollToFAQ}
          className="h-6 text-xl font-medium text-center text-white font-['Montserrat_Alternates'] w-[55px] max-md:text-base max-md:w-[45px] cursor-pointer hover:text-blue-200 transition-colors"
        >
          FAQs
        </div>
        <div className="absolute left-0 bottom-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </div>
    </div>
  );
};

// Updated Blogs component
const Blogs = () => {
  const scrollContainerRef = useRef(null);
  const [scrollPercentage, setScrollPercentage] = React.useState(0);

  const questions = [
    "Did your glasses change in last one year?",
    "Are you having any severe eye allergies?",
    "Are you suffering from lazy eye and/or crossed eyes?",
    "Whether you are pregnant or breast feeding?",
    "Do you have lazy eye or crossed eyes?",
    "Are you above 18 years of age?",
    "Are you suffering from severe dry eyes?",
    "Do you have any immunological illness?",
    "Have you ever suffered from herpes infection of the eye?",
    "Any history of drug reaction?",
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
      setScrollPercentage(scrollPercentage);
    }
  };

  const handleScrollChange = (percentage) => {
    if (scrollContainerRef.current) {
      const { scrollHeight, clientHeight } = scrollContainerRef.current;
      const newScrollTop = percentage * (scrollHeight - clientHeight);
      scrollContainerRef.current.scrollTop = newScrollTop;
      setScrollPercentage(percentage);
    }
  };

  // Get first 5 questions for mobile view
  const mobileQuestions = questions.slice(0, 5);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#013A83] relative overflow-hidden font-['Montserrat_Alternates']">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: 'url("/blogb.png")'
          // Removed height calc to allow full coverage
        }}
      />
      
      {/* Content with increased z-index to appear above background */}
      <div className="relative z-10">
        <BackButton />
        <NavigationTabs />

        {/* Blog Section */}
        <div className="container mx-auto px-4 pt-16 pb-8">
          <h1 className="text-6xl font-medium text-white text-center mb-4 max-md:text-4xl">
            Blog
          </h1>
          <h2 className="text-4xl font-medium text-white text-center mb-16 max-md:text-2xl max-md:mb-8">
            Find out if you are fit for Lasik
          </h2>

          <div className="max-w-7xl mx-auto relative">
            {/* Desktop View */}
            <div
              ref={scrollContainerRef}
              className="space-y-4 h-[60vh] overflow-y-scroll scrollbar-hide pr-18 max-md:hidden"
              onScroll={handleScroll}
            >
              {questions.map((question, index) => (
                <QuestionCard key={index} question={question} />
              ))}
            </div>

            {/* Mobile View */}
            <div className="hidden max-md:block relative pr-10">
              <div className="space-y-4">
                {mobileQuestions.map((question, index) => (
                  <QuestionCard key={index} question={question} />
                ))}
              </div>
              <div className="absolute right-0 top-0 h-full">
                <div className="w-1 bg-white/30 rounded-sm h-full" />
              </div>
            </div>

            {/* Desktop Scroll Indicator */}
            <div className="max-md:hidden">
              <ScrollIndicator 
                scrollPercentage={scrollPercentage} 
                onScroll={handleScrollChange}
              />
            </div>
          </div>
        </div>

        {/* Daily Eye Care Section */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-6xl font-medium text-white text-center mb-16 max-md:text-4xl">
            Daily Eye Care
          </h2>
          <div className="flex justify-center items-center">
            {/* Desktop Image */}
            <img 
              src="/blog.png" 
              alt="Daily Eye Care Cycle" 
              className="w-[100%] h-auto object-contain max-h-[80vh] max-w-full max-md:hidden"
            />
            {/* Mobile Image */}
            <img 
              src="/blogm.png" 
              alt="Daily Eye Care Cycle Mobile" 
              className="hidden max-md:block w-screen h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* FAQ Section - Add id for scrolling */}
      <div id="faq-section">
        <Faq />
      </div>
    </div>
  );
};

export default Blogs;

