import React from 'react';
import { FC } from 'react';
import userData from '../data';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const AboutMe: FC = ({ children }) => {
  return (
    <div className="space mt-20 overflow-hidden bg-white dark:bg-black">
      <div id="aboutme" className="absolute -top-24"></div>
      <section>
        <div className="mx-auto">
          <h1 className="mt-20 text-center text-5xl font-bold text-black dark:text-white">
            About Me.
          </h1>
        </div>

        <div className="space -mt-10">
          <Fade direction="left" delay={500}>
            <div className="text-container mx-auto max-w-6xl pt-20">
              <p
                className="mx-4 text-2xl leading-loose text-gray-800 dark:text-gray-100 md:text-3xl"
                style={{ lineHeight: '3rem' }}
              >
                {userData.about.title}.
              </p>
            </div>
          </Fade>
        </div>

        <div className="bg-gray-100 px-4 dark:bg-black">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-20 gap-y-20 py-20 pt-20 md:grid-cols-3">
            {/* Text Area */}
            <div className="col-span-1 text-gray-800 dark:text-gray-100 md:col-span-2">
              {userData.about.description?.map((desc, idx) => (
                <p key={idx} className="mb-4 text-xl">
                  {desc}
                </p>
              ))}

              <p className="mb-1 text-xl">
                For any new opportunities, feel free to reach out to me via
              </p>
              <p className="mb-6 text-xl font-semibold">{userData.email}</p>

              <div className="row-3 flex flex-col">
                {/* Tech Stack Header */}
                <h1 className="mb-10 inline-block px-2 py-1 text-3xl font-bold text-gray-900 dark:text-gray-200">
                  Tech Stack
                </h1>

                <h1 className="inline-block px-2 py-1 text-xl text-gray-900 dark:text-gray-200">
                  Experienced in
                </h1>
                {/* Tech Stack Icons */}
                <div className="mb-10 mt-8 flex flex-row flex-wrap">
                  {[
                    { src: '/icons/java.png', title: 'Java' },
                    { src: '/icons/python.png', title: 'Python' },
                    { src: '/icons/java-ee-logo.png', title: 'Jakarta EE' },
                    { src: '/icons/html5.png', title: 'HTML 5' },
                    { src: '/icons/css3.png', title: 'CSS 3' },
                    { src: '/icons/nextjs.jpg', title: 'Next.Js' },
                    { src: '/icons/react.png', title: 'React.js' },
                    { src: '/icons/typescript.png', title: 'Typescript' },
                    { src: '/icons/javascript.png', title: 'JavaScript' },
                    { src: '/icons/firebase.png', title: 'Firebase' },
                    { src: '/icons/mongodb.svg', title: 'MongoDB' },
                    { src: '/icons/git.png', title: 'Git' },
                    { src: '/icons/figma.png', title: 'Figma' },
                  ].map((icon, idx) => (
                    <Image
                      key={idx}
                      src={icon.src}
                      alt={icon.title}
                      width={50}
                      height={50}
                      title={icon.title}
                      className="mx-5 my-4 cursor-pointer filter dark:invert"
                    />
                  ))}
                </div>

                <h1 className="inline-block px-2 py-1 text-xl text-gray-900 dark:text-gray-200">
                  Some experience in
                </h1>
                {/* Tech Stack Icons */}
                <div className="mb-10 mt-8 flex flex-row flex-wrap">
                  {[
                    { src: '/icons/dart.png', title: 'Dart' },
                    { src: '/icons/flutter.png', title: 'Flutter' },
                    { src: '/icons/vue.png', title: 'Vue3' },
                    { src: '/icons/quasar.png', title: 'Quasar' },
                    { src: '/icons/tailwindcss.png', title: 'Tailwind CSS' },
                    { src: '/icons/mysql-logo.png', title: 'MySQL' },
                    { src: '/icons/mongodb.svg', title: 'MongoDB' },
                    //Add Node
                    //Add Express
                  ].map((icon, idx) => (
                    <Image
                      key={idx}
                      src={icon.src}
                      alt={icon.title}
                      width={50}
                      height={50}
                      title={icon.title}
                      className="mx-5 my-4 cursor-pointer filter dark:invert"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex h-full justify-center px-5 py-5">
              <Image
                src={userData.avatarUrl}
                alt="Profile"
                layout="fixed"
                width={600}
                height={600}
                className="h-32 w-32 border-4 border-gray-300 object-cover shadow-lg dark:border-gray-600 sm:h-40 sm:w-40 md:h-48 md:w-48"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
