"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { lusitana } from "@/components/fonts";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const toggleMenu = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-[#271E35] fixed w-full z-10">
        <nav className="flex justify-between items-center md:px-12 px-6 py-4">
          {/* Logo Section */}
          <div className="text-2xl font-bold">
            <h1 className={`${lusitana.className} text-[#E9E6E5]`}>Maham</h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg text-[#E9E6E5]">
            <li className={`${lusitana.className} text-[#02E5F2]`}><Link href="#home">Home</Link></li>
            <li className={`${lusitana.className}`}><Link href="#about">About</Link></li>
            <li className={`${lusitana.className}`}><Link href="#skill">Skills</Link></li>
            <li className={`${lusitana.className}`}><Link href="#project">Projects</Link></li>
            <li className={`${lusitana.className}`}><Link href="#contact">Contact</Link></li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-white p-2 rounded-md cursor-pointer hover:bg-[#323846]">
            {isMenuOpen ? (
              <IoCloseSharp onClick={toggleMenu} size={30} />
            ) : (
              <GiHamburgerMenu onClick={toggleMenu} size={30} />
            )}
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="flex flex-col items-center md:hidden bg-gray-800 text-white font-bold text-lg py-6 space-y-4">
            <li className={`${lusitana.className}`}><Link href="#home" onClick={toggleMenu}>Home</Link></li>
            <li className={`${lusitana.className}`}><Link href="#about" onClick={toggleMenu}>About</Link></li>
            <li className={`${lusitana.className}`}><Link href="#skill" onClick={toggleMenu}>Skills</Link></li>
            <li className={`${lusitana.className}`}><Link href="#project" onClick={toggleMenu}>Projects</Link></li>
            <li className={`${lusitana.className}`}><Link href="#contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        )}
      </header>
    </>
  );
};

export default Navbar;
