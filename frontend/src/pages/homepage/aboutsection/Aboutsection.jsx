import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import FontAwesomeIcon component
import { faPlay, faArrowRight } from '@fortawesome/free-solid-svg-icons';  // Import specific icons
import { NavLink } from 'react-router-dom';

const AboutSection = () => {
  return (
    <div className="relative h-screen bg-gray-900">
      <img
        src="https://storage.googleapis.com/a1aa/image/LaYIasA4pe2GZiwTzrf5LqhX6XjXEcGvaI0iP4d7gU0eHfYOB.jpg"
        alt="Consulting meeting with people discussing business strategy"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        width="1920"
        height="1080"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center h-full px-10">
        <div className="text-white max-w-lg">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faPlay} className="text-white mr-2" /> {/* Replaced <i> with FontAwesomeIcon */}
            <span className="uppercase tracking-widest">About</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Outsource Now</h1>
          <p className="text-lg mb-6">
            This is the space to introduce visitors to the freelancing agency.
            Briefly explain who's behind it, what it does and what makes it
            unique. Share its core values and what this site has to offer.
          </p>
          <NavLink
            to="/about"
            className="inline-flex items-center bg-yellow-400 text-black px-4 py-2 font-semibold text-sm sm:text-lg"
          >
            <FontAwesomeIcon icon={faArrowRight} className="mr-2" /> {/* Replaced <i> with FontAwesomeIcon */}
            LEARN MORE
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
