import React, { useState, useRef, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import ResumeSection from "../components/ResumeSection";
import ProjectsCard from "../components/ProjectsCard";
import Footer from "../components/Footer";
import { about, resume, contact } from "../components/InfoSection/Data";
import SplashScreen from "../components/SplashScreen";
import { motion, AnimatePresence } from "framer-motion/dist/framer-motion";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  // return loading ? (
  //   // <ClipLoader size={100} aria-label="Loading Spinner" data-testid="loader" />
  //   <>
  //     <motion.div
  //       initial={{ opacity: 1 }}
  //       animate={{ opacity: 0 }}
  //       // exit={{ y: 0 }}
  //       transition={{ delay: 4, duration: 1 }}
  //     >
  //       <SplashScreen />
  //     </motion.div>
  //   </>
  // ) : (
    return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.8 }}
      >
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <InfoSection {...about} />
        <ResumeSection />
        {/* <InfoSection {...resume} /> */}
        <ProjectsCard />
        <InfoSection {...contact} />
        <Footer />
      </motion.div>
    </>
  );
};

export default Home;
