import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { useProgress } from "@react-three/drei";
import { Section1 } from "./Sections/Section1";
import { motion, AnimatePresence } from "framer-motion";
import { Section2 } from "./Sections/Section2";
import { Section3 } from "./Sections/Section3";
import { Section4 } from "./Sections/Section4";
import { Section5 } from "./Sections/Section5";
import { Section6 } from "./Sections/Section6";

const LoadingScreen = () => {
  const { progress, active } = useProgress();

  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <div className="loading-screen__container">
        <h1 className="headline white-gradient">Peak Creations</h1>
        <div className="progress__container">
          <div className="progress__bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 0.5,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);

  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.dataset.section);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);
    if (section3Ref.current) observer.observe(section3Ref.current);
    if (section4Ref.current) observer.observe(section4Ref.current);
    if (section5Ref.current) observer.observe(section5Ref.current);
    if (section6Ref.current) observer.observe(section6Ref.current);

    return () => {
      if (section1Ref.current) observer.unobserve(section1Ref.current);
      if (section2Ref.current) observer.unobserve(section2Ref.current);
      if (section3Ref.current) observer.unobserve(section3Ref.current);
      if (section4Ref.current) observer.unobserve(section4Ref.current);
      if (section5Ref.current) observer.unobserve(section5Ref.current);
      if (section6Ref.current) observer.unobserve(section6Ref.current);
    };
  }, []);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error('Ref is null:', ref);
    }
  };

  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        const scrollThreshold = 10;
        if (window.scrollY > scrollThreshold) {
            setNavScrolled(true);
        } else {
            setNavScrolled(false);
        }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <>
        <LoadingScreen />

        <div className={`navigation ${navScrolled ? "scrolled" : ""}`}>
          <div className="navigation-left">
            <h1 className="logo-text" >Peak Creations</h1>
          </div>
          <div className="navigation-center">
            <h1 className={`navigation-bar-text ${currentSection === 'section1' ? 'white' : 'grey'}`} onClick={() => scrollToSection(section1Ref)} >Kodu</h1>
            <h1 className={`navigation-bar-text ${currentSection === 'section2' ? 'white' : 'grey'}`} onClick={() => scrollToSection(section2Ref)} >Meist</h1>
            <h1 className={`navigation-bar-text ${currentSection === 'section3' ? 'white' : 'grey'}`} onClick={() => scrollToSection(section3Ref)} >Projektid</h1>
            <h1 className={`navigation-bar-text ${currentSection === 'section4' ? 'white' : 'grey'}`} onClick={() => scrollToSection(section4Ref)} >Arvustused</h1>
            <h1 className={`navigation-bar-text ${currentSection === 'section5' ? 'white' : 'grey'}`} onClick={() => scrollToSection(section5Ref)} >Hinnakiri</h1>
            <h1 className={`navigation-bar-text ${currentSection === 'section6' ? 'white' : 'grey'}`} onClick={() => scrollToSection(section6Ref)} >Küsimused</h1>
          </div>
          <div className="navigation-right">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="solid-button navigation-bar-button" 
            >
              <h1 className="button-text" >Broneeri Kõne</h1>
            </motion.button>
          </div>
        </div>

        <div ref={section1Ref} data-section="section1">
          <Section1 />
        </div>
        <div ref={section2Ref} data-section="section2">
          <Section2 />
        </div>
        <div ref={section3Ref} data-section="section3">
          <Section3 />
        </div>
        <div ref={section4Ref} data-section="section4">
          <Section4 />
        </div>
        <div ref={section5Ref} data-section="section5">
          <Section5 />
        </div>
        <div ref={section6Ref} data-section="section6">
          <Section6 />
        </div>

      </>
  );
}

export default App;