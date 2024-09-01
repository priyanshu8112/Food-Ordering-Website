import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Footer() {
  return (
        <div class="bg-gray-100 p-5 rounded-t-[200px]">
          <div class="mt-10 flex justify-center items-center flex-col">
            <h1 class="text-2xl sm:text-4xl font-bold">Get in Touch</h1>
            <p class="w-[95%] sm:w-2/3 md:w-1/2 mx-auto text-center text-sm my-5 text-gray-400 font-semibold sm:leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius est voluptatibus, pariatur voluptates ea architecto numquam hic nobis sunt aperiam.</p>
          </div>
          <div className='flex justify-center gap-10'>
             <div>
                <img className='w-6' src="https://i.pinimg.com/564x/bc/bc/7a/bcbc7a2aec20d1dd5d06b59daa85833e.jpg" alt="" />
             </div>
             <div>
                <img className='w-6' src="https://i.pinimg.com/564x/19/42/d5/1942d5deb0f788e6228054cd92767ff6.jpg" alt="" />
             </div>
             <div>
                <img className='w-6' src="https://i.pinimg.com/564x/6e/ad/91/6ead912ceb43c93b8e189d1eb802845f.jpg" alt="" />
             </div>
             <div>
                <img className='w-6' src="https://i.pinimg.com/564x/45/20/dd/4520ddfc56208707045c56232e946f7f.jpg" alt="" />
             </div>
             <div>
                <img className='w-6' src="https://i.pinimg.com/564x/cc/31/6f/cc316f97197528e5e26e613a93ab16a4.jpg" alt="" />
             </div>
          </div>
          <div className='flex justify-around  my-10'>
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
          <div className=' flex justify-around py-10 '>
              <div>
                 <h1 className=' text-4xl text-orange-600 font-bold'>Foodies</h1>
                 <p className='py-5'>It is established fact that reader will be <br /> distracted by the readable content of a page <br />when looking at its layout.</p>
              </div>
              <div>
                <h1 className='text-2xl text-orange-600 font-bold'>Useful Links</h1>
                 <ul className='py-3'>
                  <li>
                      <NavLink to="/" className=' text-xm font-semibold'>
                                        Home
                        </NavLink>
                  </li>
                  <li>
                      <NavLink to="/Menu" className=' text-xm font-semibold '>
                                        Menu
                        </NavLink>
                  </li>
                  <li>
                      <NavLink to="/About" className=' text-xm font-semibold '>
                                        About
                        </NavLink>
                  </li>
                  <li>
                      <NavLink to="/Contact" className=' text-xm   font-semibold '>
                                        Contact
                        </NavLink>
                  </li>
                 </ul>
                
              </div>


          </div>

        </div>
            
  )
}

export default Footer