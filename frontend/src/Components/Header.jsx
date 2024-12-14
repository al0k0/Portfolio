import React, { useState } from 'react';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Home'); // Track the active tab
const[isMenuOpen, setIsMenuOpen]= useState(false)
  return (
    <header>
      <nav role='navigation' aria-label='Main Navigation' className="flex justify-between px-5 lg:px-36 p-2 lg:p-5 border-b border-green-500 fixed top-0 w-full z-10 bg-green-950 lg:h-16">
        {/* Logo */}
        <div className="text-xl lg:text-2xl font-bold">My Portfolio</div>

         {/* Hamburger Menu */}
         <div className=' block md:hidden'>
          <a onClick={()=> setIsMenuOpen(!isMenuOpen)}
            className='focus:outline-none text-white'
            >
          <i class="fa-solid fa-bars"></i>
          </a>
         </div>

        {/* Navigation Links */}
        <ul className={`lg:flex gap-10 text-lg ${isMenuOpen ? 'block  absolute top-11 bg-green-950 left-0 w-full space-y-1 pl-5 pt-2 text-base font-semibold' : 'hidden'}
       
        `}>
          <li >
            <a href='#home'
              className={`${
                activeTab === 'Home' ? 'text-green-500' : 'text-white'
              } hover:scale-90 transform duration-300`}
              onClick={() => setActiveTab('Home')}
            >
              Home
            </a >
          </li>
          <li>
            <a
            href='#about'
              className={`${
                activeTab === 'About' ? 'text-green-500' : 'text-white'
              } hover:cursor-pointer hover:scale-90 transition duration-300 inline-block`}
              onClick={() => setActiveTab('About')}
            >
              About
            </a>
          </li>
          <li>
            <a
            href='#services'
              className={`${
                activeTab === 'services' ? 'text-green-500' : 'text-white'
              } hover:cursor-pointer hover:scale-90 transition duration-300 inline-block`}
              onClick={() => setActiveTab('services')}
            >
              Services
            </a>
          </li>
          <li>
            <a
            href='#skills'
              className={`${
                activeTab === 'skills' ? 'text-green-500' : 'text-white'
              } hover:scale-90 transition duration-300 inline-block hover:cursor-p`}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a
            href='#portfolio'
              className={`${
                activeTab === 'portfolio' ? 'text-green-500' : 'text-white'
              } hover:scale-90 transition duration-300 inline-block hover:cursor-p`}
              onClick={() => setActiveTab('portfolio')}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
            href='#contact'
              className={`${
                activeTab === 'Contact' ? 'text-green-500' : 'text-white'
              } hover:scale-90 transition-all duration-30 inline-block hover:cursor-p`}
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
