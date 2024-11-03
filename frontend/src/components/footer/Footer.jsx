import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start">
          <div className="items-center space-x-4 hidden md:flex">
            <img src='/OutsourceNow.png' className='h-10'/>
            {/* <div className="text-sm text-gray-700">
              <p>Outsource Now</p>
              <p>Freelancing Company</p>
            </div> */}
          </div>
          <div className="text-xs sm:text-sm text-gray-700 flex flex-col space-y-2">
            <h3 className="font-bold mb-2">HEAD OFFICE</h3>
            <div className="space-y-2">
              <p>500 Terry Francine St,</p>
              <p>San Francisco, CA 9415</p>
              <p>123-456-7890</p>
              <p>info@mysite.com</p>
            </div>
          </div>
          <div className="text-xs sm:text-sm text-gray-700 space-y-2 flex flex-col">
            <h3 className="font-bold mb-2">NAVIGATION</h3>
            <NavLink to="/" className={({isActive})=>(isActive?"text-red-400":"")}>Home</NavLink>
            <NavLink to="/services" className={({isActive})=>(isActive?"text-red-400":"")}>Services</NavLink>
            <NavLink to="/projects" className={({isActive})=>(isActive?"text-red-400":"")}>Projects</NavLink>
            <NavLink to="/about" className={({isActive})=>(isActive?"text-red-400":"")}>About Us</NavLink>
          </div>
          <div className="text-xs sm:text-sm text-gray-700 space-y-2 flex flex-col">
            <h3 className="font-bold mb-2">FOLLOW US</h3>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-4 flex justify-between text-sm text-gray-700">
          <p>© 2034 by Outsource Now Freelancing Company</p>
          <div className="flex space-x-4">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
