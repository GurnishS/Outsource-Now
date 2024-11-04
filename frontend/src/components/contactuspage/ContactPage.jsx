import React from 'react';
import { FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const ContactPage = () => {
    const ContactImage = "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=4004"; // Replace with your image URL

    return (
        <section className="bg-gray-100 pt-24" id="contact">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Contact Us
                </h2>
                <div className="flex flex-col md:flex-row items-center">
                    {/* Image on the left side */}
                    <div className="md:w-1/2 mb-8 md:mb-0 max-h-64 overflow-hidden object-cover md:max-h-full rounded-lg">
                        <img
                            src={ContactImage}
                            alt="Contact"
                            className="rounded-lg shadow-lg object-cover"
                            style={{ height: "460px" }}
                        />
                    </div>
                    {/* Form in the center */}
                    <div className="w-full md:w-1/2 md:pl-10">
                        <form className="bg-white p-8 shadow-lg rounded-lg">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your name"
                                    className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your email"
                                    className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    placeholder="Your message"
                                    rows="5"
                                    className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-black text-lime-400 py-2 px-4 text-sm font-bold pop hover:bg-gray-900 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/* Social media icons at the bottom */}
            <div className="flex justify-center space-x-4 mt-6">
                <a
                    href="mailto:outsourcenow.firm@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-lime-500 transition duration-300"
                >
                    <FaEnvelope size={32} />
                </a>
                <a
                    href="https://www.instagram.com/outsourcenow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-pink-500 transition duration-300"
                >
                    <FaInstagram size={32} />
                </a>
                <a
                    href="https://www.facebook.com/outsourcenow"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-700 transition duration-300"
                >
                    <FaFacebook size={32} />
                </a>
            </div>
            <div className="bg-lime-400 flex items-center justify-center min-h-36 md:min-h-48 mt-10">
                <div className="text-center">
                    <h1 className="text-xl md:text-3xl font-light text-black mb-4 md:mb-8 pop">
                        We look forward to connecting with you!
                    </h1>
                    <NavLink to="/about" className="bg-black text-lime-400 py-2 px-4 text-sm font-bold pop">
                        LEARN MORE
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
