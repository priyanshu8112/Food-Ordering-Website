import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartslice";
import productslice from "./slices/productslice";


const Store = configureStore({
    reducer: {
        
        cart: cartSlice,
        product:productslice
      
    }
})

export default Store