import React, { useEffect, useRef, useState } from "react";
import CanvasContainer from "../CanvasContainer";
import { Section6 } from "./Section6";
import { motion, AnimatePresence } from "framer-motion";

export const Section1 = () => {

    return (
      <>
        <section className="one">
          <div className="background-element-one" />
          <div className="background-element-grid" />
          <div className="one-content" >
            <div className="one-content-left" >
              {/* <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="colorful-button" 
                >
                  <h1 className="button-text white" >Uuenduslik, silmapaistev ja väärtuslik</h1>
                </motion.button> */}
              <div className="one-texts" >
                <h1 className="headline white-gradient one-text-center" >Tõstame <br /> brändi esile</h1>
                <h1 className="small-description grey one-text-bottom" >Peak Creations pakub tipptasemel lühivideote ja modernsete veebilehtede lahendusi.</h1>
              </div>
              <div className="one-content-buttons" >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="solid-button" 
                >
                  <h1 className="button-text" >Broneeri Kõne</h1>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="transparent-button" 
                >
                  <h1 className="button-text" >Showreel</h1>
                </motion.button>
              </div>
            </div>
            <div className="one-content-right" >
              <CanvasContainer />
              <div className="mobile-scroll" />
            </div>
          </div>
        </section>

       
      </>
    )
}