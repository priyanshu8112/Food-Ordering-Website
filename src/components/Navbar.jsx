import React from 'react'
import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
  
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearch = () => {
      setIsSearchVisible(!isSearchVisible);
    };

  return (
     <div className='w-full bg-white'>
          <div className='flex justify-between py-5'>
                    <div className=' px-20'>
                        <h1 className=' text-orange-500 text-3xl font-bold'>Foodies</h1>
                    </div>
                    <div className='flex justify-between gap-10 py-3'>
                        <div >
                            <NavLink to="/" className={({isActive}) =>
                                        `${isActive ? "text-orange-500" : "text-slate-400"} text-xl font-semibold`
                                    }>
                                Home
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/Menu" className={({isActive}) =>
                                        `${isActive ? "text-orange-500" : "text-slate-400"} text-xl font-semibold`
                                    }>
                                Menu
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/About" className={({isActive}) =>
                                        `${isActive ? "text-orange-500" : "text-slate-400"} text-xl font-semibold`
                                    }>
                                About
                            </NavLink>
                        </div>
                        <div>
                            <NavLink to="/Contact" className={({isActive}) =>
                                        `${isActive ? "text-orange-500" : "text-slate-400"} text-xl font-semibold`
                                    }>
                                Contact
                            </NavLink>
                        </div>
                    </div>
                    <div className='flex justify-between gap-8 pr-20 py-5'>
                
                        <div onClick={toggleSearch}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 hover:text-prime cursor-pointer text-black/70">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z">
                                    </path>
                                </svg>
                                
                        </div>
                        <NavLink to="/Cart"> 
                                <div>   

                                        
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 hover:text-prime text-black/70">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 
                                        60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z">
                                        </path>
                                    </svg>
                                    <span className='absolute bg-orange-600 rounded-full w-[20px] h-[20px] px-1 -my-8 ml-4 text-center text-white font-bold'>
                                        0
                                    </span>

                                </div>
                        </NavLink>
                        <NavLink to="/Login">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 hover:text-prime text-black/70">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 
                                        0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z">
                                    </path>
                                </svg>
                        </NavLink>
                        
                    </div>

          </div>
          {isSearchVisible && (
                
                <div className=" bg-slate-300 w-full h-22 flex justify-center relative origin-bottom translate-y-1 " >
                                <div>
                                    <div className=' pr-28'>
                                    <input type="search" class=" w-[600px] h-14  text-base font-bold text-black md:text-lg md:pl-8 focus:outline-none placeholder:text-black 
                                    placeholder:opacity-60 rounded-2xl my-3 shadow " placeholder="Search for 🍔 🍕 🍟" value="" />
                                    <button className='rounded-xl h-10 w-24 bg-orange-600 my-6 -mx-28 text-white font-bold'>Search</button>
                                    </div>
                                
                                </div>
                </div>

            )}


          
          
         
     </div>
           
  )
}

export default Navbar;
