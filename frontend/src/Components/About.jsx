import React from 'react';
import AboutImg from '../assets/aboutImg.jpeg';
import ProfileImg from '../assets/profile.png';

const About = () => {
  return (
    <div className='bg-green-900 text-white'>
      {/* Header Section */}
      <div className='relative py-8 lg:py-12 flex flex-col items-center text-center'>
        <h1 className='text-lg sm:text-xl lg:text-3xl text-green-400 font-bold z-10 absolute bottom-11'>About Me</h1>
        <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-stroke tracking-wider uppercase font-extrabold'>About</h1>
      </div>

      {/* Main Section */}
      <section id="about" className="flex flex-col lg:flex-row items-center gap-20 px-4 sm:px-8 lg:px-32 py-16 sm:py-20">
        
        {/* Image Section */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={AboutImg}
              alt="About"
              className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-[500px] rounded-2xl"
            />
          </div>

          {/* Floating circle image */}
          <div className="circle absolute -bottom-8 left-1/2 transform -translate-x-1/2  lg:bottom-[60px] lg:left-[500px]">
            <div className="about-img">
              <img src={ProfileImg} alt="Profile" />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="max-w-xl space-y-4 text-center lg:text-left px-2 sm:px-4">
          <h3 className="text-3xl sm:text-4xl md:text-4xl lg:font-bold uppercase">
            FullStack <span className="text-green-400">Developer!</span>
          </h3>

          <p className="text-sm sm:text-base">
            I am Alok, a passionate Fullstack developer on a journey to build seamless and user-friendly digital experiences using the MERN stack.
          </p>

          <p className="text-sm sm:text-base">
            I create engaging, responsive web applications by blending creativity with functionality. My focus is on delivering intuitive user experiences. I constantly stay updated with the latest web technologies. By following best practices, I ensure efficient and scalable solutions. I am passionate about building applications that meet user needs. My goal is to craft seamless, high-performance websites that provide real value.
          </p>

          <div className="flex items-center justify-center lg:justify-end gap-4 flex-wrap pt-2 text-green-400 text-lg font-semibold">
            <span>Techstack ||</span>
            <i className="fa-brands fa-html5 text-orange-500 text-3xl sm:text-4xl"></i>
            <i className="fa-brands fa-css3-alt text-blue-500 text-3xl sm:text-4xl"></i>
            <i className="fa-brands fa-react text-cyan-400 text-3xl sm:text-4xl"></i>
            <i className="fa-brands fa-node-js text-green-600 text-3xl sm:text-4xl"></i>
            <img
              src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
              alt="MongoDB"
              className="w-8 sm:w-10"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
