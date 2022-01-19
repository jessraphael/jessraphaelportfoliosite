import { FC } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Button from "../Layout/Button";
import userData from "../data";

const Experiences: FC = ({ children }) => {
  return (
    <div className="space overflow-hidden">
      <div id="experiences" className="absolute -top-24"></div>
    <section className=" px-8 py-40">
      <div className="max-w-6xl mx-auto px h-48]">
        <h1 className="text-6xl pt-8 py-4 font-semibold text-center text-white">
          Experiences
        </h1>
      </div>
        <div className="grid grid-cols-1 max-w-xl mx-auto pt-20">
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
    </section>
    </div>
  );
};

export default Experiences;

const ExperienceCard = ({
  title,
  desc,
  year,
  company,
  companyLink,
}: {
  title: string;
  desc: string;
  year: string;
  company: string;
  companyLink: string;
}) => {
  return (
    <div className="relative experience-card p-4  shadow-xl bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl font-bold text-white">
        {year}
      </h1>
      <h1 className="font-semibold text-xl text-white">{title}</h1>
      <a href={companyLink} className="text-gray-400">
        {company}
      </a>
      <p className="text-white my-2">{desc}</p>
    </div>
  );
};
