import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [{
        category
            :
            "men's clothing",
        description
            :
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id
            :
            1,
        image
            :
            "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price
            :
            109.95,
        rating
            :
            { rate: 3.9, count: 120 },
        title
            :
            "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    }],
    product: {},
    isLoading: false,
    isError: false

}
export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
})

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        findAProduct: (state, action) => {


            const product = state.products.find((product) => product.id === action.payload);
            state.product = product;


        }
    },
    extraReducers: (builder) => {
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


export const { findAProduct } = productSlice.actions;

export default productSlice.reducer