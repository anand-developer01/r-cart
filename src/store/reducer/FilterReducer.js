import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
    name: "filters",
    initialState: { category: [], priceRange: [0, 10000], brand: "", rating: 0, searchQuery: "" },
    reducers: {
        setCategory: (state, action) => { 
            state.category = [...state.category, action.payload]; 
        },
        setBrand: (state, action) => { state.brand = action.payload; },
        setPriceRange: (state, action) => { state.priceRange = action.payload; },
        setRating: (state, action) => { state.rating = action.payload; },
        setSearchQuery: (state, action) => { state.searchQuery = action.payload; }
    }
});

export const { setCategory, setBrand, setPriceRange, setRating, setSearchQuery } = FilterSlice.actions;
export default FilterSlice.reducer;
