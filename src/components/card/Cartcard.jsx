import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/slices/cartslice'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cartcard({data}) {

  const dispatch=useDispatch()
  
  function removefromcarthandler(){
    
    toast.error('Item Removed', {
      position: "top-right",
      autoClose: 1001,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      });
    dispatch(removeFromCart(data.id))
    console.log(data);
  }
  return (
    <div>
        <div className='flex justify-between  w-2/3 mx-56 gap-5'>
          <div>
            <img className=' w-16 py-1 ' src={data.imgurl} alt="" />
          </div>
          <div className='py-5 w-2 mr-20'>
             <h1 className=' font-bold '>{data.name}</h1>
          </div>
          <div className='py-5'>
            <h1 className=' text-orange-600 text-xl font-bold'>₹ {data.price} </h1>
          </div>
          <div className='py-5'>
            <h1 className=' text-orange-600 text-xl font-semibold'>Qty-{data.quantity} </h1>
          </div>
          
          <div className='py-5'> 
            <h1 className=' text-orange-600 text-xl font-bold'>₹ {data.price*data.quantity} </h1>
          </div>
           <div className='py-5' onClick={removefromcarthandler} >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6 m-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
           </div>
          
        </div>
        <hr class=" h-px w-2/3 my-8 border-0 bg-orange-300 mx-60"/>

    </div>
  ) 
}

export default Cartcard