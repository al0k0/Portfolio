import React from 'react';
import Typewriter from 'typewriter-effect';
import Profile from '../assets/profile.png';

const Home = () => {
  return (
    <div id="home" className="bg-green-950 pt-16 lg:pt-32 lg:h-screen w-full flex justify-center items-center px-4 lg:px-36">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:space-x-12">
        
        {/* Text Section */}
        <div className="my-5 lg:mt-0 lg:space-y-3 space-y-1 tracking-wider text-center lg:text-left">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Hello, I'm</h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-6xl">Alok Soni</h1>
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
            And I'm a{' '}
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer'],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </h2>

          <p className="w-full font-semibold lg:w-3/4 pt-2 text-xs md:text-sm lg:text-sm">
            Committed to creating and enhancing engaging digital experiences. Technically skilled and an analytical thinker with a results-driven mindset.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-8 lg:pt-0 pt-5">
            {/* Add your social icons here */}
          </div>

          {/* Hire Me Button */}
          <div className="pt-5">
            <a
              href="#contact"
              className="inline-block border border-green-400 cursor-pointer relative overflow-hidden text-white bg-transparent font-bold py-2 px-4 rounded-md transition-all duration-500 ease-in-out group"
            >
              <span className="relative z-10 text-sm lg:text-base ">
                HIRE ME <i className="lg:fa-solid fa-arrow-right"></i>
              </span>
              <span className="absolute top-0 left-0 w-full lg:w-12 h-full bg-green-500 transform transition-all duration-500 group-hover:w-full ease-in-out lg:group-hover:bg-green-700"></span>
            </a>
          </div>
        </div>

        {/* Image Section with Responsive Size */}
        <div className="relative flex items-center justify-center w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 animate-bounce-slow">

          {/* Bubble Animated Background */}
          <div className="absolute w-full h-full rounded-full opacity-60 animate-bubble z-0"></div> 

          {/* Image */}
          <img
            src={Profile}
            alt="Alok's profile picture"
            className="rounded-full object-cover w-full h-full border-4 border-green-900 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
