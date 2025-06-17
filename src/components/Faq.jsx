import React, { useState } from "react";
import '@fontsource/montserrat-alternates';
import '@fontsource/montserrat-alternates/400.css';
import '@fontsource/montserrat-alternates/500.css';
import '@fontsource/montserrat-alternates/700.css';

// Reusable Icon Components
const SearchIcon = ({ className = "" }) => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5.3125 28.6875L13.2812 20.7188M29.75 13.8125C29.75 15.0683 29.5027 16.3117 29.0221 17.4719C28.5415 18.6321 27.8372 19.6862 26.9492 20.5742C26.0612 21.4622 25.0071 22.1665 23.8469 22.6471C22.6867 23.1277 21.4433 23.375 20.1875 23.375C18.9317 23.375 17.6883 23.1277 16.5281 22.6471C15.3679 22.1665 14.3138 21.4622 13.4258 20.5742C12.5378 19.6862 11.8335 18.6321 11.3529 17.4719C10.8723 16.3117 10.625 15.0683 10.625 13.8125C10.625 11.2764 11.6325 8.84411 13.4258 7.05079C15.2191 5.25748 17.6514 4.25 20.1875 4.25C22.7236 4.25 25.1559 5.25748 26.9492 7.05079C28.7425 8.84411 29.75 11.2764 29.75 13.8125Z"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlusIcon = ({ className = "", isExpanded = false }) => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`}
  >
    <path
      d="M26.9173 18.4139H18.4173V26.9139H15.584V18.4139H7.08398V15.5806H15.584V7.08057H18.4173V15.5806H26.9173V18.4139Z"
      fill="white"
    />
  </svg>
);

const BoxIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.667 8L16.0003 3.33337L5.33366 8V24L16.0003 28.6667L26.667 24V8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.33366 8L16.0003 12.6667M16.0003 12.6667L26.667 8M16.0003 12.6667V28.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CircleDot = ({ className = "" }) => (
  <div className={`w-2 h-2 bg-white rounded-full ${className}`} />
);

const BulletPoint = ({ className = "" }) => (
  <div className={`w-2.5 h-2.5 bg-white rounded-full ${className}`} />
);

// FAQ Item Component
const FAQItem = ({ question, answer, isExpanded, onToggle }) => (
  <div className="relative">
    <div className="flex items-start gap-4 mb-4">
      <BulletPoint className="mt-6" />
      <div className="flex-1">
        <h3 
          className="text-4xl text-white mb-4 cursor-pointer hover:text-blue-200 transition-colors max-md:text-3xl max-sm:text-2xl font-['Montserrat_Alternates']"
          onClick={onToggle}
        >
          {question}
        </h3>
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <p className="text-2xl text-white mb-8 max-md:text-xl max-sm:text-base font-['Montserrat_Alternates']">
            {answer}
          </p>
        </div>
      </div>
      <button
        onClick={onToggle}
        className="relative mt-6 hover:scale-110 transition-transform"
      >
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="22.5"
            cy="22.5"
            r="22.1"
            fill="#C3E0FF"
            fillOpacity="0.2"
            stroke="white"
            strokeWidth="0.8"
          />
        </svg>
        <PlusIcon 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
          isExpanded={isExpanded}
        />
      </button>
    </div>
    <div className="h-px bg-white mb-8 max-md:my-5" />
  </div>
);

// Main FAQ Component
function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedItems, setExpandedItems] = useState({});

  const faqData = [
    {
      id: 1,
      question: "What is LASIK eye surgery?",
      answer: "LASIK is a safe and quick laser vision correction surgery that reshapes the cornea to correct nearsightedness, farsightedness, and astigmatism."
    },
    {
      id: 2,
      question: "Is LASIK treatment painful?",
      answer: "LASIK is virtually painless. Most patients report only mild discomfort during and a few hours after the procedure."
    },
    {
      id: 3,
      question: "How long is the recovery after LASIK?",
      answer: "Recovery is quick — most people resume normal activities within 24 to 48 hours. Clear vision often improves immediately or within a day."
    },
    {
      id: 4,
      question: "Are the results of LASIK permanent?",
      answer: "Yes, LASIK offers long-term vision correction, though natural age-related changes (like presbyopia) may still occur over time."
    }
  ];

  const toggleExpanded = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFAQs = faqData.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative w-full min-h-screen p-0 m-0 overflow-hidden max-md:p-5 max-sm:p-4 font-['Montserrat_Alternates']">
      {/* Main Content Container */}
      <div className="relative z-[2] max-w-[1400px] mx-auto pt-12 px-14 max-md:px-0 max-md:pt-0">
        {/* Header */}
        <div className="text-center mb-16 max-md:mb-8">
          <h1 className="text-3xl font-medium text-white mb-8 max-md:mb-5 max-sm:text-2xl">
            FAQ's
          </h1>
        </div>

        {/* Hero Section */}
        <div className="relative mb-16 max-md:mb-8">
          {/* Background Card - Increased transparency */}
          <div className="relative border border-white bg-white/10 backdrop-blur-sm rounded-[30px] p-8 mb-8 max-md:p-6 max-sm:p-5">
            {/* Corner Decorative Dots */}
            <CircleDot className="absolute left-4 top-4" />
            <CircleDot className="absolute right-4 top-4 max-md:hidden" />
            <CircleDot className="absolute left-4 bottom-4" />
            <CircleDot className="absolute right-4 bottom-4 max-md:hidden" />

            {/* Large Background Text - Adjusted opacity */}
            <div className="absolute left-12 top-0 text-[200px] font-medium text-white/5 leading-none pointer-events-none max-md:hidden">
              Faq
            </div>
            
            {/* Content Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left Side */}
              <div className="space-y-6">
                <h2 className="text-5xl font-medium text-white max-md:text-4xl max-sm:text-3xl">
                  FAQ
                </h2>
              </div>

              {/* Right Side */}
              <div className="space-y-6">
                <h2 className="text-4xl font-medium text-white max-md:text-3xl max-sm:text-2xl">
                  Frequently Asked Questions
                </h2>
                
                <p className="text-base italic text-white/80 max-md:text-sm max-sm:text-xs">
                  This section addresses the most common questions our visitors have. 
                  Browse through to quickly find helpful answers about our services and offerings.
                </p>

                {/* Search Bar */}
                <div className="relative">
                  <div className="bg-white/40 border border-white rounded-3xl h-14 flex items-center px-6 max-sm:h-12 max-sm:px-4">
                    <input
                      type="text"
                      placeholder="Search your questions here"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1 bg-transparent text-2xl italic text-white placeholder-white/75 outline-none max-md:text-xl max-sm:text-base font-['Montserrat_Alternates']"
                    />
                    <SearchIcon className="ml-4 flex-shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* General Questions Title */}
        <div className="flex items-center gap-3 mb-8">
          <BoxIcon />
          <h3 className="text-3xl font-medium text-white">
            General Questions
          </h3>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {filteredFAQs.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isExpanded={expandedItems[item.id]}
              onToggle={() => toggleExpanded(item.id)}
            />
          ))}
        </div>

        {/* No Results Message */}
        {filteredFAQs.length === 0 && searchQuery && (
          <div className="text-center py-16">
            <p className="text-2xl text-white/80">
              No questions found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FAQ;