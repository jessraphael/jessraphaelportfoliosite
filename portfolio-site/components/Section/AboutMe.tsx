import React from "react";
import userData from "../data";
import { FC, useState } from "react";

const AboutMe: FC = ({ children }) => {
  return (
    <div className="space mx-8 overflow-hidden">
      <div id="aboutme" className="relative -top-24"></div>

        <div className="h-[80vh] lg:h-auto flex flex-col justify-center items-center">
          <h1 className="text-6xl pt-8 py-4 font-semibold text-center text-white">
            Jess Raphael Ong
          </h1>
        </div>
      </div>
  );
};

export default AboutMe;
