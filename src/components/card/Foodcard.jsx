import React from 'react'



function Foodcard() {
    
  return (
    <div >
        <div className=' bg-white w-[350px] h-[450px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.1)] hover:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] transition duration-300 ease-in-out rounded-xl my-6'>
              
              <div className=' w-full'>
                 <img src="https://foodies-iota.vercel.app/static/media/pizza-3.bcc7442e66c23a92e605.jpg" alt="" />
              </div>
              <div className='px-7 py-5'>
                   <h1 className='text-black font-semibold text-2xl '>Margherita</h1>
                   <p className='py-5'>A hugely popular margherita, with a deliciously tangy single cheese topping</p>
                   <h1 class="mb-4  font-bold text-orange-600 text-2xl">₹<span class="ml-1">199</span></h1>
              </div>
              
               
        </div>
    </div>
  )
}

export default Foodcard


