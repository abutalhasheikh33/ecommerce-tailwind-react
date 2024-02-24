import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    products:[],
    isLoading:false,
    isError:false
    
}
export const fetchProducts = createAsyncThunk("fetchProducts",async ()=>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
})

export const productSlice = createSlice({
    name:'product',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;
           })
           builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
           })
           builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isError = true;
           })
    }

})




export default productSlice.reducer