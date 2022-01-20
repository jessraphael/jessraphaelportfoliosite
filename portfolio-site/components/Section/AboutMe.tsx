import React from "react";
import { FC } from "react";
import userData from "../data";
import Image from "next/image";


const AboutMe: FC = ({ children }) => {
    return (
      <div>
        <div id="aboutme" className="absolute"></div>
      <div className="space overflow-hidden">
      <section className="dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 dark:bg-gray-800">
          <h1 className="text-white text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            About Me.
          </h1>
        </div>
        <div className="-mt-10 bg-black">
          <div className="text-container max-w-6xl mx-auto pt-20">
            <p
              className="leading-loose text-white text-2xl md:text-4xl font-semibold  mx-4"
              style={{ lineHeight: "3rem" }}
            >
              {userData.about.title}.
            </p>
          <br/>
          </div>
        </div>
        <div className=" bg-black px-4">
          <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
            
            {/* Text area */}
            <div className="col-span-1 md:col-span-2">
              {userData.about.description?.map((desc, idx) => (
                <p
                  key={idx}
                  className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
                >
                  {desc}
                </p>
              ))}
  
              <h1 className="button-bg text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
                Tech Stack
              </h1>
              <div className="flex flex-row flex-wrap mt-8">
                {/* <Image
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                  alt="javascriptImg"
                  className="h-20 w-20 mx-4 my-4"
                />
                */}
              </div>
            </div>

            <div className="flex justify-center h-full">
            <Image
                  src="/mountain.jpg"
                  alt="cover icon"
                  layout="fixed"
                  width={300}
                  height={390}
                />

        </div>
          </div>
        </div>
      </section>
      </div>
      </div>
    );
  }

export default AboutMe;





