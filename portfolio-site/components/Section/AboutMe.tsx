import React from 'react';
import { FC } from 'react';
import userData from '../data';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const AboutMe: FC = ({ children }) => {
  return (
    <div className="mt-20 overflow-hidden bg-white dark:bg-black">
      <div id="aboutme" className="absolute -top-24"></div>
      <section>
        <div className="mx-auto">
          <h1 className="mt-20 text-center text-5xl font-bold text-black dark:text-white">
            About Me.
          </h1>
        </div>

        <div className="-mt-10 mb-10">
          <Fade direction="left" delay={500}>
            <div className="mx-auto max-w-6xl pt-20 text-center md:text-left">
              <p
                className="mx-4 text-2xl leading-loose text-gray-800 dark:text-gray-100 md:text-3xl"
                style={{ lineHeight: '3rem' }}
              >
                {userData.about.title}.
              </p>
            </div>
          </Fade>
        </div>

        {/* 🔹 This ensures equal 50% width between text & image */}
        <div className="bg-gray-100 dark:bg-black">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 py-20 md:grid-cols-2">
            {/* Left Side: Text Content (Takes 50% Width) */}
            <div className="flex flex-col justify-center text-gray-800 dark:text-gray-100">
              {userData.about.description?.map((desc, idx) => (
                <p key={idx} className="mb-4 text-xl">
                  {desc}
                </p>
              ))}

              <div className="mt-6">
                {/* Tech Stack Section */}
                <h1 className="mb-5 text-3xl font-bold text-gray-900 dark:text-gray-200">
                  Tech Stack
                </h1>

                <h2 className="mb-3 text-xl text-gray-900 dark:text-gray-200">
                  Experienced in
                </h2>
                <div className="mb-10 flex flex-wrap">
                  {[
                    { src: '/icons/java.png', title: 'Java' },
                    { src: '/icons/python.png', title: 'Python' },
                    { src: '/icons/html5.png', title: 'HTML 5' },
                    { src: '/icons/css3.png', title: 'CSS 3' },
                    { src: '/icons/nextjs.jpg', title: 'Next.Js' },
                    { src: '/icons/react.png', title: 'React.js' },
                    { src: '/icons/typescript.png', title: 'Typescript' },
                    { src: '/icons/firebase.png', title: 'Firebase' },
                    { src: '/icons/mongodb.svg', title: 'MongoDB' },
                    { src: '/icons/git.png', title: 'Git' },
                    { src: '/icons/figma.png', title: 'Figma' },
                  ].map((icon, idx) => (
                    <div
                      key={idx}
                      className="group relative mx-1 my-4 flex flex-col items-center"
                    >
                      {/* Tooltip Text (Initially Hidden) */}
                      <span className="absolute bottom-14 rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        {icon.title}
                      </span>

                      {/* Tech Stack Icon */}
                      <Image
                        src={icon.src}
                        alt={icon.title}
                        width={50}
                        height={50}
                        className="cursor-pointer filter dark:invert"
                      />
                    </div>
                  ))}
                </div>

                <h2 className="mb-3 text-xl text-gray-900 dark:text-gray-200">
                  Some experience in
                </h2>

                <div className="mb-10 flex flex-wrap">
                  {[
                    { src: '/icons/dart.png', title: 'Dart' },
                    { src: '/icons/flutter.png', title: 'Flutter' },
                    { src: '/icons/vue.png', title: 'Vue3' },
                    { src: '/icons/quasar.png', title: 'Quasar' },
                    { src: '/icons/tailwindcss.png', title: 'Tailwind CSS' },
                    { src: '/icons/javascript.png', title: 'JavaScript' },
                    { src: '/icons/mysql-logo.png', title: 'MySQL' },
                  ].map((icon, idx) => (
                    <div
                      key={idx}
                      className="group relative mx-1 my-4 flex flex-col items-center"
                    >
                      {/* Tooltip Text (Initially Hidden) */}
                      <span className="absolute bottom-14 rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        {icon.title}
                      </span>

                      {/* Tech Stack Icon */}
                      <Image
                        src={icon.src}
                        alt={icon.title}
                        width={50}
                        height={50}
                        className="cursor-pointer filter dark:invert"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 🔹 Right Side: Profile Image (Now takes 50% width) */}
            <div className="order-first flex justify-center md:order-last  md:items-center">
              <Image
                src={userData.profilePicture}
                alt="Profile"
                layout="intrinsic"
                width={500} // Ensure proper width for 50% split
                height={500}
                className="rounded-lg border-4 border-gray-300 object-cover shadow-lg dark:border-gray-600 sm:w-72 md:w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
