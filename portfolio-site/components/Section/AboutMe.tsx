import React from "react";
import { FC } from "react";
import userData from "../data";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const AboutMe: FC = ({ children }) => {
  return (
    <div>
      <div id="aboutme" className="absolute -top-24"></div>
      <div className="space overflow-hidden">
        <section>
          <div className="max-w-6xl mx-auto h-48 bg-gray-800">
            <h1 className="text-white text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
              About Me.
            </h1>
          </div>
          <div className="space -mt-10">
            <Fade direction="left" delay={500}>
              <div className="text-container max-w-6xl mx-auto pt-20">
                <p
                  className="leading-loose text-white text-2xl md:text-4xl font-semibold  mx-4"
                  style={{ lineHeight: "3rem" }}
                >
                  {userData.about.title}.
                </p>
                <br />
              </div>
            </Fade>
          </div>
          <Fade direction="up" delay={500}>
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

<p
                      className="text-xl text-gray-700 mb-1 dark:text-gray-300 "
                    >
                      For any new opportunities, feel free to reach out to me via
                    </p>

<p
                      className="text-xl text-gray-700 mb-6 dark:text-gray-300 "
                    >
                      {userData.email}
                    </p>
                  

                  <h1 className="button-bg text-3xl px-2 py-1 inline-block font-bold text-gray-50">
                    Tech Stack
                  </h1>
                  <div className="flex flex-row flex-wrap mt-8">
                    <Image
                      src="/icons/java.png"
                      alt="img"
                      width={50}
                      height={50}
                      title="Java"
                      className="cursor-pointer mx-5 my-4"
                    />

                    <Image
                      src="/icons/python.png"
                      alt="img"
                      width={50}
                      height={50}
                      title="Python"
                      className="cursor-pointer mx-5 my-4"
                    />

                    <Image
                      src="/icons/dart.png"
                      alt="img"
                      width={50}
                      height={50}
                      title="Dart"
                      className="cursor-pointer mx-5 my-4"
                    />

                    <Image
                      src="/icons/flutter.png"
                      alt="img"
                      width={50}
                      height={50}
                      title="Flutter"
                      className="cursor-pointer mx-5 my-4"
                    />

                    <Image
                      src="/icons/java-ee-logo.png"
                      alt="img"
                      width={50}
                      height={50}
                      title="Jakarta EE"
                      className="cursor-pointer mx-5 my-4"
                    />

                    <Image
                      src="/icons/html5.png"
                      alt="img"
                      width={50}
                      height={50}
                      title="HTML 5"
                      className="cursor-pointer mx-5 my-4"
                    />

                    <Image
                      src="/icons/css3.png"
                      alt="img"
                      width={50}
                      height={50}
                      title="CSS 3"
                      className="cursor-pointer mx-5 my-4"
                    />

                    <Image
                      src="/icons/nextjs.jpg"
                      alt="img"
                      width={50}
                      height={50}
                      title="Next.Js"
                      className="cursor-pointer mx-5 my-4"
                    />

                    <Image
                      src="/icons/react.png"
                      alt="img"
                      width={60}
                      height={50}
                      title="React.js"
                      className="cursor-pointer mx-5 my-4"
                    />

                    <Image
                      src="/icons/vue.png"
                      alt="img"
                      width={50}
                      height={50}
                      title="Vue3"
                      className="cursor-pointer mx-5 my-4"
                    />

                    <Image
                      src="/icons/quasar.png"
                      alt="img"
                      width={50}
                      height={50}
                      title="Quasar"
                      className="cursor-pointer mx-5 my-4"
                    />

                    <Image
                      src="/icons/tailwindcss.png"
                      alt="img"
                      width={50}
                      height={50}
                      title="Tailwind CSS"
                      className="cursor-pointer mx-5 my-4"
                    />

                    <Image
                      src="/icons/typescript.png"
                      alt="img"
                      width={50}
                      height={50}
                      title="Typescript"
                      className="cursor-pointer mx-5 my-4"
                    />

                    <Image
                      src="/icons/javascript.png"
                      alt="img"
                      width={50}
                      height={50}
                      title="JavaScript"
                      className="cursor-pointer mx-5 my-4"
                    />

                    <Image
                      src="/icons/firebase.png"
                      alt="img"
                      width={50}
                      height={50}
                      title="Firebase"
                      className="cursor-pointer mx-5 my-4"
                    />

                    <Image
                      src="/icons/mongodb.svg"
                      alt="img"
                      width={50}
                      height={50}
                      title="MongoDB"
                      className="cursor-pointer mx-5 my-4"
                    />

                    <Image
                      src="/icons/mysql.png"
                      alt="img"
                      width={50}
                      height={50}
                      title="MySQL"
                      className="cursor-pointer mx-5 my-4"
                    />

                    <Image
                      src="/icons/git.png"
                      alt="img"
                      width={50}
                      height={50}
                      title="Git"
                      className="cursor-pointer mx-5 my-4"
                    />

                    <Image
                      src="/icons/figma.png"
                      alt="img"
                      width={50}
                      height={50}
                      title="Figma"
                      className="cursor-pointer mx-5 my-4"
                    />

                    <Image
                      src="/icons/tableau.png"
                      alt="img"
                      width={50}
                      height={50}
                      title="Tableau"
                      className="cursor-pointer mx-5 my-4"
                    />
                  </div>
                </div>

                <div className="px-5 py-5 flex justify-center h-full">
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
          </Fade>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
