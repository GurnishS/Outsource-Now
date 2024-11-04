import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import the FontAwesome component
import { faArrowRight, faArrowLeft, faPlay } from '@fortawesome/free-solid-svg-icons';  // Import specific icons
import "../../index.css"
import { NavLink } from 'react-router-dom';

const ProjectSection = () => {
  const slideshowRef = useRef(null);

  const scrollBy = (offset) => {
    if (slideshowRef.current) {
      slideshowRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      scrollBy(340); // Scroll right every 3 seconds
    }, 3000);
    return () => clearInterval(autoScroll); // Cleanup the interval on unmount
  }, []);

  return (
    <>
        <div className="container mx-auto px-4 py-8 h-screen md:pt-24">
        <div className="flex items-center space-x-2 mt-4 mb-4">
            <FontAwesomeIcon icon={faPlay} className="text-gray-600" />  {/* Replace <i> with FontAwesomeIcon */}
            <span className="text-gray-600 uppercase text-sm tracking-widest">Recent Projects</span>
        </div>
        <h1 className="text-4xl font-light mt-4">Discover our latest freelancing and consulting projects</h1>
        <div className="mt-8 flex items-center space-x-4 mb-16">
            <NavLink to="/projects" className="bg-black text-white p-4">
            <FontAwesomeIcon icon={faArrowRight} />  {/* Use FontAwesomeIcon */}
            </NavLink>
            <span className="text-gray-600 uppercase text-sm tracking-widest">More Projects</span>
        </div>
        <div className="mt-8 flex items-center space-x-4" style={{ height: '300px' }}>
            <button
            onClick={() => scrollBy(-300)}
            className="bg-white text-gray-600 p-4 border border-gray-300 hidden md:block"
            >
            <FontAwesomeIcon icon={faArrowLeft} />  {/* Use FontAwesomeIcon */}
            </button>
            <div ref={slideshowRef} className="flex space-x-4 overflow-x-hidden">
            <div className="flex-shrink-0 w-80">
                <img
                alt="Web Development for TechCorp"
                className="w-full h-72 object-cover"
                src="https://storage.googleapis.com/a1aa/image/RfEIYsqfCykrLEP41oM3mLv5pdvqUgXL7psmgCmUSJ6JpPmTA.jpg"
                />
                <p className="text-center mt-2">Web Development for TechCorp</p>
            </div>
            <div className="flex-shrink-0 w-80">
                <img
                alt="Web Development for TechCorp"
                className="w-full h-72 object-cover"
                src="https://storage.googleapis.com/a1aa/image/RfEIYsqfCykrLEP41oM3mLv5pdvqUgXL7psmgCmUSJ6JpPmTA.jpg"
                />
                <p className="text-center mt-2">Web Development for TechCorp</p>
            </div>
            <div className="flex-shrink-0 w-80">
                <img
                alt="Web Development for TechCorp"
                className="w-full h-72 object-cover"
                src="https://storage.googleapis.com/a1aa/image/RfEIYsqfCykrLEP41oM3mLv5pdvqUgXL7psmgCmUSJ6JpPmTA.jpg"
                />
                <p className="text-center mt-2">Web Development for TechCorp</p>
            </div>
            <div className="flex-shrink-0 w-80">
                <img
                alt="Marketing Strategy for HealthPlus"
                className="w-full h-72 object-cover"
                src="https://storage.googleapis.com/a1aa/image/Pze1jvG16KUzQqWDdqPo5NoMj7WBmhpCeY26CzPVt4cKpPmTA.jpg"
                />
                <p className="text-center mt-2">Marketing Strategy for HealthPlus</p>
            </div>
            <div className="flex-shrink-0 w-80">
                <img
                alt="Financial Consulting for FinGroup"
                className="w-full h-72 object-cover"
                src="https://storage.googleapis.com/a1aa/image/AAeGnnYeHXvUt0gSZp2BHRfWIPCBPpxPMPOcN5NMWAyZSfYOB.jpg"
                />
                <p className="text-center mt-2">Financial Consulting for FinGroup</p>
            </div>
            <div className="flex-shrink-0 w-80">
                <img
                alt="UX/UI Design for Creatives Inc."
                className="w-full h-72 object-cover"
                src="https://storage.googleapis.com/a1aa/image/nqo3WOrpehx0Ki0DmxkArMAWMPhzjKM9eTbEZFONG2UIpPmTA.jpg"
                />
                <p className="text-center mt-2">UX/UI Design for Creatives Inc.</p>
            </div>
            </div>
            <button
            onClick={() => scrollBy(300)}
            className="bg-white text-gray-600 p-4 border border-gray-300 hidden md:block"
            >
            <FontAwesomeIcon icon={faArrowRight} className='slide' />  {/* Use FontAwesomeIcon */}
            </button>
        </div>
        
        </div>
        <div className="bg-lime-400 flex items-center justify-center min-h-48">
            <div className="text-center">
                <h1 className="text-3xl font-light text-black mb-8 pop">
                Get a quote for your upcoming project
                </h1>
                <NavLink to="/contact-us" className="bg-black text-lime-400 py-2 px-4 text-sm font-bold pop">
                CONTACT
                </NavLink>
            </div>
        </div>
    </>
  );
};

export default ProjectSection;
