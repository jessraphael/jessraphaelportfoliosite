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
    <div>
      <div id="home" className="absolute -top-24"></div>
      <div className="bg-landing flex h-screen w-full flex-col items-center justify-center">
        <div
          className={`flex items-center ${
            offset > 100 ? "opacity-20" : ""
          } transition-all duration-300`}
        >
          <div className="md:grid-cols grid h-full">
            <div className="flex h-full items-center justify-center px-10">
              <h1 className="text-center font-semibold md:text-left">
                <Fade direction="down" delay={500}>
                  <p className="title-1 w-full">Hi I am</p>
                  <span className="title-2 w-full">Jess Raphael Ong</span>
                  <p className="subtext-1">
                    Software Engineer, Adventurer, Aspiring Technologist
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
