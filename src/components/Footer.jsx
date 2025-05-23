import React, { useState } from 'react';
import AppointmentModal from './AppointmentModal';

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <footer className="w-full bg-no-repeat bg-cover bg-center pt-12 pb-16">
      <AppointmentModal open={open} onClose={() => setOpen(false)} />
      <div className="w-full px-0">
        <div
          className="w-full  p-0"
          style={{
            background: 'linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.00) 100%)'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between gap-10 text-white">
            {/* Who We Are */}
            <div className="flex-1 min-w-[220px]">
              <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
              <p className="mb-6 text-base leading-relaxed">
                Dr. Shruti Sanghavi specializes in cornea, ocular surface diseases, and Refractive surgeries including LASIK, Trans PRK, and PTK. She has bagged numerous gold medals during her MBBS.
              </p>
              <button
                className="w-full max-w-xs mx-auto flex justify-center items-center font-[Orbitron] text-sm font-normal tracking-wide py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  background: 'linear-gradient(90deg, #2196F3 0%, #1565C0 100%)',
                  border: '2px solid rgba(255, 255, 255, 0.6)',
                  color: 'white',
                  boxShadow: '0 2px 8px 0 rgba(33,150,243,0.15)',
                  letterSpacing: '0.04em',
                  cursor: 'pointer'
                }}
                onClick={() => setOpen(true)}
              >
                BOOK YOUR APPOINTMENT
              </button>
            </div>
            {/* Contact Details */}
            <div className="flex-1 min-w-[220px]">
              <h2 className="text-2xl font-semibold mb-2">Contact Details</h2>
              <div className="flex items-center mb-2">
                <span className="mr-2">📞</span>
                <span>+919265131270</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✅</span>
                <span>drshruti.sanghavi@gmail.com</span>
              </div>
            </div>
            {/* Working Hours */}
            <div className="flex-1 min-w-[220px]">
              <h2 className="text-2xl font-semibold mb-2">Working Hours</h2>
              <div className="space-y-1 text-base">
                <div><span className="font-semibold">MON</span> &nbsp; 4:30 pm - 8:00 pm</div>
                <div><span className="font-semibold">TUES</span> &nbsp; 4:30 pm - 8:00 pm</div>
                <div><span className="font-semibold">WED</span> &nbsp; 4:30 pm - 8:00 pm</div>
                <div><span className="font-semibold">THUR</span> &nbsp; 4:30 pm - 8:00 pm</div>
                <div><span className="font-semibold">FRI</span> &nbsp; 4:30 pm - 8:00 pm</div>
                <div><span className="font-semibold">SAT & SUN</span> &nbsp; Closed</div>
              </div>
            </div>
            {/* Stay in touch */}
            <div className="flex-1 min-w-[180px]">
              <h2 className="text-2xl font-semibold mb-2">Stay in touch</h2>
              <div className="flex flex-col gap-3">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
