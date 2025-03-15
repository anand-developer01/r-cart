import { combineReducers } from 'redux';
import Counter from './CounterReducer'
import ProductsReducer from './ProductsReducer'
import FilterReducer from './FilterReducer'
export const RootReducer = combineReducers({
    counter : Counter,
    products : ProductsReducer,
    filters : FilterReducer
})