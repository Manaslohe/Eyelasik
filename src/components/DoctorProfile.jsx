import React from 'react';

// Achievement/credential card component
const AchievementCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white/15 backdrop-blur-sm border-white/30 rounded-2xl p-3 md:p-4 flex flex-col items-center text-center h-[180px] md:h-full border-2">
      <div className="mt-0 mb-0 w-12 md:w-14 h-12 md:h-14">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-white font-bold text-xs md:text-sm mb-1">{title}</h3>
      <p className="text-white/90 text-[11px] md:text-xs leading-tight line-clamp-3 md:line-clamp-none">{description}</p>
    </div>
  );
};

const DoctorProfile = () => {
  return (
    <div className="py-2 relative">
      {/* Background gradient image with overlap */}
      <div 
        className="absolute z-[1] overflow-visible flex items-center justify-end"
        style={{
          pointerEvents: 'none',
          top: '5vh', // Extend far above
          bottom: '-100vh', // Extend further down
          left: 0,
          right: 0,
          height: 'calc(100% + 100vh)', // Total height including overlap
          margin: '-25vh 0', // Create negative space for overlap
          transform: 'translateY(-10%)', // Fine-tune vertical position
        }}
      >
        <img
          src="/profile-gradient.png"
          alt=""
          style={{
            height: '100%', // Increased height
            width: '100%', // Full width on mobile
            opacity: 0.9,
            objectFit: 'cover',
            objectPosition: 'center right',
            '@media (min-width: 768px)': {
              width: '90%' // Original width on desktop
            }
          }}
          className="block"
          draggable={false}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Mobile-only spacer */}
        <div className="h-8 md:hidden"></div>

        <div className="flex flex-col md:flex-row items-start md:items-center">
          {/* Left side with doctor image */}
          <div className="w-full block md:hidden">
            {/* Mobile/Tablet View */}
            <div className="relative px-4">
              <img 
                src="/doctor.png" 
                alt="Dr. Shruti Sanghavi" 
                className="w-full h-auto object-contain rounded-lg"
                style={{ 
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              />
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block md:w-1/2 relative" style={{ marginLeft: '-80px' }}>
            <div className="relative z-10" style={{ marginTop: '-80px' }}>
              <img 
                src="/doctor.png" 
                alt="Dr. Shruti Sanghavi" 
                className="w-full max-w-md h-auto object-cover"
                style={{ minWidth: '1000px' }}
              />
            </div>
          </div>
          
          {/* Right side with doctor credentials */}
          <div className="w-full md:w-1/2 px-4 md:px-0 md:pl-8 mt-8 md:mt-0 text-left">
            {/* Doctor qualifications */}
            <div className="mb-8 pt-4 md:pt-80">
              <p className="text-yellow-500 font-medium text-lg md:text-base text-center md:text-left">
                MBBS (Gold Medalist), MS Ophthalmology
              </p>
              <p className="text-white text-sm mt-1 text-center md:text-left">
                Fellow - Cornea, Ocular Surface & Refractive Surgery (C.H. Nagri Eye Hospital, Ahmedabad)
              </p>
              <p className="text-white text-sm mt-1 text-center md:text-left">
                Fellow - Phacoemulsification (Dr. Shroff's Charity Eye Hospital, New Delhi)
              </p>
            </div>

            <hr className="border-t border-white/60 my-6 w-full" />
            
            {/* Achievements/credentials grid */}
            <div className="w-[80%] md:w-full mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                {/* First 6 cards */}
                <div className="contents sm:col-span-3 md:col-span-4">
                  {/* First 6 AchievementCards */}
                  <AchievementCard
                    icon="/icons/Post-Graduation.png"
                    title="Post-Graduation"
                    description="Completed MS Ophthalmology from Mahatma Gandhi Memorial Medical College, Indore. Academic Excellence"
                  />
                  
                  <AchievementCard
                    icon="/icons/Academic-excellence.png"
                    title="Academic Excellence"
                    description="Winner of Dr. Vimal J.S. Mulkhandale Award for Best Free Paper at SIOS 2012"
                  />
                  
                  <AchievementCard
                    icon="/icons/Gold-Medal.png"
                    title="Gold Medal Recognition"
                    description="Received Excellence in Physiology Award (Dr. Vimal Jayram Thakur Gold Medal)"
                  />
                  
                  <AchievementCard
                    icon="/icons/Professional-training.png"
                    title="Professional Training"
                    description="Trained and worked at several reputed eye hospitals across India"
                  />
                  
                  <AchievementCard
                    icon="/icons/Fellowship in Cornea & Refractive.png"
                    title="Fellowship in Cornea & Refractive"
                    description="Fellowship in Cornea, Ocular Surface & Refractive Surgery (C.H. Nagri Eye Hospital, Ahmedabad)"
                  />
                  
                  <AchievementCard
                    icon="/icons/Phacoemulsification Training.png"
                    title="Phacoemulsi-fication Training"
                    description="Underwent advanced cataract surgery training at Dr. Shroff's Charity Eye Hospital, New Delhi"
                  />
                </div>
                
                {/* Last 2 cards centered */}
                <div className="contents sm:col-span-3 md:col-span-4">
                  <div className="sm:col-start-1 md:col-start-auto">
                    <AchievementCard
                      icon="/icons/Cataract Traineeship.png"
                      title="Cataract Traineeship"
                      description="Completed cataract training at Mahatme Eye Bank & Hospital, Nagpur"
                    />
                  </div>
                  <div className="sm:col-start-2 md:col-start-auto">
                    <AchievementCard
                      icon="/icons/Excellence in Vision Correction.png"
                      title="Excellence in Vision Correction"
                      description="Performed over 10,000 cataract surgeries and 2,000 LASIK and Trans PRK procedures with proven expertise"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
