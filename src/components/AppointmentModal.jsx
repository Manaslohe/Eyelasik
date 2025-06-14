import React, { useState } from 'react';

const AppointmentModal = ({ open, onClose }) => {
  const [type, setType] = useState('video');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [errors, setErrors] = useState({});

  if (!open) return null;

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!contact.trim()) newErrors.contact = 'Contact number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log({ name, contact, type });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity">
      <div
        className="relative w-[95vw] max-w-xl rounded-2xl border border-blue-400/30 bg-gradient-to-br p-4 sm:p-6 md:p-8 shadow-2xl transition-all duration-300"
        style={{
          backgroundImage: "url('/appointment.png'), linear-gradient(135deg, rgba(30, 60, 114, 0.7) 0%, rgba(42, 82, 152, 0.7) 100%)",
          backgroundBlendMode: 'normal',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        {/* Semi-transparent overlay for better text contrast */}
        <div className="absolute inset-0 bg-[#1e3c72]/20 rounded-2xl"></div>
        
        <div className="relative z-10">
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white/90 text-2xl rounded-full p-1 hover:bg-white/10 transition-all duration-200"
            onClick={onClose}
            aria-label="Close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Title */}
          <h2 className="text-white text-center text-2xl sm:text-3xl md:text-4xl font-medium mb-2 font-['Montserrat_Alternates']">
            Fix an Appointment
          </h2>
          <p className="text-white/80 text-center text-xs sm:text-sm md:text-base mb-6 md:mb-8 font-['Montserrat_Alternates'] font-light">
            Schedule your eye consultation with our expert specialists
          </p>

          {/* Form */}
          <form className="flex flex-col gap-4 md:gap-5" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="text-white/90 text-xs sm:text-sm font-medium ml-1 font-['Montserrat_Alternates']">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                className={`w-full rounded-xl border ${
                  errors.name ? 'border-red-400' : 'border-white/40'
                } bg-white/10 px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 font-['Montserrat_Alternates']`}
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
              />
              {errors.name && <p className="text-red-400 text-xs sm:text-sm ml-1 mt-1 font-['Montserrat_Alternates']">{errors.name}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-white/90 text-xs sm:text-sm font-medium ml-1 font-['Montserrat_Alternates']">
                Contact Number <span className="text-red-400">*</span>
              </label>
              <input
                className={`w-full rounded-xl border ${
                  errors.contact ? 'border-red-400' : 'border-white/40'
                } bg-white/10 px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 font-['Montserrat_Alternates']`}
                placeholder="Enter your phone number"
                value={contact}
                onChange={e => setContact(e.target.value)}
                type="tel"
              />
              {errors.contact && <p className="text-red-400 text-xs sm:text-sm ml-1 mt-1 font-['Montserrat_Alternates']">{errors.contact}</p>}
            </div>

            <div className="mt-2 sm:mt-4">
              <label className="text-white text-base sm:text-lg text-center block mb-2 sm:mb-3 font-['Montserrat_Alternates']">
                Appointment Type <span className="text-red-400">*</span>
              </label>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-2">
                {/* Video Consultation Button */}
                <button
                  type="button"
                  className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 transition-all duration-200 text-sm sm:text-base md:text-lg font-['Montserrat_Alternates'] ${
                    type === 'video'
                      ? 'bg-[#0a1d2f]/80 border-white text-white shadow-lg scale-105'
                      : 'bg-transparent border-white/40 text-white/70 hover:bg-white/5'
                  }`}
                  onClick={() => setType('video')}
                >
                  <span className="inline-block">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="7" width="13" height="10" rx="2" stroke="currentColor" />
                      <path d="M16 9l5-2v10l-5-2" stroke="currentColor" />
                    </svg>
                  </span>
                  Video Consultation
                </button>
                {/* Visit Clinic Button */}
                <button
                  type="button"
                  className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 transition-all duration-200 text-sm sm:text-base md:text-lg font-['Montserrat_Alternates'] ${
                    type === 'clinic'
                      ? 'bg-[#0a1d2f]/80 border-white text-white shadow-lg scale-105'
                      : 'bg-transparent border-white/40 text-white/70 hover:bg-white/5'
                  }`}
                  onClick={() => setType('clinic')}
                >
                  <span className="inline-block">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="8" cy="10" r="3" stroke="currentColor" />
                      <circle cx="18" cy="10" r="3" stroke="currentColor" />
                      <path d="M2 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="currentColor" />
                      <path d="M14 20v-2a4 4 0 014-4h0a4 4 0 014 4v2" stroke="currentColor" />
                    </svg>
                  </span>
                  Visit Clinic
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 sm:mt-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#2196F3] to-[#1565C0] text-white text-lg sm:text-xl font-['Montserrat_Alternates'] border border-blue-300/30 shadow-lg transition-all duration-300 hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              Book Appointment
            </button>

            <p className="text-white/70 text-center text-xs sm:text-sm mt-2 font-['Montserrat_Alternates']">
              Fields marked with <span className="text-red-400">*</span> are required
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
