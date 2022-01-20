import React from "react";
import { FC } from "react";
import userData from "../data";
import Image from "next/image";


const Projects: FC = ({ children }) => {
  return (

    <div className="space overflow-hidden">
    <div id="projects" className="absolute -top-24"></div>
    <section className="bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 dark:bg-gray-800">
        <h1 className=" text-white text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className=" dark:bg-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((proj, idx) => (
            
            <ProjectCard
            key={proj.title}
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
            />
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

export default Projects;

const ProjectCard = ({ title, link, imgUrl } : { title : string, link : string, imgUrl : string  })  => {
  return (
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <Image
            src={imgUrl}
            alt="portfolio"
            layout='fill'
            className="transform opacity-90 hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
           {title}
        </h1>
      </div>
    </a>
  );
};
