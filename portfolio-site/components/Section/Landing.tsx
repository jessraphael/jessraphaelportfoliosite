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
                    href="aboutme"
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





// import { FC, useState, useEffect } from "react";
// import Button from "../Layout/Button";
// import { motion } from "framer-motion";

// const Landing: FC = () => {
//   const [offset, setOffset] = useState(0);

//   useEffect(() => {
//     // Button is displayed after scrolling for 50 pixels
//     const toggleVisibility = (): void => {
//       setOffset(window.pageYOffset);
//     };

//     window.addEventListener("scroll", toggleVisibility);

//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   return (
//     <div id="home">
//       <div className="flex flex-col items-center justify-center w-full h-screen bg-landing">
//         <div
//           className={`flex items-center ${
//             offset > 100 ? "opacity-20" : ""
//           } transition-all duration-300`}
//         >
//           <motion.h1
//             className="font-black text-white select-none text-[12rem] text-gradient hover:text-ai"
//             initial={{ x: "-50%", opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 1, duration: 0.5 }}
//           >
//             ÀI
//           </motion.h1>
//           <h1 className="-mt-10 font-light text-white select-none text-[16rem]">
//             |
//           </h1>

//           <motion.p
//             className="text-2xl font-bold text-white select-none"
//             initial={{ x: "50%", opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 1.2, duration: 0.5 }}
//           >
//             Who says true love is hard to find?
//             <br /> Not with <span className="font-black hover:text-ai">
//               ÀI
//             </span>{" "}
//             by your side
//           </motion.p>
//         </div>

//         <motion.div
//           initial={{ y: "50%", opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 1.4, duration: 0.5 }}
//         >
//           <Button
//             className={`px-12 py-4 text-2xl font-bold uppercase ${
//               offset > 350 ? "opacity-20" : ""
//             } transition-all duration-300`}
//             href="analyzer"
//           >
//             Try it now
//           </Button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };
// export default Landing;
