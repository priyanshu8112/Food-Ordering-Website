import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartslice'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Menucard({data,key}) {
    
    const [quan, setquan] = useState(1)
    const [totalquan, settotalquan] = useState(0);

    const dispatch=useDispatch();
    function addtocarthandler(){
          
      const fooddata={
        item:data,
        quantity:quan,

        
      }
      toast.error('Item Added', {
        position: "top-right",
        autoClose: 1001,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        });
      dispatch(addToCart(fooddata))
      console.log(fooddata);
    }

    function decrease()
    {
        if(quan===1)
        {
          setquan(1)
        }
        else{
          setquan((current) => current - 1)
        }
        console.log(quan)
    }

    function increase()
    {
        if(quan===10)
        {
          setquan(10)
        }
        else{
          setquan((current) => current + 1)

        }
        console.log(quan)
    }
  
      


  return (
    <div>
        <div className=' bg-white w-[400px] h-[600px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.1)] hover:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] transition duration-300 ease-in-out rounded-xl my-6'>
              
      
              <div className=' w-full px-20'>
                 <img src={data.imgurl} alt="" />
              </div>
              <div className='px-7 py-5'>
                  <h1 className='text-black font-semibold text-2xl '>{data.name}</h1>
                  <p className='py-5'>{data.description}</p>
                  <h1 class="mb-4  font-bold text-orange-600 text-2xl">₹<span class="ml-1">199</span></h1>
              </div>
              <div className='flex px-7'>
                <div className='flex justify-center items-center rounded-[30px] shadow-[0_0_3px_0px_rgba(0,0,0,0.3)] text-prime font-semibold px-1 w-24 h-8'>
                    <button whileTap={{ scale: 0.90 }} className='p-1 bg-white  rounded-l-[30px]' onClick={decrease}>-</button>
                    <input type='text' className="w-8 px-2 text-center bg-white focus:outline-none text-orange-600" value={quan} readOnly />
                    <button whileTap={{ scale: 0.90 }} className='p-1 bg-white  rounded-r-[30px]' onClick={increase}>+</button>
                </div>
                <button className=' w-16 bg-orange-600  text-white px-3 py-1 text-sm rounded-[30px] shadow-[0_0_3px_0px_rgba(0,0,0,0.3)] font-bold flex items-center justify-center transform-none mx-7 h-8' onClick={addtocarthandler} >Add</button> 
                
              </div>
              
              
              


     
        </div>    

    </div>
  )
}

export default Menucard