import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../store/reducer/ProductsReducer';
import PrductsList from './ProductsList'
import FilterPanel from '../filter-products/FilterPanel';

const ExampleCart = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products)
    const categories = useSelector(state => state.products.categories)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    // console.log(categories)
    return (
        <div>
            <div className='d-flex'>
                <FilterPanel categories={categories} />
                <PrductsList products={products} />
            </div>
        </div>
    );
};

export default ExampleCart;