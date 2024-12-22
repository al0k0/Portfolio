import React from 'react'

const Footer = () => {

const scrollTop =()=>{
    window.scrollTo({
        top:0,
        behavior: "smooth",
    })
}
  return (
    <div className='bg-green-950 py-4  flex justify-between items-center px-6 lg:px-36 '>
<p className='text-gray-300 lg:text-base md:text-sm text-xs text-center'>copyright © 2024 by Alok | All Rights Reserved.</p>
<button
  onClick={scrollTop}
  className=" w-7 h-7 md:w-9 md:h-9 lg:w-12 lg:h-12  bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800  rounded-full shadow-lg transition duration-300"
>
  <i className="fa-solid fa-angle-up text-white "></i>
</button>

    </div>
  )
}

export default Footer