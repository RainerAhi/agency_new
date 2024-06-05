import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { useProgress } from "@react-three/drei";
import { Section1 } from "./Sections/Section1";
import { SectionFAQ } from "./Sections/SectionFAQ";
import { SectionFooter } from "./Sections/SectionFooter";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
      <>
        <LoadingScreen />

        <div className="navigation">
          <div className="navigation-left">
            <h1 className="logo-text" >Peak Creations</h1>
          </div>
          <div className="navigation-center">
            <h1 className="navigation-bar-text" >Meist</h1>
            <h1 className="navigation-bar-text" >Projektid</h1>
            <h1 className="navigation-bar-text" >Arvustused</h1>
            <h1 className="navigation-bar-text" >Hinnakiri</h1>
            <h1 className="navigation-bar-text" >Küsimused</h1>
          </div>
          <div className="navigation-right">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="solid-button" 
            >
              <h1 className="button-text" >Broneeri Kõne</h1>
            </motion.button>
          </div>
        </div>

        <Section1 />

      </>
  );
}

export default App;