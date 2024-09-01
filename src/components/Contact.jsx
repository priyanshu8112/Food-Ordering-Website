import React from 'react'
import { useEffect } from 'react';

function Contact() {
  
  return (
    <div >
        <div className=' flex justify-center'>
                <div className=' '>
                        <h1 className='text-4xl font-semibold'>Contact Us</h1>
                      
                </div>
        </div>
        <div className=' flex justify-center my-6'>
              <div className=' '>
                  <p className=' text-base text-slate-500 font-semibold'>Contact For Any Query</p>
                      
              </div>
        </div>
        <div className='flex justify-center gap-32 pb-10'>
             <div className='flex gap-2'>
                <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-orange-600"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path></svg></span>
                <h1 className=' font-semibold'>Some where in India</h1>
             </div>
             <div className='flex gap-2'>
               <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-orange-600"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path></svg></span>
               <h1 className='font-semibold'>+91 987654321</h1>
             </div>
             <div className='flex gap-2'>
               <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 text-orange-600"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path></svg></span>
               <h1 className=' font-semibold'>foodies@example.com</h1>
             </div>
         </div>
         <div className='flex h-full pb-20'>
             <div className='w-1/2  flex justify-center'>
                <div>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114312.36273756635!2d80.25598070352895!3d26.44730377601146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1711202837466!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-[700px] h-96 px" ></iframe>
                </div>
             </div>
             <div className='w-1/2 h-full'>
                 <div class="grid grid-cols-2 gap-3 py-3">
                    <div class="col-span-1">
                      <input type="text" placeholder="Your name" class="border border-orange-600/50 focus:border-orange-600 focus:bg-gray-50 w-80 px-5 py-2 focus:outline-none text-black rounded"/>
                    </div>
                    <div class="col-span-1">
                      <input type="text" placeholder="Your email" class="border border-orange-600/50 focus:border-prime focus:bg-gray-50 w-80 px-5 py-2 focus:outline-none text-black rounded" />
                    </div>
                    <div class="col-span-2">
                      <input type="text" placeholder="Subject" class="border border-orange-600/50 focus:border-prime focus:bg-gray-50 w-[715px] px-5 py-2 focus:outline-none text-black rounded" />
                    </div>
                    <div class="col-span-2">
                      <textarea name="" id="" placeholder="Message" class="border border-orange-600/50 focus:border-prime focus:bg-gray-50 w-[715px] px-5 py-2 focus:outline-none text-black rounded resize-none h-[150px]">
                      </textarea>
                    </div>
                    <div class="col-span-2">
                      <button class="mt-5 sm:mt-0 transition duration-300 ease-in-out bg-orange-600 w-fit flex rounded-full shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)] text-white relative px-4 py-2 sm:px-5 sm:py-3" >
                        <span class="mr-6 sm:mr-10 uppercase font-bold text-xs sm:text-sm">Submit</span>
                        <span class=" absolute -top-0.5 sm:-top-0 -right-1 p-1.5 sm:p-2.5 shadow-[0px_0px_10px_2px_rgba(254,84,50,0.3)] rounded-full bg-white text-prime/50">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 sm:w-6 sm:h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3">
                            </path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
             </div>
         </div>
    </div>
  )
}

export default Contact