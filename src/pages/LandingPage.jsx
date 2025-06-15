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
    <div className="flex flex-col min-h-screen bg-[#013A83] text-white w-full max-w-full overflow-x-hidden">
      <main className="flex-grow w-full">
        <div className="max-w-[100vw] mx-auto">
          {/* Hero Section */}
          <div className="w-full">
            <Header />
            <Home />
          </div>
          
          {/* Doctor Profile Section */}
          <div className="w-full">
            <DoctorProfile />
          </div>

          {/* Doctor Speciality Section */}
          <div className="w-full">
            <DoctorSpeciality />
          </div>

          {/* Why Choose Us Section */}
          <div className="w-full">
            <WhyChooseUs />
          </div>

          {/* Social Media Section */}
          <div className="w-full">
            <SocialMedia />
          </div>
          
          {/* Testimonials and Footer Section */}
          <div
            className="w-full"
            style={{
              backgroundImage: "url('/testimonial background.png')",
              backgroundRepeat: 'repeat-y',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="w-full">
              <Testimonials />
              <div className="w-full h-0.5 bg-white/80" />
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
