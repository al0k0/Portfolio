import React, { useState } from 'react';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Home'); // Track the active tab
const[isMenuOpen, setIsMenuOpen]= useState(false)
  return (
    <header>
      <nav role='navigation' aria-label='Main Navigation' className="flex justify-between items-center px-5 lg:px-36  border-b border-green-500 fixed top-0 w-full z-50 bg-green-950 h-14 md:h-14 lg:h-16">
        {/* Logo */}
        <div className="text-xl lg:text-2xl font-bold">My Portfolio</div>

         {/* Hamburger Menu */}
         <div className=' block lg:hidden'>
          <a onClick={()=> setIsMenuOpen(!isMenuOpen)}
            className='focus:outline-none text-white'
            >
          <i class="fa-solid fa-bars"></i>
          </a>
         </div>

        {/* Navigation Links */}
        <ul className={`lg:flex gap-10 text-lg mt-3 lg:mt-0   ${isMenuOpen ? 'block  absolute top-11 bg-green-950 left-0 w-full space-y-2 pl-5 rounded-sm py-3  text-base font-semibold' : 'hidden'}
       
        `}>
          <li className='w-full lg:w-auto' >
            <a href='#home'
              className={`block  ${
                activeTab === 'Home' ? 'text-green-500 ' : 'text-white'
              } lg:border-none border-b border-white hover:border-green-500 lg:hover:scale-90 transform duration-300`}
              onClick={() => setActiveTab('Home')}
            >
              Home
            </a >
          </li>
          <li className='w-full lg:w-auto'>
            <a
            href='#about'
              className={`block ${
                activeTab === 'About' ? 'text-green-500' : 'text-white'
              } lg:border-none border-b border-white hover:border-green-500 hover:cursor-pointer lg:hover:scale-90 transition duration-300`}
              onClick={() => setActiveTab('About')}
            >
              About
            </a>
          </li>
          <li className='w-full lg:w-auto'>
            <a
            href='#services'
              className={`block ${
                activeTab === 'services' ? 'text-green-500' : 'text-white'
              } lg:border-none border-b border-white hover:border-green-500 hover:cursor-pointer lg:hover:scale-90 transition duration-300`}
              onClick={() => setActiveTab('services')}
            >
              Services
            </a>
          </li>
          <li className='w-full lg:w-auto'>
            <a
            href='#skills'
              className={` block ${
                activeTab === 'skills' ? 'text-green-500' : 'text-white'
              } lg:border-none border-b border-white hover:border-green-500 lg:hover:scale-90 transition duration-300  hover:cursor-pointer`}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </a>
          </li>
          <li className='w-fulll lg:w-auto'>
            <a
            href='#portfolio'
              className={` block ${
                activeTab === 'portfolio' ? 'text-green-500' : 'text-white'
              } lg:border-none border-b border-white hover:border-green-500 lg:hover:scale-90 transition duration-300 hover:cursor-pointer`}
              onClick={() => setActiveTab('portfolio')}
            >
              Portfolio
            </a>
          </li>
          <li className='w-full lg:w-auto'>
            <a
            href='#contact'
              className={`block ${
                activeTab === 'Contact' ? 'text-green-500' : 'text-white'
              } lg:border-none border-b border-white hover:border-green-500 lg:hover:scale-90 transition-all duration-30  hover:cursor-pointer`}
              onClick={() => setActiveTab('Contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
