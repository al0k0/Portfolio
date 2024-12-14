import React, { useEffect, useState, useRef } from "react";


const Skills = () => {
  const SkillSectionRef = useRef(null)
  const [animate, setAnimate]= useState(false)

  const skills = [
{name: "HTML", percentage: "98%"},
{name: "CSS", percentage: "80%"},
{name: "JavaScript", percentage: "70%"},
{name: "Node.js", percentage: "60%"},
{name: "MongoDB", percentage: "60%"},
{name: "React", percentage: "70%"},
{name: "Express.js", percentage: "60%"},
{name: "Git", percentage: "60%"},
  ]
  useEffect(()=>{
const observer = new IntersectionObserver(
  (enteries)=>{
    if (enteries[0].isIntersecting) {
      setAnimate(true)
    }
  },
  { threshold: 0.5}
)
if (SkillSectionRef.current) {
    observer.observe(SkillSectionRef.current)
  
}
return()=> observer.disconnect()

  },[])
  
  return(
<div id="skills" className="bg-green-900 lg:h-screen py-12"
ref={SkillSectionRef}
>
<div className="flex justify-center items-center ">
  <h1 className="absolute text-xl lg:text-3xl text-green-500 font-bold uppercase">Skill Set</h1>
  <h1 className="text-5xl lg:text-9xl text-stroke track-wider font-extrabold uppercase">My Skills</h1>
</div>

<div className="space-y-4 lg:space-y-6 mt-10  lg:px-36">
{skills.map((skill, index)=>(
<div key={index} className="relative">


  <div className=" bg-gray-400 w-full h-6 lg:h-7 rounded-2xl">
  <div className={` bg-green-500   h-6 lg:h-7 rounded-2xl  border transition-all duration-1000  ${ animate ? "w-full" : "w-0" }`}
  style={{width: animate ? skill.percentage : "0%"}}
  >
    
    </div>
 
  </div>
  
  <div className=" font-bold flex justify-between items-center absolute inset-0 px-2">
  <span className="text-sm lg:text-base">{skill.name}</span>
  <span className="text-sm lg:text-base">{skill.percentage}</span>

</div>
</div>
))}
</div>
</div>
  )

}

export default Skills;
