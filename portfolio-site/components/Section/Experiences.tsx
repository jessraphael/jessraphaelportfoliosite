import { FC } from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import Button from '../Layout/Button';
import userData from '../data';
import { Briefcase } from 'lucide-react';

const Experiences: FC = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <div id="experiences" className="relative -top-24"></div>
      <section className="px-8 py-20">
        {/* Header Section */}
        <div className="mx-auto">
          <h1 className="py-5 text-center text-5xl font-bold text-black dark:text-white">
            Experiences
          </h1>
        </div>

        {/* Experience Cards Grid */}
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-x-10 pt-20">
          {userData.experience.map((exp, idx) => (
            <div key={idx} className="relative">
              <div className="flex items-start space-x-4 rounded-lg bg-gray-100 p-6 shadow-lg dark:bg-gray-800">
                <div className="flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-gray-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.company}, {exp.location}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.year}
                  </p>
                  <ul className="mt-3 list-outside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    {exp.desc.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Experience Divider */}
              {idx !== userData.experience.length - 1 && (
                <div className="divider-container -mt-2 flex flex-col items-center">
                  <div className="relative z-10 h-4 w-4 rounded-full bg-green-500">
                    <div className="relative z-10 h-4 w-4 animate-ping rounded-full bg-green-500"></div>
                  </div>
                  <div className="-mt-2 h-20 w-1 rounded-full bg-gray-200 dark:bg-gray-500"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experiences;
