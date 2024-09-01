import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Cartcard from './card/Cartcard';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart} = useSelector((state) => state.cart)

  console.log(cart)

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      
      <div className='flex flex-col items-center justify-center py-3 mt-10 sm:py-5'>
        <h1 className='text-2xl font-bold sm:text-4xl'>
          Shopping Cart
        </h1>
        <p className='my-4 font-semibold text-gray-500'>Your added foods</p>
      </div>
      
      {
        cart.length>0 ? 
                    <div className='flex justify-between'>
                    <div className="col-span-12 lg:col-span-8 w-2/3">
                            {
                              cart.map((item) => {
                                return (
                                  <>
                                    <Cartcard data={item} />
                                  

                                  </>
                                )
                              })
                            }

                    </div>
                    <div class="col-span-12 lg:col-span-4 bg-gray-100 shadow rounded-3xl p-5 relative h-[300px] w-[450px] mr-20 mb-10">
                      <div class="relative h-full p-5 bg-white shadow rounded-3xl">
                        <div class="flex items-center justify-between my-1">
                          <div class="">
                            <h1 class="font-semibold">Subtotal</h1>
                          </div>
                          <div class="">
                            <h1 class="mb-10 text-base font-bold md:text-lg text-prime md:mb-0">₹<span class="ml-1">{calculateTotal()}</span></h1>
                          </div>
                        </div>
                        <hr class="h-0.5 my-5 bg-prime"/>
                      <div class="flex items-center justify-between my-1">
                        <div class="">
                          <h1 class="text-xl font-bold ">Total</h1>
                        </div>
                        <div class="">
                          <h1 class="mb-10 text-base font-bold md:text-xl text-prime md:mb-0">₹<span class="ml-1">{calculateTotal()}</span></h1>
                        </div>
                      </div>
                      <div class="absolute left-0 w-full px-5 bottom-5">
                        <a class="mt-2 sm:mt-0 transition duration-300 ease-in-out bg-orange-600 w-full flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-3 py-1 sm:px-5 sm:py-3" href="/checkout">
                          <span class="mx-auto text-xs font-medium uppercase sm:font-bold sm:text-sm">Proceed to Checkout</span>
                          <span class=" absolute -top-0.5 sm:-top-0 -right-0.5 sm:-right-1 p-1 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 sm:w-6 sm:h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                            </svg>
                          </span>
                        </a>
                    </div>
                  </div>
                </div>
              </div>

              :
              <div className='flex flex-col items-center justify-center col-span-12 p-5 sm:p-10'>
              
              <h1 className='text-xl sm:text-2xl font-bold text-gray-400 text-center '>Your cart is Empty, Let's Add some</h1>
              <Link to={`/menu`} whileHover={{ scale: 1.05 }} className='my-10 transition duration-300 ease-in-out bg-orange-600 w-fit flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-3 py-1 '>
                <span className='text-xs font-medium uppercase sm:font-bold h-6 px-10 py-1'>Our Menu</span>
                
              </Link>
            </div>

      }
      
      
        
    </div>
  )
}

export default Cart