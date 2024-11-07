"use client";
import React from "react";
import { MdEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { lusitana } from "@/components/fonts";

const Contact = () => {
  return (
    <>
      <section id="contact" className="bg-[#140023] py-10 min-h-screen">
        <h1 className={`${lusitana.className} text-center font-bold text-3xl md:text-4xl text-[#CC8B00] mb-8`}>
          Contact <span className="font-bold text-2xl md:text-3xl">Me</span>
        </h1>
        
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-10">
          {/* Email */}
          <div className="flex items-center space-x-4 md:space-x-9 mb-6">
            <div className="border-solid border-2 border-[#CC8B00] p-4 rounded-full text-[#CC8B00]">
              <MdEmail size={38} />
            </div>
            <IoIosArrowForward size={30} className="text-[#CC8B00]" />
            <h2 className={`${lusitana.className} text-lg md:text-3xl text-[#E9E6E5]`}>mahamteddy@gmail.com</h2>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4 md:space-x-9 mb-6">
            <div className="border-solid border-2 border-[#CC8B00] p-4 rounded-full text-[#CC8B00]">
              <IoCallSharp size={38} />
            </div>
            <IoIosArrowForward size={30} className="text-[#CC8B00]" />
            <h2 className={`${lusitana.className} text-lg md:text-3xl text-[#E9E6E5]`}>0332 - 2304830</h2>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-4 md:space-x-9 mb-6">
            <div className="border-solid border-2 border-[#CC8B00] p-4 rounded-full text-[#CC8B00]">
              <FaLocationDot size={38} />
            </div>
            <IoIosArrowForward size={30} className="text-[#CC8B00]" />
            <h2 className={`${lusitana.className} text-lg md:text-3xl text-[#E9E6E5]`}>Shahfaisal Green Town</h2>
          </div>

          <hr className="my-8 border-red-300" />

          {/* Social Links */}
          <div className="flex justify-center space-x-8 text-gray-300">
            <Link href={"https://www.instagram.com/danx6495/profilecard/?igsh=bjF0bWc4Z3VzajJ4"} target="_blank">
              <div className="border-solid border-2 border-gray-300 p-3 rounded-full text-gray-300 hover:bg-[#CC8B00] hover:text-white transition duration-300">
                <FaInstagram size={30} />
              </div>
            </Link>

            <Link href={"https://www.linkedin.com/in/maham-zafar-8839702ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target="_blank">
              <div className="border-solid border-2 border-gray-300 p-3 rounded-full text-gray-300 hover:bg-[#CC8B00] hover:text-white transition duration-300">
                <FaLinkedinIn size={30} />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
