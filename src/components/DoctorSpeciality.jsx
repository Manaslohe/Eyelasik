import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '@fontsource/montserrat-alternates';
import '@fontsource/montserrat-alternates/400.css';  // Regular
import '@fontsource/montserrat-alternates/500.css';  // Medium
import '@fontsource/montserrat-alternates/700.css';  // Bold

const SpecialityItem = ({ icon, title, description, expanded, onClick, expandedContent }) => {
  const sentences = description.split('. ').filter(sentence => sentence.trim() !== '');
  const previewText = sentences.slice(0, 2).join('. ') + (sentences.length > 2 ? '...' : '');

  return (
    <motion.div className="mb-4">
      <motion.div 
        onClick={onClick}
        className="bg-white/[0.16] text-white rounded-md p-3 md:p-4 flex items-center overflow-hidden w-full md:w-[800px] border border-white/60 cursor-pointer transition-all duration-300 ease-in-out hover:bg-white/[0.2]"
        layout
      >
        <div className="flex-shrink-0">
          <div className="w-8 h-8 md:w-16 md:h-16 flex items-center justify-center">
            <img src={icon} alt={title} className="w-8 h-8 md:w-16 md:h-16" />
          </div>
        </div>
        <div className="flex-1 flex items-center">
          <h2 className="text-[clamp(1rem,4vw,1.5rem)] md:text-2xl lg:text-2xl font-medium mr-4 md:mr-6 w-24 md:w-32">{title}</h2>
          <div className="h-16 w-[1px] bg-white/40 mr-4 md:mr-6"></div>
          <motion.div 
            className="flex-1"
            layout
          >
            <AnimatePresence mode="wait">
              {!expanded ? (
                <motion.p
                  key="preview"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-[clamp(0.85rem,3vw,1.125rem)] md:text-base lg:text-lg line-clamp-2"
                >
                  {previewText}
                </motion.p>
              ) : (
                <motion.div
                  key="full"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <motion.p 
                    className="text-[clamp(0.85rem,3vw,1.125rem)] md:text-base lg:text-lg"
                  >
                    {description}
                  </motion.p>
                  {expandedContent.length > 0 && (
                    <motion.ul 
                      className="mt-4 ml-4 list-disc space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {expandedContent.map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="text-[clamp(0.85rem,3vw,1.125rem)] md:text-base"
                        >
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight className="w-6 h-6 md:w-12 md:h-12 text-white ml-2 flex-shrink-0" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const DoctorSpeciality = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const profileData = [
    {
      title: "Experience",
      description: "Ex-consultant at Evista Eye Care Centre, Nagpur",
      icon: "/speciality/Experience.png",
      expandedContent: [
        "Mure Memorial Hospital, Nagpur",
        "Orange City Hospital, Nagpur",
        "Dr. Monica's Laser Eye Centre, Chandigarh"
      ]
    },
    {
      title: "Expertise", 
      description: "Specializes in LASIK, cataract surgeries, Trans-PRK, ocular allergies, corneal transplant, collagen cross-linking, pterygium surgeries, ocular surface disorders and tumors, amniotic membrane transplantation, buccal mucous membrane grafting.",
      icon: "/speciality/Expertise.png",
      expandedContent: []
    },
    {
      title: "Training",
      description: "Actively involved in teaching undergraduates (MBBS) and postgraduates (MS Ophthalmology), and cataract training for freshly passed postgraduates.",
      icon: "/speciality/Training.png",
      expandedContent: []
    },
    {
      title: "Community",
      description: "Member of Endothelial Keratoplasty Learning Group",
      icon: "/speciality/Community.png",
      expandedContent: [
        "Member of Cornea Society of India",
        "Member of OSD-DEUS (Ocular Surface Disorders - Dry Eye Workshop Society)"
      ]
    },
    {
      title: "Approach",
      description: "Believes in thorough evaluation, honest counselling, and tailored treatments, ensuring compassionate support throughout the healing journey.",
      icon: "/speciality/Approach.png",
      expandedContent: []
    }
  ];

  return (
    <div className="font-['Montserrat_Alternates'] bg-[#013A83] relative z-[0] mt-6 pb-110 md:pb-0">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col lg:block lg:min-h-[1100px]">
          {/* Title section */}
          <div className="mb-8 md:mb-12 relative z-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white pl-2 md:pl-4 tracking-wide">
              Our <span className="bg-gradient-to-r from-[#2196F3] to-white text-transparent bg-clip-text">Speciality</span>
            </h2>
          </div>

          {/* Desktop Image section */}
          <div className="hidden lg:block w-full order-2 absolute -top-20 right-0 h-full">
            <div className="relative w-full h-full">
              <img 
                src="/speciality.png" 
                alt="Eye Speciality" 
                className="w-auto h-full object-contain absolute top-0 right-0"
              />
            </div>
          </div>

          {/* Text section */}
          <div className="relative z-10 lg:relative lg:w-3/5">
            <div className="space-y-4">
              {profileData.map((item, index) => (
                <SpecialityItem
                  key={index}
                  {...item}
                  expanded={expandedIndex === index}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                />
              ))}
            </div>

            {/* Mobile Background Image - Repositioned */}
            <div className="block lg:hidden w-screen absolute left-45 transform -translate-x-1/2 -mt-64 md:-mt-96">
              <img 
                src="/specialitym.png" 
                alt="Mobile Background" 
                className="w-full h-auto object-cover opacity-100 md:opacity-90 md:max-w-3xl md:mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSpeciality;