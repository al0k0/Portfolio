import React from 'react'

const Services = () => {
  return (
    <div id='services' className='bg-green-950  lg:h-screen lg:px-36'>
    <div className="py-12 flex flex-col items-center">
  {/* Heading Section */}
  <div className=" flex  items-center justify-center">
    {/* Smaller text (on top of the larger text) */}
    <h2 className="absolute text-xl text-green-500 font-bold uppercase tracking-wide">
      Services
    </h2>

    {/* Main "Services" text */}
    
    <h1 className=" uppercase text-5xl lg:text-9xl font-extrabold text-stroke">
      Services
    </h1>
  </div>

  {/* Subtitle */}
  <p className="text-green-500 font-semibold mt-4 lg:mt-6 text-xs lg:text-base text-center">
    Explore the range of services I offer to bring your ideas to life.
  </p>
</div>

<div className=' py-5  lg:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-20 '>
<div className='bg-green-900 rounded-lg p-3  lg:p-8 text-center shadow-lg hover:scale-105 duration-300 hover:cursor-pointer'>
<i class="fa-solid fa-laptop-code text-2xl lg:text-3xl text-green-500"></i>
<h1 className='font-bold text-green-500 text-md lg:text-2xl mb-2 lg:mb-6'>Frontend Development</h1>

<p className='text-gray-400 text-xs  lg:text-base'>Build modern, responsive, and user-friendly websites tailored to your needs, Expertise in React.js, Tailwind CSS, and Bootstrap for clean, efficient designs.</p>

</div>

<div className='bg-green-900 rounded-lg p-3  lg:p-8 text-center shadow-lg hover:scale-105 duration-300 hover:cursor-pointer'>
<i class="fa-solid fa-layer-group text-2xl lg:text-3xl text-green-500"></i>
<h1 className='font-bold text-green-500 text-md lg:text-2xl mb-2 lg:mb-6'>Full Stack Development</h1>

<p className='text-gray-400 text-xs  lg:text-base'>Deliver end-to-end solutions, combining frontend and backend expertise.
Ensure a cohesive and high-performing application experience.</p>

</div>
<div className='bg-green-900 rounded-lg p-3  lg:p-8 text-center shadow-lg hover:scale-105 duration-300 hover:cursor-pointer'>
<i class="fa-solid fa-server text-2xl lg:text-3xl text-green-500"></i>
<h1 className='font-bold text-green-500 text-md lg:text-2xl mb-2 lg:mb-6'>Backend Development</h1>

<p className='text-gray-400 text-xs  lg:text-base'>Develop scalable and secure APIs using Node.js and Express.js.
Seamless integration with MongoDB for data storage and management.</p>

</div>
</div>


    </div>
  )
}

export default Services