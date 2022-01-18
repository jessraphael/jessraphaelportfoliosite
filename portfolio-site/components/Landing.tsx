import { FC } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
// import Button from "../components/Section/Button";

const Landing: FC = ({ children }) => {
  return (
    <div className="pt-[84px] h-screen grid place-items-center mx-7">
      <div id="home" className="absolute -top-24"></div>
      <div className="grid md:grid-cols-2 h-4/5">
        <div className="flex items-center justify-center h-full">
          <div className="transform hover:scale-110 hover:-translate-y-16 transition-all">
<h1>Image</h1>
<Fade direction="down" delay={500}>
              <span className="font-semibold w-full">
                Bill splitting made easy.
              </span>
              <br />
              <p className="text-white text-lg font-light mt-6">
                Fast and hassle-free payment collection from your friends
              </p>
            </Fade>
          </div>
        </div>
        <div className="flex justify-center items-center h-full">
          <h1 className="text-white text-3xl font-semibold text-center md:text-left">
           
            <br />
            <span>
<h1>Image 2</h1>

            </span>
          </h1>
        </div>
        <div className="md:space"></div>
      </div>
    </div>
  );
};
export default Landing;
