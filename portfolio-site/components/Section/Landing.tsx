import React from 'react';
import Image from 'next/image';
// Components
import { FC, useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import userData from '../data';

import Typewriter from 'typewriter-effect';

const LandingPage: FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Button is displayed after scrolling for 50 pixels
    const toggleVisibility = (): void => {
      setOffset(window.scrollY);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      <div id="home" className="absolute -top-24"></div>
      <div className="bg-landing flex h-screen w-full items-center justify-center">
        <div
          className={`flex w-full max-w-6xl flex-col items-center justify-between px-6 md:flex-row md:px-10 ${
            offset > 100 ? 'opacity-20' : ''
          } transition-all duration-300`}
        >
          {/* Left Side: Text Content */}
          <div className="w-full text-center md:w-1/2 md:text-left">
            <Fade direction="down" delay={500}>
              <p className="title-1 w-full">Hi, I am</p>
              <span className="title-2 w-full">{userData.name}</span>
              <div className="subtext-1">
                <Typewriter
                  options={{
                    strings: [
                      'Software Engineer',
                      'Adventurer',
                      'Aspiring Technologist',
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50, // Faster typing speed (default is ~75ms)
                    deleteSpeed: 25, // Faster delete speed
                  }}
                />
              </div>
            </Fade>
          </div>

          {/* Right Side: Profile Picture */}
          <div className="mt-6 flex w-full justify-center md:mt-0 md:w-1/2">
            <Fade direction="down" delay={500}>
              <Image
                src={userData.avatarUrl} // Replace with actual profile image path
                alt="Profile Picture"
                width={400} // Adjust as needed
                height={400}
                className="h-32 w-32 rounded-full border-4 border-gray-300 object-cover shadow-lg sm:h-40 sm:w-40 md:h-48 md:w-48"
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
