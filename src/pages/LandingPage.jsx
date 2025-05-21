import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import DoctorProfile from '../components/DoctorProfile';
import DoctorSpeciality from '../components/DoctorSpeciality';
import WhyChooseUs from '../components/WhyChooseUs';
import SocialMedia from '../components/SocialMedia';
import Testimonials from '../components/Testimonials';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#013A83] text-white">
      {/* The Header is now included within the LandingPage component */}
      <Header />
      
      {/* Main content area with all sections in order */}
      <main className="flex-grow">
        {/* Hero Section (from Home component) */}
        <Home />
        
        {/* Note: We remove DoctorProfile from Home.jsx since we'll include it directly here */}
        
        {/* Doctor Profile Section */}
        <DoctorProfile />
        
        {/* Doctor Speciality Section */}
        <DoctorSpeciality />

        {/* Why Choose Us Section */}
        <WhyChooseUs />


        {/* Social Media Section */}
        <SocialMedia />
        
        {/* Testimonials Section */}
        <Testimonials />
      </main>
    </div>
  );
};

export default LandingPage;
