import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import specific icon
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <img
        src="https://storage.googleapis.com/a1aa/image/3cMxqT1pe9TeFEAHNkfegjtfZ5VNoOiFp1XtZgakaCRvx4xcC.jpg"
        alt="Freelancers working on laptops in a modern workspace"
        className="w-full object-cover h-screen"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start p-10 text-white">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 motion-preset-typewriter-[13] motion-duration-[8s]">Outsource Now</h1>
        <p className="text-xl mb-8">
          Quality freelancing services, innovative solutions,
          <br />
          and sustainable growth for every project
        </p>
        <NavLink
          to="/services"
          className="flex items-center text-sm sm:text-lg font-bold bg-yellow-400 text-black px-4 py-2 motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate focus:motion-preset-confetti "
        >
          <FontAwesomeIcon icon={faArrowRight} className={`mr-2 motion-preset-slide-right-lg motion-duration-2000`}/> {/* Replace <i> with FontAwesomeIcon */}
          VIEW SERVICES
        </NavLink>
      </div>

      {/* Decorative Shapes */}
      <div className={`absolute bottom-0 right-0 flex space-x-2 motion-preset-slide-up-lg`}>
        <svg className="text-yellow-400 fill-current" width="100" height="100" viewBox="0 0 100 100">
          <polygon points="0,100 100,100 100,0 50,50 0,0" />
        </svg>
        <svg className="text-yellow-400 fill-current" width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50" />
        </svg>
        <svg className="text-yellow-400 fill-current" width="100" height="100" viewBox="0 0 100 100">
          <rect x="0" y="0" width="100" height="100" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
