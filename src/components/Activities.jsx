import React from 'react';



function Activities() {

  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-130px]'>
        <div className='relative p-4'>
           <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-3xl'>Resorts</h3>
           <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        </div>

        <div className='relative p-4'>
           <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-3xl'>Cruises</h3>
           <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src="https://images.unsplash.com/photo-1554254464-7046778097bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="/" />
        </div>

        <div className='relative p-4'>
           <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold text-3xl'>Excursions</h3>
           <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' src="https://images.pexels.com/photos/3793366/pexels-photo-3793366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
        </div>
    </div>
  )
}

export default Activities;