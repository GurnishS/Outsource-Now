import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {Link,NavLink} from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
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
      <div className={`md:flex items-center space-x-8 hidden`}>
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-red-600 border-b-2" : "text-black")}>Home</NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? "text-red-600 border-b-2" : "text-black")}>Services</NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "text-red-600 border-b-2" : "text-black")}>Projects</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "text-red-600 border-b-2" : "text-black")} >About Us</NavLink>
        <NavLink to="/contact-us" className="bg-yellow-400 text-black py-2 px-4 text-sm font-bold focus:motion-preset-confetti">CONTACT US</NavLink>
      </div>
    </nav>
    <div className={`md:hidden ${isOpen ? 'fixed' : 'hidden'} right-0 h-full w-80 bg-white z-30 motion-preset-slide-left`} style={{ top: "72px" }}>
      <div className="flex flex-col p-8 space-y-4 border-2 h-full">

        <NavLink className={({isActive})=>(isActive?"text-red-600 border-b-2 text-center text-lg border-red-200":"text-black border-b-2 text-center text-lg")} to="/">Home</NavLink>
        <NavLink className={({isActive})=>(isActive?"text-red-600 border-b-2 text-center text-lg border-red-200":"text-black border-b-2 text-center text-lg")} to="/services">Services</NavLink>
        <NavLink className={({isActive})=>(isActive?"text-red-600 border-b-2 text-center text-lg border-red-200":"text-black border-b-2 text-center text-lg")} to="/projects">Projects</NavLink>
        <NavLink className={({isActive})=>(isActive?"text-red-600 border-b-2 text-center text-lg border-red-200":"text-black border-b-2 text-center text-lg")} to="/about">About Us</NavLink>
        <a className="bg-yellow-400 text-black py-2 px-4 text-sm font-bold text-center max-w-40 mx-auto" href="#">CONTACT US</a>
      
      </div>
    </div>
    </>
  );
};

export default Navbar;
