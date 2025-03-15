import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('cart/products', async () => {
    try {
        const productRes = await fetch(`http://localhost:8081/products`)
        const productData = await productRes.json()
        return productData
    }
    catch (err) {
        console.log(err)
    }
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        categories: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.loading = false
                const uCats = [...new Set(action.payload.map(e => e.category))]
                state.categories = uCats
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message
            })
    }

})

export default productSlice.reducer