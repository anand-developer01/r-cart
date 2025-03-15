import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, fetchCount } from '../../store/reducer/CounterReducer';

const ExampleCart = () => {
    const dispatch = useDispatch();
    const { value, loading, error } = useSelector((state) => state.counter); // Select counter state

    const handleFetchCount = () => {
        const amount = 5; // Example amount to fetch
        dispatch(fetchCount(amount)); // Dispatch async thunk
    };

    return (
        <div>
            <h1>Count: {value}</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={handleFetchCount}>Fetch Count</button>
        </div>
    );
};

export default ExampleCart;