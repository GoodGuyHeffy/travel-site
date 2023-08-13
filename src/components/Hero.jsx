import React from 'react';

function Hero() {
  return (
    <div className='w-full h-[90vh]'>
        <img className='object-cover w-full h-full ' src="https://images.unsplash.com/photo-1603273904583-bf5d25d9efa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80" alt="/"/>
        <div className='max-w-[1140px] m-auto '>
            <div className='absolute top-[40%] w-full  md:-[50%] max-w-[600px] flex flex-col text-white p-4'>
                <h1 className='text-4xl font-bold'>Find Your Next Trip</h1>
                <h2 className='text-4xl py-4 italic'>With <span className="pl-2 font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)]">Canoe</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae odit et praesentium expedita 
                    tenetur? Sunt error suscipit possimus at reprehenderit..</p>
            </div>
        </div>
    </div>
  )
}

export default Hero;