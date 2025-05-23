import React from 'react';

// Achievement/credential card component
const AchievementCard = ({ icon, title, description }) => {
  return (
    <div className="bg-blue-700/40 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center h-full border border-blue-400/30">
      <div className="mb-2">
        {icon}
      </div>
      <h3 className="text-white font-bold text-sm mb-1">{title}</h3>
      <p className="text-white/90 text-xs">{description}</p>
    </div>
  );
};

const DoctorProfile = () => {
  return (
    <div className="py-2">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side with doctor image */}
          <div className="md:w-1/2 relative" style={{ marginLeft: '-80px' }}>
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
          <div className="md:w-1/2 pl-0 md:pl-8 mt-8 md:mt-0 text-left" style={{ marginTop: '40px' }}>
            {/* Doctor qualifications */}
            <div className="mb-8 pt-72">
              <p className="text-blue-300 font-medium">
                MBBS (Gold Medalist), MS Ophthalmology
              </p>
              <p className="text-white text-sm mt-1">
                Fellow - Cornea, Ocular Surface & Refractive Surgery (C.H. Nagri Eye Hospital, Ahmedabad)
              </p>
              <p className="text-white text-sm mt-1">
                Fellow - Phacoemulsification (Dr. Shroff's Charity Eye Hospital, New Delhi)
              </p>
            </div>
            
            {/* Achievements/credentials grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <AchievementCard
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>}
                title="Post-Graduation"
                description="Completed MS Ophthalmology from Mahatma Gandhi Memorial Medical College, Indore academic Excellence"
              />
              
              <AchievementCard
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>}
                title="Academic Excellence"
                description="Winner of Dr. Vimal J.S. Mulkhandale Award for Best Free Paper at SIOS 2012"
              />
              
              <AchievementCard
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>}
                title="Gold Medal Recognition"
                description="Received Excellence in Physiology Award (Dr. Vimal Jagram Thakur Gold Medal)"
              />
              
              <AchievementCard
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>}
                title="Professional Training"
                description="Trained and worked at several reputed eye hospitals across India"
              />
            </div>
            
            {/* Second row of achievements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AchievementCard
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>}
                title="Fellowship in Cornea & Refractive"
                description="Fellowship in Cornea, Ocular Surface & Refractive Surgery C.H. Nagri Eye Hospital, Ahmedabad"
              />
              
              <AchievementCard
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>}
                title="Phacoemulsi-fication Training"
                description="Underwent advanced cataract surgery training at Dr. Shroff's Charity Hospital, New Delhi"
              />
              
              <AchievementCard
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>}
                title="Cataract Traineeship"
                description="Completed cataract training at Mahatme Eye Bank & Hospital, Nagpur"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
