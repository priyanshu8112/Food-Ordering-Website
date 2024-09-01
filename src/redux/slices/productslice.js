import { createSlice } from '@reduxjs/toolkit';
import { fooddata } from '../../assets/data/data';



const foods = {
    products: fooddata
}

const productslice = createSlice({
    name: "product",
    initialState: foods,
    reducers: {
    }
});

export const { } = productslice.actions
export default productslice.reducer;
