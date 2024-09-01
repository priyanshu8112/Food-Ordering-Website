import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
        <div className=' flex justify-center'>
            <div className=' '>
                    <h1 className='text-4xl font-semibold'>About Us</h1>
                  
            </div>
        </div>
        <div className=' flex justify-center my-6'>
            <div className=' '>
                    <p className=' text-lg text-slate-600'>Foods From Local and Quality Ingredients</p>
                  
            </div>
        </div>
        <div className=' flex gird grid-cols-2 mx-5 justify-center w-full min-h-full gap-36'>
             
             <div className=' w-[500px] h-[700px] my-6'>
                    <img src="https://foodies-iota.vercel.app/static/media/ban-1.e3c5b3c0f3a63e4b2275.jpg" alt=""
                    className=' h-full w-[700px] mx-1 -my-3'
                     />
             </div>
             <div className=' w-[600px] h-[550px]'>  
                      <div className=' flex flex-col justify-center'>
                          
                          <p class="w-full text-xs font-semibold  text-gray-400 sm:my-10 md:w-5/6 md:leading-7 sm:text-sm md:text-base px-4">
                            It is established fact that reader will be distracted by the readable content of a page when looking at its layout. It is 
                            established fact that reader will be distracted by the readable content of a page when looking at its layout.
                          </p>
                          <p class="w-full text-xs font-semibold leading-4 text-gray-400 sm:my-10 md:w-5/6 md:leading-7 sm:text-sm md:text-base px-4">
                            It is established fact that reader will be distracted by the readable content of a page when looking at its layout. It is 
                            established fact that reader will be distracted by the readable content of a page when looking at its layout.
                          </p>
                          <p class="w-full text-xs font-semibold leading-4 text-gray-400 sm:my-10 md:w-5/6 md:leading-7 sm:text-sm md:text-base px-4">
                            It is established fact that reader will be distracted by the readable content of a page when looking at its layout. It is 
                            established fact that reader will be distracted by the readable content of a page when looking at its layout.
                          </p>

                          
                          
                      </div>
             </div>

        </div>
                
    </div>
  )
}

export default About