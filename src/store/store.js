import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from './reducer/combineReducer'

const store = configureStore({
    reducer : RootReducer
})

export default store