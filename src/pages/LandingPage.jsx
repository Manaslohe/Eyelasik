import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import DoctorProfile from '../components/DoctorProfile';
import DoctorSpeciality from '../components/DoctorSpeciality';
import WhyChooseUs from '../components/WhyChooseUs';
import SocialMedia from '../components/SocialMedia';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#013A83] text-white">
     

      <main className="flex-grow">
          <div
            style={{
              backgroundImage: "url('/herobg.png')",
              backgroundRepeat: 'repeat-y',
              backgroundSize: 'cover',
              backgroundPosition: 'top center',
              opacity: 1, // Reduced opacity
            }}
          >
            {/* Hero Section (from Home component) */}
           <Header />
          <Home />
          
          {/* Doctor Profile Section */}
          <DoctorProfile />
        </div>

        {/* Doctor Speciality Section */}
        <DoctorSpeciality />

        {/* Why Choose Us Section */}
        <WhyChooseUs />


        {/* Social Media Section */}
        <SocialMedia />
        
        {/* Testimonials and Footer with shared background */}
        <div
          style={{
            backgroundImage: "url('/testimonial background.png')",
            backgroundRepeat: 'repeat-y',
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        >
          <Testimonials />
          <div className="w-full h-0.5 bg-white/80" />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
