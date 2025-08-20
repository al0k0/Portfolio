import React, { useState } from 'react'
import Recipe from '../assets/Recipe.png'
import Todo from '../assets/Todo.png'
import Drumkit from '../assets/drumkit.png'
import Zivaa from '../assets/zivaaa.png'
const Projects = () => {
    const MainProjects = [{
  title: "Women Fashion E-Commerce",
  Description: "A dynamic e-commerce platform for women’s fashion. Includes product catalog, cart and wishlist management, order tracking, and a responsive user interface.",
  technologies: ["React.js", "Tailwind CSS", "MongoDB", "Express.js", "Node.js", "React Router"],
  img: Zivaa, // 
  link: "https://zivaaa.netlify.app/", // 
},
      
      
      {
        title: "Recipe Finder App",
        Description: "A React-based application for searching and exploring meal recipes. Features category filtering, meal details, and an intuitive UI.",
        technologies: ["React.js", "Tailwind CSS", "Fetch API", " JavaScript (ES6)", "React ROuter"],
        img: Recipe,
        link:  "https://myrecipefinder-app.netlify.app/",
        
    },
    {
      title: "To Do List",
      Description: "A simple and interactive to-do list application that allows users to manage daily tasks efficiently. Features include adding new tasks, marking tasks as completed, and removing completed tasks. Built with clean UI and responsive design, ensuring ease of use across devices.",
      technologies: ["HTML, CSS, JavaScript (DOM Manipulation)."],
      img: Todo,
      link: "https://github.com/al0k0/ToDo-app.git"
  },
  {
    title: "Drum Kit",
    Description: "An engaging drum kit application that allows users to play drum sounds by clicking on the drum elements or pressing corresponding keyboard keys. Designed for fun and interactive learning experiences in music creation.",
    technologies: ["HTML, CSS, JavaScript (Event Listeners and Audio API)."],
    img: Drumkit,
    link: "https://github.com/al0k0/drumKit.git"
}
  ]

  const[visibleIndex, setVisibleIndex]=useState(null)
  const toggleDetails = (index) =>{
    setVisibleIndex(visibleIndex === index ? null :index)
  }
  return (
    <div id='portfolio' className='bg-green-950'>
        <div className='py-3 lg:py-12 flex justify-center items-center'>
            <h1 className='absolute text-xl lg:text-3xl text-green-500 font-bold '>My Projects</h1>
            <h1 className='text-5xl lg:text-9xl text-stroke tracking-wider uppercase font-extrabold'>Projects</h1>
        </div>

        <div className='pt-10 lg:pt-28 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-36'>
      {MainProjects.map((projects, index)=>(

      
<div key={index} className=' relative  lg:p-3 rounded-2xl  shadow-[0_0_12px_rgba(0,0,0,1)] hover:scale-105 transition-transform duration-300 cursor-pointer  '
onClick={()=> toggleDetails(index)}
>
         <img src={projects.img} className=' rounded-xl lg:h-[278px] mx-auto shadow-[0_0_6px_rgba(66,66,66,1)] ' alt="" />

         <div 
         
         className={` absolute inset-0 flex flex-col py-2 space-y-2 lg:py-10 items-center  opacity-0 hover:opacity-100 bg-green-500/70 rounded-xl duration-500 overflow-y-auto px-3 text-center 
         ${
          visibleIndex===index
          ? "opacity-100 translate-y-0 delay-20 transition-opacity duration-500 ease-in-out"
          : 'opacity-0  transition-opacity duration-500 ease-in-out'
         }
         `}>
         
           <h1 className='font-bold text-xl lg:text-3xl'>{projects.title}</h1>
           <p className=' lg:py-5 px-4 text-center font-semibold  lg:leading-none leading-none lg:text-base text-xs'>{projects.Description}</p>
           <a target="_blank" className=' bg-white p-2 px-3 rounded-full mt-3  ' href={projects.link}><i class="fa-solid fa-arrow-up-right-from-square text-base text-green-500 "></i> </a>
           
           </div>
         </div>
         ))}
        </div>
    </div>
  )
}

export default Projects