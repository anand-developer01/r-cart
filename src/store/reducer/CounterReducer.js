import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for simulating an API call
export const fetchCount = createAsyncThunk('counter/fetchCount', async (amount) => {
    // Simulating a network request
    const response = await new Promise((resolve) => {
        setTimeout(() => resolve({ data: amount }), 1000);
    });
    return response.data; // This will be the payload of the fulfilled action
});

// Create the counter slice
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        loading: false,
        error: null,
    },
    reducers: {
        increment: (state) => {
            state.value += 1; // Mutative update
        },
        decrement: (state) => {
            state.value -= 1; // Mutative update
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCount.pending, (state) => {
                state.loading = true; // Set loading state
                state.error = null; // Reset error
            })
            .addCase(fetchCount.fulfilled, (state, action) => {
                state.loading = false; // Reset loading state
                state.value += action.payload; // Update value with fetched data
            })
            .addCase(fetchCount.rejected, (state, action) => {
                state.loading = false; // Reset loading state
                state.error = action.error.message; // Capture error message
            })
            // Using addMatcher to respond to all increment actions
            .addMatcher(
                (action) => action.type.endsWith('/increment'), // Matcher function
                (state) => {
                    // Logic to execute when increment actions are dispatched
                    console.log('Increment action dispatched');
                }
            );
    },
});

// Export actions
export const { increment, decrement } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;