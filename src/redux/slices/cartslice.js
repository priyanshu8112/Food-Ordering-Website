import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
  
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload
        },
       
        addToCart: (state, action) => {
             const item=action.payload.item
             const quan=action.payload.quantity
             
             const bool = state.cart.some((data) => data.id === item.id)
             if(!bool)
             {
               
                const obj={
                    ...item,
                    quantity:quan,
                   
                 }
                 state.cart.push(obj)
             }
             else{
                const cartIndex = state.cart.findIndex((val) => val.id === item.id)
                state.cart[cartIndex].quantity = state.cart[cartIndex].quantity + quan
             }
              

        },
        removeFromCart: (state, action) => {
        
            state.cart = state.cart.filter((item) => item.id !== action.payload )

        },
       
    }
});

export const { addToCart, removeFromCart, setCart } = cartSlice.actions

export default cartSlice.reducer