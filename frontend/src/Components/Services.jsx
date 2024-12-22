import React from 'react'

const Services = () => {
  return (
    <div id="services" className="bg-green-950 lg:mh-screen lg:px-36">
      {/* Header Section */}
      <div className="py-12 flex flex-col items-center">
        <div className="flex items-center justify-center">
          <h2 className="absolute text-xl md:text-2xl text-green-500 font-bold uppercase tracking-wide">
            Services 
          </h2>
          <h1 className="uppercase text-5xl md:text-7xl lg:text-9xl font-extrabold text-stroke">
            Services
          </h1>
        </div>
        <p className="text-green-500 font-semibold mt-4 lg:mt-6 text-xs md:text-sm lg:text-base text-center">
          Explore the range of services I offer to bring your ideas to life.
        </p>
      </div>
  
      {/* Cards Section */}
      <div className="py-5 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
        {/* Card 1 */}
        <div className="bg-green-900 pt-5 rounded-lg px-4 mx-auto w-[90%] max-w-xs lg:max-w-sm h-64 text-center shadow-lg hover:scale-105 duration-300 hover:cursor-pointer overflow-hidden">
          <i className="fa-solid fa-laptop-code text-3xl text-green-500"></i>
          <h1 className="font-bold text-green-500 text-lg lg:text-xl mb-2">
            Frontend Development
          </h1>
          <p className="text-gray-400 text-sm lg:text-base line-clamp-4">
            Build modern, responsive, and user-friendly websites tailored to your
            needs. Expertise in React.js, Tailwind CSS, and Bootstrap for clean,
            efficient designs.
          </p>
        </div>
  
        {/* Card 2 */}
        <div className="bg-green-900 pt-5 rounded-lg px-4 mx-auto w-[90%] max-w-xs lg:max-w-sm h-64 text-center shadow-lg hover:scale-105 duration-300 hover:cursor-pointer overflow-hidden">
          <i className="fa-solid fa-layer-group text-3xl text-green-500"></i>
          <h1 className="font-bold text-green-500 text-lg lg:text-xl mb-2">
            Full Stack Development
          </h1>
          <p className="text-gray-400 text-sm lg:text-base line-clamp-4">
            Deliver end-to-end solutions, combining frontend and backend expertise.
            Ensure a cohesive and high-performing application experience.
          </p>
        </div>
  
        {/* Card 3 */}
        <div className="bg-green-900 pt-5 rounded-lg px-4 mx-auto w-[90%] max-w-xs lg:max-w-sm h-64 text-center shadow-lg hover:scale-105 duration-300 hover:cursor-pointer overflow-hidden">
          <i className="fa-solid fa-server text-3xl text-green-500"></i>
          <h1 className="font-bold text-green-500 text-lg lg:text-xl mb-2">
            Backend Development
          </h1>
          <p className="text-gray-400 text-sm lg:text-base line-clamp-4">
            Develop scalable and secure APIs using Node.js and Express.js. Seamless
            integration with MongoDB for data storage and management.
          </p>
        </div>
      </div>
    </div>
  );
  
}

export default Services