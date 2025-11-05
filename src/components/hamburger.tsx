'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import localFont from "next/font/local";

//Local hosted Fonts
const poppins = localFont({
  src: "../assets/fonts/poppins/poppins-regular.ttf",
})

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#37C500] shadow-lg transition-transform duration-300 ease-in-out ${
          isOpen ? 'transform translate-y-0 opacity-100 visible' : 'transform -translate-y-4 opacity-0 invisible'
        }`}
      >
        <ul className="flex flex-col text-center p-4 space-y-4">
          <Link href="/" className={`block py-2 px-4 text-white ${poppins.className}`}>Home</Link>
          <Link href="/" className={`block py-2 px-4 text-white ${poppins.className}`}>About Us</Link>
          <Link href="/" className={`block py-2 px-4 text-white ${poppins.className}`}>Ablaze</Link>
          <Link href="/" className={`block py-2 px-4 text-white ${poppins.className}`}>Ministries</Link>
          <Link href="/" className={`block py-2 px-4 text-white ${poppins.className}`}>Gallery</Link>
          <Link href="/" className={`block py-2 px-4 text-white ${poppins.className}`}>Blog</Link>
          <Link href="/" className={`block py-2 px-4 text-white ${poppins.className}`}>Contact Us</Link>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
