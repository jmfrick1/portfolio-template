import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import DarkModeToggle from '../components/DarkModeToggle';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <DarkModeToggle />
      <Footer />
    </>
  );
};

export default HomePage;
