import React from 'react'
import { useState } from 'react';
import { fooddata } from '../assets/data/data.js';
import Menucard from './card/Menucard.jsx';
import { useDispatch, useSelector } from 'react-redux'

function Menu() {

  const [selectedFilter, setSelectedFilter] = useState('All');
  
 
  

  const filteredProducts = selectedFilter === 'All'
    ? fooddata
    : fooddata.filter(items => items.category === selectedFilter);

    

  return (
    <div>
          <div className=' flex justify-center'>
                <div className=' '>
                        <h1 className='text-4xl font-semibold'>Our Menu</h1>
                      
                </div>
          </div>
          <div className=' flex justify-center my-6'>
              <div className=' '>
                  <p className=' text-base text-slate-500 font-semibold'>All our dishes in one place</p>
                      
              </div>
          </div>
          <div>
              <div className='flex justify-center items-center gap-10'>
                 <div class="font-black px-4 py-3 flex flex-col justify-center items-center activeclass cursor-pointer *
                  " onClick={() => setSelectedFilter('All')}>
                    <img src="https://i.pinimg.com/564x/a3/57/0c/a3570c72dbfa426314567e68be888750.jpg" alt="pizza" class="w-7 sm:w-10 opacity-100 pointer-events-none filter saturate-200 "/>
                      <p class="mt-3 text-xs sm:text-sm ">All</p>
                  </div>
                  <div class="font-black px-4 py-3 flex flex-col justify-center items-center activeclass cursor-pointer" onClick={() => setSelectedFilter('Pizza')}>
                    <img src="https://i.pinimg.com/564x/a3/57/0c/a3570c72dbfa426314567e68be888750.jpg" alt="pizza" class="w-7 sm:w-10 opacity-100 pointer-events-none filter saturate-200"/>
                      <p class="mt-3 text-xs sm:text-sm ">Pizza</p>
                  </div>
                  <div class="font-black px-4 py-3 flex flex-col justify-center items-center activeclass cursor-pointer" onClick={() => setSelectedFilter('Burger')}>
                    <img src="https://i.pinimg.com/564x/f9/b7/12/f9b7122f6acc51a79b399ea749fb56e4.jpg" alt="pizza" class="w-7 sm:w-10 opacity-100 pointer-events-none filter saturate-200"/>
                      <p class="mt-3 text-xs sm:text-sm ">Burger</p>
                  </div>
                  <div class="font-black px-4 py-3 flex flex-col justify-center items-center activeclass cursor-pointer" onClick={() => setSelectedFilter('Pasta')}>
                    <img src="https://i.pinimg.com/564x/28/c4/fb/28c4fb705db11284a50613776956d98c.jpg" alt="pizza" class="w-7 sm:w-10 opacity-100 pointer-events-none filter saturate-200"/>
                      <p class="mt-3 text-xs sm:text-sm ">Pasta</p>
                  </div>
                  <div class="font-black px-4 py-3 flex flex-col justify-center items-center activeclass cursor-pointer" onClick={() => setSelectedFilter('French Fries')}>
                    <img src="https://i.pinimg.com/564x/b7/6f/cc/b76fcc9a467f7dbee905c5824f1be84a.jpg" alt="pizza" class="w-7 sm:w-10 opacity-100 pointer-events-none filter saturate-200"/>
                      <p class="mt-3 text-xs sm:text-sm ">French Fries</p>
                  </div>
                  <div class="font-black px-4 py-3 flex flex-col justify-center items-center activeclass cursor-pointer" onClick={() => setSelectedFilter('Drinks')}>
                    <img src="https://i.pinimg.com/564x/7a/56/92/7a5692cd34c7ea833fe602b5114350b1.jpg" alt="pizza" class="w-7 sm:w-10 opacity-100 pointer-events-none filter saturate-200"/>
                      <p class="mt-3 text-xs sm:text-sm ">Drinks</p>
                  </div>
              </div>
          </div>
          <div className='my-16'>
               
                <div className='row grid grid-cols-3 mx-32 gap-10'>
                      {filteredProducts.map(item => (
                            <div className='flex'>
                                  <Menucard data={item} key={item.id}/>               
                                                      
                            </div>
                        ))}
                  </div>
                  
                
          </div>
          

         
    </div>
  )
}

export default Menu