import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faPlay, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import specific icons
import { NavLink } from 'react-router-dom';
const ServicePage = () => {
  return (
    <div className="bg-white text-gray-900 mt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Title */}
        <div className="text-sm text-gray-600 mb-2">
          <FontAwesomeIcon icon={faPlay} className="mr-2" /> OUR SERVICES {/* Replace <i> with FontAwesomeIcon */}
        </div>
        <h1 className="text-4xl font-light mb-6">
          Diverse solutions tailored to your every need
        </h1>


        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://storage.googleapis.com/a1aa/image/r2LATNc1I2ZsNhTbeyuHqTj4TeRPNBj8WoZeuZn6zskAneYOB.jpg"
              alt="Freelancer working on a laptop"
              className="w-full h-auto mb-4"
            />
            <h2 className="text-lg font-medium">Web Development</h2>
            <p className="text-sm text-gray-600">
              Websites, web apps, e-commerce
            </p>
          </div>

          <div className="text-center">
            <img
              src="https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="App Development image"
              className="w-full h-auto mb-4 aspect-square object-cover"

            />
            <h2 className="text-lg font-medium">App Development</h2>
            <p className="text-sm text-gray-600">
              Android, IOS , Cross Plateform
            </p>
          </div>

          <div className="text-center">
            <img
              src="https://storage.googleapis.com/a1aa/image/nRAI6LOqetQ5QaJpxfDt9gyIax6auXn5fpy8m3v3OP18meYOB.jpg"
              alt="Graphic designer working on a project"
              className="w-full h-auto mb-4"
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

            />
            <h2 className="text-lg font-medium">Digital Marketing</h2>
            <p className="text-sm text-gray-600">
              SEO, social media, content marketing
            </p>
          </div>

          <div className="text-center">
            <img
              src="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Tutor teaching students"
              className="w-full mb-4 aspect-square object-cover"

            />
            <h2 className="text-lg font-medium">Online Tutoring</h2>
            <p className="text-sm text-gray-600">
              Coaching, Online Class, Live video lectures
            </p>
          </div>

          <div className="text-center">
            <img
              src="https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Doubt solving"
              className="w-full h-auto mb-4 aspect-square object-cover"

            />
            <h2 className="text-lg font-medium">Doubt Solving</h2>
            <p className="text-sm text-gray-600">
              School, College, Competetive Exams
            </p>
          </div>

        </div>
        <div className="bg-lime-400 flex items-center justify-center min-h-36 md:min-h-48 mt-8">
          <div className="text-center">
            <h1 className="text-xl md:text-3xl font-light text-black mb-4 md:mb-8 pop">
              Get an estimate for your upcoming project
            </h1>
            <NavLink to="/contact-us" className="bg-black text-lime-400 py-2 px-4 text-sm font-bold pop">
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
