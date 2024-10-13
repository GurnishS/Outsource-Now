import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faPlay, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

const ServiceSection = () => {
  return (
    <div className="bg-white text-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Title */}
        <div className="text-sm text-gray-600 mb-2">
          <FontAwesomeIcon icon={faPlay} className="mr-2" /> OUR SERVICES {/* Replace <i> with FontAwesomeIcon */}
        </div>
        <h1 className="text-4xl font-light mb-6">
          Diverse solutions tailored to your every need
        </h1>

        {/* Learn More Button */}
        <div className="mb-8">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 bg-green-900 text-white text-sm font-medium"
          >
            <FontAwesomeIcon icon={faArrowRight} className="mr-2" /> LEARN MORE {/* Replace <i> with FontAwesomeIcon */}
          </a>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://storage.googleapis.com/a1aa/image/r2LATNc1I2ZsNhTbeyuHqTj4TeRPNBj8WoZeuZn6zskAneYOB.jpg"
              alt="Freelancer working on a laptop"
              className="w-full h-auto mb-4"
              width="600"
              height="400"
            />
            <h2 className="text-lg font-medium">Web Development</h2>
            <p className="text-sm text-gray-600">
              Websites, web apps, e-commerce
            </p>
          </div>

          <div className="text-center">
            <img
              src="https://storage.googleapis.com/a1aa/image/nRAI6LOqetQ5QaJpxfDt9gyIax6auXn5fpy8m3v3OP18meYOB.jpg"
              alt="Graphic designer working on a project"
              className="w-full h-auto mb-4"
              width="600"
              height="400"
            />
            <h2 className="text-lg font-medium">Graphic Design</h2>
            <p className="text-sm text-gray-600">
              Logos, branding, marketing materials
            </p>
          </div>

          <div className="text-center">
            <img
              src="https://storage.googleapis.com/a1aa/image/c4SeKlNo2FTJYC9mgD1lKDWeMRB4mPEfgjxMIa6XyqLfN9YOB.jpg"
              alt="Digital marketer analyzing data"
              className="w-full h-auto mb-4"
              width="600"
              height="400"
            />
            <h2 className="text-lg font-medium">Digital Marketing</h2>
            <p className="text-sm text-gray-600">
              SEO, social media, content marketing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
