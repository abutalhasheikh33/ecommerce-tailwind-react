import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    products:[],
    product:{},
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
    reducers:{
        findAProduct:(state,action)=>{
            
                
                const product = state.products.find((product)=>product.id===action.payload);
                state.product = product;
           
            
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;
           })
           builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
           })
           builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isError = true;
           })
    }

})


export const {findAProduct} =  productSlice.actions;

export default productSlice.reducer