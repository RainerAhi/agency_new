import React, { useRef, useState } from "react";
import Accordion from "../Accordion";
import { motion, AnimatePresence } from "framer-motion";

export const SectionKüsimused = () => {
    const handleClick = (linkUrl) => {
        // Open the specified webpage link in a new tab when carousel-content is clicked
        window.open(linkUrl, '_blank');
      };
      
      return (
        <section className="küsimused">
          <div className="küsimused-content" >
            <h1 className="medium-headline white-gradient" >Küsimused</h1>
            <div className="küsimused-row" >
    
              <div className="küsimused-row-left" >
                <Accordion
                  title="Lorem ipsum dolor sit amet consectetur adipiscing?"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                />
                <Accordion
                  title="Lorem ipsum dolor sit amet consectetur adipiscing?"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                />
                <Accordion
                  title="Lorem ipsum dolor sit amet consectetur adipiscing?"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                />
                <Accordion
                  title="Lorem ipsum dolor sit amet consectetur adipiscing?"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                />
                <Accordion
                  title="Lorem ipsum dolor sit amet consectetur adipiscing?"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                />
                <Accordion
                  title="Lorem ipsum dolor sit amet consectetur adipiscing?"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                />
                <Accordion
                  title="Lorem ipsum dolor sit amet consectetur adipiscing?"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                />
                <Accordion
                  title="Lorem ipsum dolor sit amet consectetur adipiscing?"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                />
              </div>
    
              <div className="küsimused-row-right" >
                <div className="küsimused-socials" >
                  <h1 className="description white-shade" >Lorem Ipsum</h1>
                  <div className="küsimused-socials-icons" >
                    <i className="fa-brands fa-twitter" onClick={() => handleClick('https://twitter.com/home')} ></i>
                    <i className="fa-brands fa-linkedin" onClick={() => handleClick('https://www.linkedin.com/feed/')} ></i>
                    <i className="fa-brands fa-instagram" onClick={() => handleClick('https://www.instagram.com/')} ></i>
                    <i className="fa-brands fa-discord" onClick={() => handleClick('https://discord.com/')} ></i>
                  </div>
                </div>
                <div className="küsimused-get-started" >
                  <h1 className="description ready-to-get-started white-shade" >Lorem Ipsum Dolor Sit</h1>
                  <h1 className="small-description ready-to-get-started-description grey" >Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.</h1>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="solid-button" 
                  >
                    <h1 className="button-text" >Broneeri Kõne</h1>
                    <i class="fa-solid fa-chevron-right"></i>
                  </motion.button>
                </div>
              </div>
    
            </div>
          </div>
        </section>
      );
    };