import React from 'react'
import AboutImg from '../assets/aboutImg.jpg'

const About = () => {
  return (
    <div id='about' className='bg-green-900  lg:px-36 px-2 '>

     <div className="flex items-center justify-center pt-2 lg:pt-12">
  {/* Smaller text above */}
  <h2 className="  absolute text-xl lg:text-3xl font-bold text-green-500 uppercase tracking-wide">
    About Me
  </h2>

  {/* Main "About" text */}
  <h1 className=" text-5xl lg:text-9xl font-extrabold text-stroke">
  ABOUT
</h1>

</div>


        <div className=' flex flex-col lg:flex-row items-center pt-12 pb-4 space-y-3 lg:space-y-0 justify-center space-x-6  lg:text-left lg:space-x-24 '>
      
           <img src={AboutImg} alt='' className=' border border-gray-400 rounded-3xl w-40 lg:w-72 ' />
      

        <div className='space-y-4 lg:space-y-8 text-left '>
        <h1 className='text-2xl text-center lg:text-3xl font-bold '>Full Stack <span className='text-green-500'>Developer!</span></h1>
        <p className='lg:tracking-wider lg:leading-relaxed w-full  text-sm lg:text-base'>I am Alok, a Fullstack Developer skilled in React.js, Node.js, MongoDB, and modern UI frameworks like Tailwind CSS and Bootstrap.</p>
        <p className='lg:tracking-wider lg:leading-relaxed   text-sm lg:text-base'>I specialize in creating responsive, user-centric web applications with seamless functionality and engaging designs. Proficient in Git, I ensure efficient version control and collaborative workflows. My focus lies in crafting scalable APIs, managing databases, and deploying impactful applications. Passionate about problem-solving and continuous learning, I strive to stay at the forefront of web development.</p>
        <div className='flex items-center justify-center gap-4 '>
          <h2 className='text-green-500 text-lg lg:text-xl font-semibold'>Teckstack ||</h2>
          <i class="fa-brands fa-html5 text-2xl lg:text-5xl text-[#dd4b24]"></i>
          <i class="fa-brands fa-css3-alt text-2xl lg:text-5xl text-[#316af0]"></i>
     
          <i class="fa-brands fa-react text-2xl lg:text-5xl text-[#00d2f6]"></i>
          <i class="fa-brands fa-node-js text-2xl lg:text-5xl text-[#5a9d55]"></i>
          <img
    src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
    alt="MongoDB"
    className="w-7 h-7 lg:w-12 lg:h-12
    "
  />
        </div>
        </div>  
        
        </div>
        
        </div>
  )
}

export default About