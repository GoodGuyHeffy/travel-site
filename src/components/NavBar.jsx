import React, { useState } from 'react';
import { FaTwitter, FaGooglePlusG, FaInstagram, FaFacebookF, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';




function NavBar() {

  const [nav, setNav] = useState(false);



  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
        <ul className='hidden sm:flex px-4'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/gallery"><li>Gallery</li></Link>
            <Link to="/booking"><li>Booking</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
        </ul>
        <div className='flex justify-between'>
            <FaFacebookF className='mx-4'/>
            <FaInstagram className='mx-4'/>
            <FaGooglePlusG className='mx-4'/>
            <FaTwitter className='mx-4'/>
        </div>


          {/* Mobile Icon */}
        <div className='sm:hidden z-10'>
          <FaBars onClick={handleNav} className='mr-4 cursor-pointer' size={20}/>
        </div>
        {/* Mobile Menu */}
          <div onClick={handleNav} className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute w-full text-gray-300 left-0 top-0 h-screen bg-black/90 px-4 py-7 flex flexe-col' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
            <ul className='h-full w-full text-center pt-12'>
              <Link to="/"><li className='text-2xl py-8'>Home</li></Link>
              <Link to="/gallery"><li className='text-2xl py-8'>Gallery</li></Link>
              <Link to="/booking"><li className='text-2xl py-8'>Booking</li></Link>
              <Link to="/contact"><li className='text-2xl py-8'>Contact</li></Link>
            </ul>
          </div>


    </div>
  )
}

export default NavBar;