import React, { useEffect, useRef, useState } from "react";
import CanvasContainer from "../CanvasContainer";
import { Section6 } from "./Section6";
import { motion, AnimatePresence } from "framer-motion";

export const SectionKodu = () => {

    return (
      <>
        <section className="kodu">
          <div className="background-element-kodu" />
          <div className="background-element-grid" />
          <div className="background-element-kodu-two" />
          <div className="kodu-content" >
            <div className="kodu-content-left" >
              {/* <div className="colorful-button" >
                <h1 className="button-text black" >Esimene nädal tasuta!</h1>
              </div> */}
              <div className="kodu-texts" >
                <h1 className="headline black kodu-text-center" >Tõstame <br /> brändi esile</h1>
                <h1 className="description black kodu-text-bottom" >Peak Creations pakub tipptasemel lühivideode ja modernsete veebilehtede lahendusi.</h1>
              </div>
              <div className="kodu-content-buttons" >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="solid-button" 
                >
                  <h1 className="button-text white" >Broneeri Kõne</h1>
                  <i class="fa-solid fa-chevron-right white"></i>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="transparent-button" 
                >
                  <h1 className="button-text black" >Showreel</h1>
                  <i class="fa-solid fa-chevron-right black"></i>
                </motion.button>
              </div>
            </div>
            <div className="kodu-content-right" >
              <CanvasContainer />
              <div className="mobile-scroll" />
            </div>
          </div>
        </section>

       
      </>
    )
}