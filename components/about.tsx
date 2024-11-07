import Image from 'next/image';
import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { lusitana } from "@/components/fonts";

const About = () => {
    return (
        <>
            <section className="bg-[#E4E4E4] py-8 md:py-12" id="about">
                <h1 className={`${lusitana.className} text-center text-3xl md:text-4xl font-bold text-[#CC8B00] mb-6`}>
                    About <span className={`${lusitana.className}`}>Me</span>
                </h1>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4 md:px-8">
                    <div className="flex justify-center items-center">
                        <Image src="/maham1.png" width={300} height={300} alt="Suleman" className="rounded-full md:rounded-none" />
                    </div>
                    
                    <div className="max-w-lg text-center md:text-left px-4">
                        <FaQuoteLeft size={24} className="text-[#CC8B00] inline-block mb-4" />
                        <p className={`${lusitana.className} text-lg md:text-xl font-semibold text-black`}>
                            As a skilled and dedicated Frontend Developer, I bring a strong blend of creativity, technical expertise,
                            and a deep understanding of modern web design principles.
                        </p>
                        <FaQuoteRight size={24} className="text-[#CC8B00] inline-block mt-4" />
                    </div>
                </div>
                
                <div className="px-6 md:px-20 lg:px-40 mt-8">
                    <h2 className={`${lusitana.className} text-2xl md:text-3xl font-bold text-[#4B4B4B]`}>Education :</h2>
                    <div className="w-20 h-1 bg-[#CC8B00] mb-6"></div>
                    
                    <ul className="space-y-6 tracking-wider text-[#4B4B4B]">
                        <li className={`${lusitana.className} list-disc ml-6`}>
                            <p className="text-md md:text-lg">Mar 2022 - June 2024</p>
                            <h3 className="text-lg md:text-xl font-bold text-black">Intermediate, Computer Science</h3>
                            <p className="text-sm md:text-base">City Grammar Secondary School Karachi</p>
                        </li>
                        
                        <li className={`${lusitana.className} list-disc ml-6`}>
                            <p className="text-md md:text-lg">Feb 2024 - Present</p>
                            <h3 className="text-lg md:text-xl font-bold text-black">Web 3, AI, & Metaverse</h3>
                            <p className="text-sm md:text-base">Governor Sindh Kamran Tessori Initiative for Artificial Intelligence & Computing</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default About;
