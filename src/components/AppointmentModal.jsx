import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AppointmentModal = ({ open, onClose }) => {
  const [type, setType] = useState('video');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!open) return null;

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!contact.trim()) newErrors.contact = 'Contact number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        console.log({ name, contact, type });
        onClose();
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-[95vw] max-w-xl rounded-3xl border border-blue-400/20 shadow-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(30, 60, 114, 0.92) 0%, rgba(42, 82, 152, 0.92) 100%)',
            }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl -translate-y-40 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300/10 rounded-full filter blur-3xl translate-y-40 -translate-x-20"></div>
            
            <div className="relative z-10 px-6 py-8 sm:px-8 sm:py-10">
              {/* Close Button */}
              <button
                className="absolute top-5 right-5 text-white/80 hover:text-white rounded-full p-1.5 hover:bg-white/10 transition-all duration-200"
                onClick={onClose}
                aria-label="Close"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Title */}
              <motion.div 
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="text-center mb-8"
              >
                <h2 className="text-white text-3xl font-medium mb-2 font-['Montserrat_Alternates']">
                  Book Your Consultation
                </h2>
                <p className="text-white/80 text-sm max-w-md mx-auto font-['Montserrat_Alternates'] font-light">
                  Schedule your personalized eye consultation with our specialists
                </p>
              </motion.div>

              {/* Form */}
              <motion.form 
                className="flex flex-col gap-5"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <div className="space-y-1.5">
                  <label className="text-white/90 text-sm font-medium ml-1 font-['Montserrat_Alternates']">
                    Full Name <span className="text-blue-200">*</span>
                  </label>
                  <div className={`relative rounded-xl overflow-hidden ${errors.name ? 'ring-2 ring-red-400/70' : ''}`}>
                    <input
                      className="w-full px-4 py-3.5 text-white bg-white/10 border-0
                        placeholder-white/40 outline-none focus:ring-2 focus:ring-blue-400/50
                        transition-all duration-200 font-['Montserrat_Alternates']"
                      placeholder="Enter your name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      type="text"
                    />
                    <div className="absolute inset-0 pointer-events-none border border-white/20 rounded-xl"></div>
                  </div>
                  <AnimatePresence>
                    {errors.name && (
                      <motion.p 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="text-red-300 text-xs ml-1 overflow-hidden"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="space-y-1.5">
                  <label className="text-white/90 text-sm font-medium ml-1 font-['Montserrat_Alternates']">
                    Contact Number <span className="text-blue-200">*</span>
                  </label>
                  <div className={`relative rounded-xl overflow-hidden ${errors.contact ? 'ring-2 ring-red-400/70' : ''}`}>
                    <input
                      className="w-full px-4 py-3.5 text-white bg-white/10 border-0
                        placeholder-white/40 outline-none focus:ring-2 focus:ring-blue-400/50
                        transition-all duration-200 font-['Montserrat_Alternates']"
                      placeholder="Enter your phone number"
                      value={contact}
                      onChange={e => setContact(e.target.value)}
                      type="tel"
                    />
                    <div className="absolute inset-0 pointer-events-none border border-white/20 rounded-xl"></div>
                  </div>
                  <AnimatePresence>
                    {errors.contact && (
                      <motion.p 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="text-red-300 text-xs ml-1 overflow-hidden"
                      >
                        {errors.contact}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-2">
                  <p className="text-white/90 text-sm font-medium mb-3 ml-1 font-['Montserrat_Alternates']">
                    Appointment Type <span className="text-blue-200">*</span>
                  </p>
                  <div className="flex gap-4">
                    <label 
                      className={`flex-1 relative cursor-pointer group transition-all duration-200 
                        ${type === 'video' ? 'bg-white/15' : 'bg-white/5 hover:bg-white/10'} 
                        border border-white/20 rounded-xl py-4 px-4`}
                    >
                      <input
                        type="radio"
                        name="appointmentType"
                        className="sr-only"
                        checked={type === 'video'}
                        onChange={() => setType('video')}
                      />
                      <div className="flex flex-col items-center gap-2">
                        <div className={`p-2 rounded-full transition-colors duration-200 
                          ${type === 'video' ? 'bg-blue-500/30' : 'bg-white/10'}`}>
                          <svg width="22" height="22" fill="none" stroke="currentColor" 
                            className={`text-white transition-colors ${type === 'video' ? 'text-blue-200' : 'text-white/70'}`} 
                            strokeWidth="1.5" viewBox="0 0 24 24">
                            <rect x="3" y="7" width="13" height="10" rx="2" />
                            <path d="M16 9l5-2v10l-5-2" />
                          </svg>
                        </div>
                        <span className={`text-sm font-medium transition-colors duration-200
                          ${type === 'video' ? 'text-white' : 'text-white/70'}`}>
                          Video Call
                        </span>
                      </div>
                      {type === 'video' && (
                        <motion.div 
                          layoutId="activeIndicator"
                          className="absolute inset-0 border-2 border-blue-400/50 rounded-xl pointer-events-none"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </label>
                    
                    <label 
                      className={`flex-1 relative cursor-pointer group transition-all duration-200 
                        ${type === 'clinic' ? 'bg-white/15' : 'bg-white/5 hover:bg-white/10'} 
                        border border-white/20 rounded-xl py-4 px-4`}
                    >
                      <input
                        type="radio"
                        name="appointmentType"
                        className="sr-only"
                        checked={type === 'clinic'}
                        onChange={() => setType('clinic')}
                      />
                      <div className="flex flex-col items-center gap-2">
                        <div className={`p-2 rounded-full transition-colors duration-200 
                          ${type === 'clinic' ? 'bg-blue-500/30' : 'bg-white/10'}`}>
                          <svg width="22" height="22" fill="none" stroke="currentColor" 
                            className={`text-white transition-colors ${type === 'clinic' ? 'text-blue-200' : 'text-white/70'}`} 
                            strokeWidth="1.5" viewBox="0 0 24 24">
                            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path d="M9 22V12h6v10" />
                          </svg>
                        </div>
                        <span className={`text-sm font-medium transition-colors duration-200
                          ${type === 'clinic' ? 'text-white' : 'text-white/70'}`}>
                          Visit Clinic
                        </span>
                      </div>
                      {type === 'clinic' && (
                        <motion.div 
                          layoutId="activeIndicator"
                          className="absolute inset-0 border-2 border-blue-400/50 rounded-xl pointer-events-none"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full mt-6 py-3.5 rounded-xl 
                    bg-gradient-to-r from-[#2196F3] to-[#1565C0] text-white 
                    font-medium text-lg font-['Montserrat_Alternates'] border border-blue-300/20 
                    shadow-md overflow-hidden transition-all duration-300 
                    hover:shadow-lg hover:shadow-blue-500/20
                    disabled:opacity-80 disabled:cursor-not-allowed
                    group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Book Appointment'
                    )}
                  </span>
                  <div className="absolute inset-0 w-full h-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-blue-400/20 to-blue-600/40"></div>
                </button>

                <p className="text-white/60 text-center text-xs mt-2 font-['Montserrat_Alternates']">
                  Fields marked with <span className="text-blue-200">*</span> are required
                </p>
              </motion.form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;
