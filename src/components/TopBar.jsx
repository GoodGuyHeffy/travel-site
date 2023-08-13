import React from 'react';
import { AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai';
import { GiPaddles } from 'react-icons/gi';







function TopBar() {



  return (
    <div className='flex justify-between items-center px-4 py-2'>
        <div className='flex items-center'>
          <GiPaddles className='text-[var(--primary-dark)] mr-2' size={30}/>
          <h1 className='text-xl font-bold text-gray-700'>Canoe</h1>
        </div>
        <div className='flex'>
            <div className='hidden md:flex items-center px-6'>
                <AiOutlineClockCircle className='mr-2 text-[var(--primary-dark)]' size={20} />
                <p className='text-sm text-gray-700'>9AM-5PM</p>
            </div>
            <div className='hidden md:flex items-center px-6'>
                <AiFillPhone className='mr-2 text-[var(--primary-dark)]' size={20} />
                <p className='text-sm text-gray-700'>1-888-122-3421</p>
            </div>
            <button className='rounded-lg'>Get a Free Quote</button>
        </div>
    </div>
  )
}

export default TopBar;