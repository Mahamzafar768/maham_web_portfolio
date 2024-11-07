import React from "react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiFigma,
} from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { lusitana } from "@/components/fonts";

const Skill = () => {
  return (
    <>
      <section id="skill" className="bg-[#140023] min-h-screen py-10">
        <h1 className={`${lusitana.className} text-center font-bold text-4xl text-[#CC8B00] py-6 md:py-9`}>
          My <span className="font-bold text-3xl">Skills</span>
        </h1>

        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center md:mx-[70px] mx-[20px] gap-6 md:gap-4 py-[20px]">
          {/* Skill Card for Next.js */}
          <div className="w-full max-w-[350px] md:w-[25vw] h-[180px] bg-[#323846] rounded-md flex flex-col items-center p-4">
            <div className="text-6xl text-[#02E5F2]">
              <SiNextdotjs />
            </div>
            <h1 className={`${lusitana.className} text-3xl text-[#777A80] font-bold mt-2`}>Next Js</h1>
            <div className="w-full h-[8px] bg-blue-300 mt-4 rounded-md">
              <div className="w-3/4 h-[8px] bg-[#20242D] rounded-md"></div>
            </div>
          </div>

          {/* Skill Card for React.js */}
          <div className="w-full max-w-[350px] md:w-[25vw] h-[180px] bg-[#323846] rounded-md flex flex-col items-center p-4">
            <div className="text-6xl text-[#02E5F2]">
              <RiReactjsFill />
            </div>
            <h1 className={`${lusitana.className} text-3xl text-[#777A80] font-bold mt-2`}>React Js</h1>
            <div className="w-full h-[8px] bg-blue-300 mt-4 rounded-md">
              <div className="w-3/4 h-[8px] bg-[#20242D] rounded-md"></div>
            </div>
          </div>

          {/* Skill Card for Tailwind CSS */}
          <div className="w-full max-w-[350px] md:w-[25vw] h-[180px] bg-[#323846] rounded-md flex flex-col items-center p-4">
            <div className="text-6xl text-[#02E5F2]">
              <SiTailwindcss />
            </div>
            <h1 className={`${lusitana.className} text-3xl text-[#777A80] font-bold mt-2`}>Tailwind CSS</h1>
            <div className="w-full h-[8px] bg-blue-300 mt-4 rounded-md">
              <div className="w-3/4 h-[8px] bg-[#20242D] rounded-md"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center md:mx-[70px] mx-[20px] gap-6 md:gap-4 py-[20px]">
          {/* Skill Card for TypeScript */}
          <div className="w-full max-w-[350px] md:w-[25vw] h-[180px] bg-[#323846] rounded-md flex flex-col items-center p-4">
            <div className="text-6xl text-[#02E5F2]">
              <SiTypescript />
            </div>
            <h1 className={`${lusitana.className} text-3xl text-[#777A80] font-bold mt-2`}>TypeScript</h1>
            <div className="w-full h-[8px] bg-blue-300 mt-4 rounded-md">
              <div className="w-3/4 h-[8px] bg-[#20242D] rounded-md"></div>
            </div>
          </div>

          {/* Skill Card for JavaScript */}
          <div className="w-full max-w-[350px] md:w-[25vw] h-[180px] bg-[#323846] rounded-md flex flex-col items-center p-4">
            <div className="text-6xl text-[#02E5F2]">
              <SiJavascript />
            </div>
            <h1 className={`${lusitana.className} text-3xl text-[#777A80] font-bold mt-2`}>JavaScript</h1>
            <div className="w-full h-[8px] bg-blue-300 mt-4 rounded-md">
              <div className="w-3/4 h-[8px] bg-[#20242D] rounded-md"></div>
            </div>
          </div>

          {/* Skill Card for Figma */}
          <div className="w-full max-w-[350px] md:w-[25vw] h-[180px] bg-[#323846] rounded-md flex flex-col items-center p-4">
            <div className="text-6xl text-[#02E5F2]">
              <SiFigma />
            </div>
            <h1 className={`${lusitana.className} text-3xl text-[#777A80] font-bold mt-2`}>Figma</h1>
            <div className="w-full h-[8px] bg-blue-300 mt-4 rounded-md">
              <div className="w-3/4 h-[8px] bg-[#20242D] rounded-md"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
