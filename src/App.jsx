import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { SectionKodu } from "./Sections/SectionKodu";
import { SectionEelised } from "./Sections/SectionEelised";
import { SectionProjektid } from "./Sections/SectionProjektid";
import { SectionMeist } from "./Sections/SectionMeist";
import { SectionHinnakiri } from "./Sections/SectionHinnakiri";
import { SectionKüsimused } from "./Sections/SectionKüsimused";

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

  const sectionKodu = useRef(null);
  const sectionEelised = useRef(null);
  const sectionProjektid = useRef(null);
  const sectionMeist = useRef(null);
  const sectionHinnakiri = useRef(null);
  const sectionKüsimused = useRef(null);

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

    if (sectionKodu.current) observer.observe(sectionKodu.current);
    if (sectionEelised.current) observer.observe(sectionEelised.current);
    if (sectionProjektid.current) observer.observe(sectionProjektid.current);
    if (sectionMeist.current) observer.observe(sectionMeist.current);
    if (sectionHinnakiri.current) observer.observe(sectionHinnakiri.current);
    if (sectionKüsimused.current) observer.observe(sectionKüsimused.current);

    return () => {
      if (sectionKodu.current) observer.unobserve(sectionKodu.current);
      if (sectionEelised.current) observer.unobserve(sectionEelised.current);
      if (sectionProjektid.current) observer.unobserve(sectionProjektid.current);
      if (sectionMeist.current) observer.unobserve(sectionMeist.current);
      if (sectionHinnakiri.current) observer.unobserve(sectionHinnakiri.current);
      if (sectionKüsimused.current) observer.unobserve(sectionKüsimused.current);
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
            <h1 className={`navigation-bar-text ${currentSection === 'sectionKodu' ? 'white' : 'grey'}`} onClick={() => scrollToSection(sectionKodu)} >Kodu</h1>
            <h1 className={`navigation-bar-text ${currentSection === 'sectionEelised' ? 'white' : 'grey'}`} onClick={() => scrollToSection(sectionEelised)} >Eelised</h1>
            <h1 className={`navigation-bar-text ${currentSection === 'sectionProjektid' ? 'white' : 'grey'}`} onClick={() => scrollToSection(sectionProjektid)} >Projektid</h1>
            <h1 className={`navigation-bar-text ${currentSection === 'sectionMeist' ? 'white' : 'grey'}`} onClick={() => scrollToSection(sectionMeist)} >Meist</h1>
            <h1 className={`navigation-bar-text ${currentSection === 'sectionHinnakiri' ? 'white' : 'grey'}`} onClick={() => scrollToSection(sectionHinnakiri)} >Hinnakiri</h1>
            <h1 className={`navigation-bar-text ${currentSection === 'sectionKüsimused' ? 'white' : 'grey'}`} onClick={() => scrollToSection(sectionKüsimused)} >Küsimused</h1>
          </div>
          <div className="navigation-right">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="solid-button navigation-bar-button" 
            >
              <h1 className="button-text" >Broneeri Kõne</h1>
              <i class="fa-solid fa-chevron-right"></i>
            </motion.button>
          </div>
        </div>

        <div ref={sectionKodu} data-section="sectionKodu">
          <SectionKodu />
        </div>
        <div ref={sectionEelised} data-section="sectionEelised">
          <SectionEelised />
        </div>
        <div ref={sectionProjektid} data-section="sectionProjektid">
          <SectionProjektid />
        </div>
        <div ref={sectionMeist} data-section="sectionMeist">
          <SectionMeist />
        </div>
        <div ref={sectionHinnakiri} data-section="sectionHinnakiri">
          <SectionHinnakiri />
        </div>
        <div ref={sectionKüsimused} data-section="sectionKüsimused">
          <SectionKüsimused />
        </div>

      </>
  );
}

export default App;