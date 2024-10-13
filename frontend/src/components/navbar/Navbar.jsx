import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20 flex items-center justify-between p-4 bg-white shadow">
      {/* Logo and Company Name */}
      <div className="flex items-center">
        <img
          alt="Company logo"
          className="h-10 mr-2"
          src="/OutsourceNow.png"
          // width="50"
          // height="50"
        />
        {/* <span className="text-black font-semibold">Outsource Now</span> */}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none"
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`md:flex items-center space-x-8 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <a className="text-black" href="#">Home</a>
        <a className="text-black" href="#">Services</a>
        <a className="text-black" href="#">Projects</a>
        <a className="text-black" href="#">About Us</a>
        <a className="bg-yellow-400 text-black py-2 px-4 text-sm font-bold" href="#">CONTACT US</a>
      </div>
    </nav>
  );
};

export default Navbar;
