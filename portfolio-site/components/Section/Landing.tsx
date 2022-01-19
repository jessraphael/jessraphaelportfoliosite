import React from "react";
import Image from "next/image";
// Components
import { motion } from "framer-motion";
import { FC, useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../Layout/Button";

const LandingPage: FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Button is displayed after scrolling for 50 pixels
    const toggleVisibility = (): void => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div id="home">
      <div className="flex flex-col items-center justify-center w-full h-screen bg-landing">
        <div
          className={`flex items-center ${
            offset > 100 ? "opacity-20" : ""
          } transition-all duration-300`}
        >
          <div className="grid md:grid-cols h-full">
            <div className="flex justify-center items-center px-10 h-full">
              <h1 className="font-semibold text-center md:text-left">
                <Fade direction="down" delay={500}>
                  <p className="title-1 w-full">Hi I am</p>
                  <span className="title-2 w-full">Jess Raphael Ong</span>
                  <p className="subtext-1">
                    Software Developer,  Adventurer,  Aspiring Entrepreneur
                  </p>
                </Fade>
                <br />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
