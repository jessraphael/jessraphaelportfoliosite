import { FC } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Button from "../Layout/Button";

const Landing: FC = ({ children }) => {
  return (
    <div className="pt-[84px] h-screen grid place-items-center mx-7">
      <div id="home" className="absolute -top-24"></div>
      <div className="grid md:grid-cols-2 h-4/5">
        <div className="flex justify-center items-center h-full">
          <h1 className="text-white text-3xl font-semibold text-center md:text-left">
            <Fade direction="down" delay={500}>
              <span className="anim-typewriter font-semibold w-full">
                Welcome to my life.
              </span>
              <p className="text-white text-lg font-light mt-6">
                Software Developer, Technology Enthusiast, Adventurer, Aspiring Entrepreneur
              </p>
            </Fade>
            <br />
            <span>
              <Fade direction="up" delay={500}>
                <div className="ml-auto">
                  <Button
                    className="px-10 py-2 bg-white text-black font-bold max-w-max text-center"
                    href="telebot"
                  >
                    About Me
                  </Button>
                </div>
              </Fade>
            </span>
          </h1>
        </div>
        <div className="flex items-center justify-center h-full">
            <Fade delay={500}>
              {/* MOBILE */}
              <div className="sm:hidden mb-10">
                <Image
                  src="/landing.jpeg"
                  alt="cover icon"
                  layout="fixed"
                  width={1195}
                  height={1792}
                />
              </div>
              {/* DESKTOP */}
              <div className="hidden sm:block mb-4">
                <Image
                  src="/landing.jpeg"
                  alt="cover icon"
                  layout="fixed"
                  width={400}
                  height={600}
                />
              </div>
            </Fade>
        </div>
        <div className="md:space"></div>
      </div>
    </div>
  );
};
export default Landing;

