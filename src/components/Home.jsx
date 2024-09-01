import React from 'react'
import { NavLink } from 'react-router-dom'
import Foodcard from './card/Foodcard' 
import Footer from './Footer'

function Home() {
  return (
   
    <div className=' text-black w-full min-h-full'>
          <div className=' flex gird grid-cols-2 mx-5 justify-center '>
             <div className=' w-[600px] h-[550px] my-6'>  
                      <div className=' flex flex-col justify-center'>
                          <h1 className=' text-7xl font-semibold px-4 py-3'> Choosing Quality Food</h1>
                          <p class="w-full py-6 text-xs font-semibold leading-4 text-gray-400 sm:my-10 md:w-5/6 md:leading-7 sm:text-sm md:text-base px-4">
                            It is established fact that reader will be distracted by the readable content of a page when looking at its layout. It is 
                            established fact that reader will be distracted by the readable content of a page when looking at its layout.
                          </p>
                          <NavLink to='/Menu'>
                                <button class=" bg-orange-600 remt-5 sm:mt-0 transition duration-300 ease-in-out  w-fit flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-4 mx-4 py-2 sm:px-5 sm:py-3">
                                  <span class="mr-6 text-xs font-bold uppercase sm:mr-10 sm:text-sm">Discover menu</span>
                                  <span class=" absolute -top-[1px] sm:-top-0 -right-1 p-1.5 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 sm:w-6 sm:h-6">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                                    </svg>
                                  </span>
                                </button>
                          </NavLink>
                          
                      </div>
             </div>
             <div className=' w-1/2 h-[550px] my-6'>
                    <img src="https://i.pinimg.com/564x/72/05/ba/7205ba0a0ee50d1f1fc39f765921f8d7.jpg" alt=""
                    className=' h-full w-[700px] mx-1 -my-3'
                     />
             </div>
          </div>
          <div className=' w-full min-h-full'>
               <div className=' flex justify-center py-3'>
                   <h1 className=' text-4xl font-bold  '>Our Menu</h1>
                   
               </div>
            
                <div className=' grid grid-cols-3 my-14 mx-40'>
                          
                      <Foodcard />
                      <Foodcard/>
                      <Foodcard/>
                </div>
          </div>
          <div className=' flex gird grid-cols-2 mx-5 justify-center w-full min-h-full gap-36'>
             
             <div className=' w-[500px] h-[700px] my-6'>
                    <img src="https://foodies-iota.vercel.app/static/media/ban-1.e3c5b3c0f3a63e4b2275.jpg" alt=""
                    className=' h-full w-[700px] mx-1 -my-3'
                     />
             </div>
             <div className=' w-[600px] h-[550px] py-40'>  
                      <div className=' flex flex-col justify-center'>
                          <h1 className=' text-4xl font-semibold px-4  my-16'> About Foodies</h1>
                          <p class="w-full text-xs font-semibold leading-4 text-gray-400 sm:my-10 md:w-5/6 md:leading-7 sm:text-sm md:text-base px-4">
                            It is established fact that reader will be distracted by the readable content of a page when looking at its layout. It is 
                            established fact that reader will be distracted by the readable content of a page when looking at its layout.
                          </p>
                          <NavLink to='/About'>
                                <button class=" bg-orange-600 remt-5 sm:mt-0 transition duration-300 ease-in-out  w-fit flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-4 mx-4 py-2 sm:px-5 sm:py-3">
                                  <span class="mr-6 text-xs font-bold uppercase sm:mr-10 sm:text-sm">Learn More</span>
                                  <span class=" absolute -top-[1px] sm:-top-0 -right-1 p-1.5 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 sm:w-6 sm:h-6">
                                      <path stroke-linec ap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                                    </svg>
                                  </span>
                                </button>
                          </NavLink>
                          
                      </div>
             </div>

          </div>
          <div className=' w-full min-h-full'>
               <div className=' flex justify-center py-3'>
                   <h1 className=' text-4xl font-bold  '>Our Menu</h1>
                   
               </div>
            
                <div className=' grid grid-cols-3 my-14 mx-40'>
                          
                      <Foodcard />
                      <Foodcard/>
                      <Foodcard/>
                      <Foodcard />
                      <Foodcard/>
                      <Foodcard/>
                </div>
                
                <div className='flex justify-center mb-10'>
                        <div>
                                <NavLink to='/Menu'>
                                                  <button class=" bg-orange-600 remt-5 sm:mt-0 transition duration-300 ease-in-out  w-fit flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-4 mx-4 py-2 sm:px-5 sm:py-3">
                                                    <span class="mr-6 text-xs font-bold uppercase sm:mr-10 sm:text-sm">Explore More</span>
                                                    <span class=" absolute -top-[1px] sm:-top-0 -right-1 p-1.5 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50">
                                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 sm:w-6 sm:h-6">
                                                        <path stroke-linec ap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                                                      </svg>
                                                    </span>
                                                  </button>
                                </NavLink>
                        </div>
                </div>
                
                
          </div>

          
    </div>
    
   
    
  )
}

export default Home

