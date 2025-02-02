import React from 'react';
import { FC } from 'react';
import userData from '../data';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const Projects: FC = ({ children }) => {
  return (
    <div className="space overflow-hidden bg-white dark:bg-black">
      <div id="projects" className="relative -top-24"></div>
      <section>
        <div className="mx-auto">
          <h1 className="py-20 text-center text-5xl font-bold text-black dark:text-white ">
            Projects
          </h1>
        </div>
        {/* Grid starts here */}
        <div className=" dark:bg-black">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-20 pb-40 md:grid-cols-2">
            {userData.projects.map((proj, idx) => (
              <ProjectCard
                key={proj.title}
                title={proj.title}
                link={proj.link}
                imgUrl={proj.imgUrl}
                description={proj.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

const ProjectCard = ({
  title,
  link,
  imgUrl,
  description,
}: {
  title: string;
  link: string;
  imgUrl: string;
  description: string;
}) => {
  return (
    <div className="col-2 h-full w-full">
      <a href={link} className="block w-full shadow-2xl">
        <div className="relative overflow-hidden">
          <div className="h-72 object-cover">
            <Image
              src={imgUrl}
              alt="portfolio"
              layout="fill"
              className="duration-2000 h-full w-full transform object-cover opacity-90 transition ease-out hover:scale-125"
            />
          </div>
          <h1 className="absolute bottom-10 left-10 text-xl font-bold text-gray-50">
            {title}
          </h1>
        </div>
      </a>
      <div className="h-1/5 w-full bg-white px-5 py-5 dark:bg-black">
        <p className="font-semilight text-md text-centertext-black w-full dark:text-white">
          {' '}
          {description}{' '}
        </p>
      </div>
    </div>
  );
};
