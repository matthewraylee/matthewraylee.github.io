import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import ResumeSection from "../components/ResumeSection";
import ProjectsCard from "../components/ProjectsCard";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { about } from "../components/InfoSection/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...about} />
      <ResumeSection />
      <ProjectsCard />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
