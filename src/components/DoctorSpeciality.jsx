import React from 'react';
import { BookOpen, Users, Maximize, Briefcase, Award } from 'lucide-react';

const SpecialityItem = ({ icon, title, description }) => {
  return (
    <div className="bg-white/[0.16] text-white rounded-md p-3 md:p-4 flex items-center overflow-hidden mb-4 w-full md:w-[800px] border border-white/60">
      <div className="flex-shrink-0">
        <div className="w-8 h-8 md:w-16 md:h-16 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex-1 flex items-center">
        <h2 className="text-[clamp(1rem,4vw,1.5rem)] md:text-2xl lg:text-4xl font-light mr-4 md:mr-6 w-17 md:w-48">{title}</h2>
        <div className="h-16 w-[1px] bg-white/40 mr-4 md:mr-6"></div>
        <p className="text-[clamp(0.85rem,3vw,1.125rem)] md:text-base lg:text-lg flex-1">{description}</p>
      </div>
    </div>
  );
};

const DoctorSpeciality = () => {
  const profileData = [
    {
      title: "Experience",
      description: "Ex-consultant at E-vista, Orange City Hospital, and Dr. Monica's Laser Eye Centre.",
      icon: <Briefcase className="w-8 h-8 text-white" />
    },
    {
      title: "Expertise",
      description: "Specializes in LASIK, corneal transplants, cross-linking, and ocular surface disorders.",
      icon: <Award className="w-8 h-8 text-white" />
    },
    {
      title: "Training",
      description: "Actively involved in teaching undergraduates and postgraduates in Ophthalmology.",
      icon: <BookOpen className="w-8 h-8 text-white" />
    },
    {
      title: "Community",
      description: "Member of the Endothelial Keratoplasty Learners Group.",
      icon: <Users className="w-8 h-8 text-white" />
    },
    {
      title: "Approach",
      description: "Believes in thorough evaluation, honest counseling, and tailored treatments.",
      icon: <Maximize className="w-8 h-8 text-white" />
    }
  ];

  return (
    <div className="bg-[#013A83] relative z-[0] mt-6 pb-112 md:pb-0">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col lg:block">
          {/* Title section */}
          <div className="mb-8 md:mb-12 relative z-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white pl-2 md:pl-4">
              Our <span className="text-blue-300">Speciality</span>
            </h2>
          </div>

          {/* Image section */}
          <div className="w-full absolute top-0 left-0 h-full lg:relative lg:flex lg:justify-end lg:-mt-88 lg:order-none">
            <div className="relative w-full lg:w-5/5 h-full">
              <img 
                src="/speciality.png" 
                alt="Eye Speciality" 
                className="w-full h-full object-cover opacity-15 lg:opacity-100 lg:h-auto lg:relative"
              />
            </div>
          </div>

          {/* Text section */}
          <div className="relative z-10 lg:absolute lg:top-32 lg:left-0 w-full lg:w-4/5">
            <div className="space-y-4">
              {profileData.map((item, index) => (
                <SpecialityItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSpeciality;