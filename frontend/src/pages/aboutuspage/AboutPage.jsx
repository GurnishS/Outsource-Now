// src/components/AboutUs.js

import React from 'react'; // Replace with your image path
import { NavLink } from 'react-router-dom';
import BannerStrip from '../../components/bannerstrip/BannerStrip';
const AboutPage = () => {
    const TeamImage = "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600";
    return (
        <section className="bg-gray-100 pt-24" id="about">
            <div className="container mx-auto px-6 mb-10">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    About Us
                </h2>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img
                            src={TeamImage}
                            alt="Our Team"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-10">
                        <p className="text-lg text-gray-700 mb-4">
                            Welcome to <b>Outsource Now</b>, your go-to solution for all freelancing needs. We specialize in providing top-notch services across various domains, ensuring that your projects are handled by experts.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            Our team consists of skilled professionals who are passionate about delivering quality work. Whether you need web development, graphic design, content writing, or digital marketing, we have the right talent for you.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            At <b>Outsource Now</b>, we believe in building long-term relationships with our clients. Our commitment to excellence and customer satisfaction sets us apart in the freelancing industry.
                        </p>
                        <p className="text-lg text-gray-700">
                            Join us today and let’s bring your ideas to life!
                        </p>
                    </div>
                </div>
            </div>
            <BannerStrip message="Get an estimate for your upcoming project" />
        </section>
    );
};

export default AboutPage;