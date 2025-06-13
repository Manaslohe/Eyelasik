import React from 'react';

const MobileFooter = ({ onOpenModal }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-8 text-white">
      {/* First Row */}
      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-2">Who We Are</h2>
        <p className="mb-4 text-xs sm:text-sm leading-relaxed">
          Dr. Shruti Sanghavi specializes in cornea, ocular surface diseases, and Refractive surgeries including LASIK, Trans PRK, and PTK. She has bagged numerous gold medals during her MBBS.
        </p>
        <button
          className="w-full max-w-[200px] mx-auto flex justify-center items-center font-[Orbitron] text-[10px] sm:text-xs font-normal tracking-wide py-2 md:py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
          style={{
            background: 'linear-gradient(90deg, #2196F3 0%, #1565C0 100%)',
            border: '2px solid rgba(255, 255, 255, 0.6)',
            color: 'white',
            boxShadow: '0 2px 8px 0 rgba(33,150,243,0.15)',
            letterSpacing: '0.04em',
          }}
          onClick={onOpenModal}
        >
          BOOK YOUR APPOINTMENT
        </button>
      </div>

      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-2">Contact Details</h2>
        <div className="flex items-center mb-2 text-xs sm:text-sm">
          <span className="mr-2">📞</span>
          <span>+919265131270</span>
        </div>
        <div className="flex items-center text-xs sm:text-sm">
          <span className="mr-2">✅</span>
          <span>drshruti.sanghavi@gmail.com</span>
        </div>
      </div>

      {/* Second Row */}
      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-2">Working Hours</h2>
        <div className="space-y-1 text-xs sm:text-sm">
          <div><span className="font-semibold">MON</span> &nbsp; 4:30 pm - 8:00 pm</div>
          <div><span className="font-semibold">TUES</span> &nbsp; 4:30 pm - 8:00 pm</div>
          <div><span className="font-semibold">WED</span> &nbsp; 4:30 pm - 8:00 pm</div>
          <div><span className="font-semibold">THUR</span> &nbsp; 4:30 pm - 8:00 pm</div>
          <div><span className="font-semibold">FRI</span> &nbsp; 4:30 pm - 8:00 pm</div>
          <div><span className="font-semibold">SAT & SUN</span> &nbsp; Closed</div>
        </div>
      </div>

      <div>
        <h2 className="text-lg sm:text-xl font-semibold mb-2">Stay in touch</h2>
        <div className="flex flex-col gap-2 text-xs sm:text-sm">
          <a href="#" className="flex items-center gap-2 hover:text-[#3a96ef] transition-colors">
            <span className="inline-block w-6 h-6 bg-[url('/instagram.svg')] bg-contain bg-no-repeat" />
            Instagram
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-[#3a96ef] transition-colors">
            <span className="inline-block w-6 h-6 bg-[url('/facebook.svg')] bg-contain bg-no-repeat" />
            facebook
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-[#3a96ef] transition-colors">
            <span className="inline-block w-6 h-6 bg-[url('/youtube.svg')] bg-contain bg-no-repeat" />
            Youtube
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
