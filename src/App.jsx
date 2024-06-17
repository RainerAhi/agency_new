import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { SectionKodu } from "./Sections/SectionKodu";
import { SectionProjektid } from "./Sections/SectionProjektid";
import { SectionMeist } from "./Sections/SectionMeist";
import { SectionHinnakiri } from "./Sections/SectionHinnakiri";
import { SectionKüsimused } from "./Sections/SectionKüsimused";
import { SectionTeenused } from "./Sections/SectionTeenused";

const LoadingScreen = () => {
  const { progress, active } = useProgress();

  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <div className="loading-screen__container">
        <h1 className="headline black">Peak Creations</h1>
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
  const sectionTeenused = useRef(null);
  const sectionProjektid = useRef(null);
  const sectionMeist = useRef(null);
  const sectionHinnakiri = useRef(null);
  const sectionKüsimused = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error('Ref is null:', ref);
    }
  };

  return (
      <>
        <LoadingScreen />

        <div className="navigation">
          <div className="navigation-left">
            <h1 className="logo-text" >Peak Creations</h1>
          </div>
          <div className="navigation-center">
            <h1 className="navigation-bar-text black" onClick={() => scrollToSection(sectionKodu)} >Kodu</h1>
            <h1 className="navigation-bar-text black" onClick={() => scrollToSection(sectionTeenused)} >Teenused</h1>
            <h1 className="navigation-bar-text black" onClick={() => scrollToSection(sectionProjektid)} >Projektid</h1>
            <h1 className="navigation-bar-text black" onClick={() => scrollToSection(sectionMeist)} >Meist</h1>
            <h1 className="navigation-bar-text black" onClick={() => scrollToSection(sectionHinnakiri)} >Hinnakiri</h1>
            <h1 className="navigation-bar-text black" onClick={() => scrollToSection(sectionKüsimused)} >Küsimused</h1>
          </div>
          <div className="navigation-right">
            {/* <div className="gradient-box"></div> */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="solid-button" 
            >
              <h1 className="button-text white" >Broneeri Kõne</h1>
              <i class="fa-solid fa-chevron-right white"></i>
            </motion.button>
          </div>
        </div>

        <div ref={sectionKodu} data-section="sectionKodu">
          <SectionKodu />
        </div>
        <div ref={sectionTeenused} data-section="sectionTeenused">
          <SectionTeenused />
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