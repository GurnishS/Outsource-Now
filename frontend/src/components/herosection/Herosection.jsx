import React from 'react';
import './../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import specific icon

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
        <h1 className="text-6xl font-bold mb-4">Outsource Now</h1>
        <p className="text-xl mb-8">
          Quality freelancing services, innovative solutions,
          <br />
          and sustainable growth for every project
        </p>
        <a
          href="#"
          className="flex items-center text-lg font-bold bg-yellow-400 text-black px-4 py-2"
        >
          <FontAwesomeIcon icon={faArrowRight} className={`mr-2 slide`}/> {/* Replace <i> with FontAwesomeIcon */}
          VIEW SERVICES
        </a>
      </div>

      {/* Decorative Shapes */}
      <div className={`absolute bottom-0 right-0 flex space-x-2 pop`}>
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
