import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-5xl  font-bold  text-black'>DE<span className='text-blue-700'>K</span>ATIVE<span className='text-blue-700'>.</span></h1>
      <ul className='hidden md:flex text-black font-semibold text-xl'>
        <li>
          <Link to='hero' className='p-4 hover:text-blue-700 duration-500 '>Home</Link>
          </li>
        <li>
          <Link to='Analytics' smooth={true} duration={500} className='p-4 hover:text-blue-700 duration-500 '>About</Link>
          </li>
        <li><Link to='news' className='p-4 hover:text-blue-700 duration-500 '>Newsletter</Link></li>
        <li><Link to='support' className='p-4 hover:text-blue-700 duration-500 '>Support</Link></li>
        <li><Link to='contact' className='p-4 hover:text-blue-700 duration-500 '>Contact</Link></li>
  
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose className='text-black' size={40}/> : <AiOutlineMenu className='text-black' size={40} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-100 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-black m-4'>DE<span className='text-blue-700'>K</span>KATIVE<span className='text-blue-700'>.</span></h1>
          <li className='p-4 text-black border-b border-gray-600 hover:text-blue-700'>Home</li>
          <li className='p-4 text-black border-b border-gray-600 hover:text-blue-700'>Company</li>
          <li className='p-4 hover:text-blue-700 text-black border-b border-gray-600'>Resources</li>
          <li className='p-4 hover:text-blue-700 text-black border-b border-gray-600'>About</li>
          <li className='p-4 hover:text-blue-700 text-black'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
