import React from 'react';
import Typewriter from 'typewriter-effect';

import Profile from '../assets/profile.jpg';

const Home = () => {
  return (
    <div id='home' 
                                            
    className="bg-green-950 pt-16 lg:pt-32 lg:h-screen   w-full  flex justify-center items-center px-4 lg:px-36  ">
      <div className="flex flex-col-reverse   lg:flex-row items-center  lg:space-x-12">
        {/* Text Section */}
        <div className="  my-5 lg:mt-0 lg:space-y-3 space-y-1  tracking-wider text-center  lg:text-left">
        <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold">Hello, I'm</h2>
<h1 className="font-bold text-3xl md:text-4xl lg:text-6xl">Alok Soni</h1>
<h2 className="font-bold  text-xl md:text-2xl lg:text-3xl">
  And I'm a,{' '}
  <Typewriter
 
    options={{
      strings: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer'],
      autoStart: true,
      loop: true,
      delay: 75,
    }}
 
  />
</h2>

          <p className="w-full font-semibold lg:w-3/4 pt-2 text-xs md:text-sm lg:text-sm ">
            Committed to creating and enhancing engaging digital experiences. Technically skilled and an analytical thinker with a results-driven mindset.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-8 lg:pt-0 pt-5">
            <a
            target='_blank'
              href="https://www.linkedin.com/in/alok-sonig"
              className="text-green-500 border-2 border-green-500 rounded-full  w-12 h-12 flex items-center justify-center hover:bg-green-500 shadow-md hover:shadow-[0_0_12px_rgba(34,197,94,0.7)] transition duration-300 hover:text-green-900"
            >
              <i className="fab fa-linkedin-in text-base lg:text-xl"></i>
            </a>
            <a
            target='_blank'
              href="https://www.instagram.com/kafizyadaalok"
              className="text-green-500 border-2 border-green-500 rounded-full   w-12 h-12 flex items-center justify-center hover:bg-green-500 shadow-md hover:shadow-[0_0_12px_rgba(34,197,94,0.7)] transition duration-300 hover:text-green-900"
            >
              <i className="fab fa-instagram text-base lg:text-xl"></i>
            </a>
            <a
            target='_blank'
              href="https://github.com/al0k0"
              className="text-green-500 border-2 border-green-500 rounded-full   w-12 h-12 flex items-center justify-center hover:bg-green-500 shadow-md hover:shadow-[0_0_12px_rgba(34,197,94,0.7)] transition duration-300 hover:text-green-900"
            >
              <i className="fab fa-github text-base lg:text-xl"></i>
            </a>
          </div>

          {/* Hire Us Button */}
          <div className='pt-5 '>
          <a
          href='#contact'
           className="inline-block border border-green-400 cursor-pointer relative overflow-hidden text-white bg-transparent font-bold py-2 px-4 rounded-md transition-all duration-500 ease-in-out group  ">
            <span className="relative z-10 text-sm lg:text-base ">
              HIRE ME <i className="lg:fa-solid fa-arrow-right"></i>
            </span>
            <span className="absolute top-0 left-0 w-full lg:w-12   h-full bg-green-500 transform transition-all duration-500 group-hover:w-full ease-in-out  lg:group-hover:bg-green-700"></span>
          </a>
          </div>
        </div>

        {/* Image Section */}
        <div>
          <img
            src={Profile}
            alt="Alok's profile picture"
            className="rounded-full w-56 lg:w-80 border-4 border-green-500 shadow-lg animate-liquid transform transition duration-500 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
