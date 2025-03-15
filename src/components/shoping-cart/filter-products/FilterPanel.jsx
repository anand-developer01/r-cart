import React, { } from 'react';
import './filter.css'
import { useDispatch } from 'react-redux';
import { setCategory } from '../../../store/reducer/FilterReducer'
const FilterPanel = ({ categories }) => {

    const dispatch = useDispatch()
    const updateFilters = (checked, categoryFilter) => {
        // console.log(checked, categoryFilter)
        dispatch(setCategory(categoryFilter))
    }

    return (
        <>
            <div className="filter-main-box">
                {categories.map((elm, index) => {
                    return (
                        <div className="form-check ms-2" key={index}>
                            <label className="form-check-label">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    onChange={(e) => updateFilters(e.target.checked, elm)}
                                />
                                {elm}
                            </label>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default FilterPanel;









// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { setCategory, setPriceRange, toggleBrand, setRating, setSearchQuery, resetFilters } from "../../../store/reducer/FilterReducer";

// const FilterPanel = ({ categories }) => {
//     const dispatch = useDispatch();
//     const filters = useSelector(state => state.filter); // Get current filter values

//     return (
//         <div className="filter-main-box">
//             {/* Category Filter */}
//             <h5>Category</h5>
//             <select >
//                 <option value="">All Categories</option>
//                 {categories.map((category, index) => (
//                     <option key={index} value={category}>{category}</option>
//                 ))}
//             </select>

//             {/* Price Range Filter */}
//             <h5>Price Range</h5>
//             <input
//                 type="range"
//                 min="0"
//                 max="10000"
//                 step="100"
//                 // value={filters.priceRange[0]}
//                 // onChange={(e) => dispatch(setPriceRange([Number(e.target.value), filters.priceRange[1]]))}
//             />
//             <input
//                 type="range"
//                 min="0"
//                 max="10000"
//                 step="100"
//                 // value={filters.priceRange[1]}
//                 // onChange={(e) => dispatch(setPriceRange([filters.priceRange[0], Number(e.target.value)]))}
//             />
//             {/* <p>₹{filters.priceRange[0]} - ₹{filters.priceRange[1]}</p> */}

//             {/* Brand Filter */}
//             <h5>Brands</h5>
//             {["Apple", "Samsung", "Sony"].map((brand, index) => (
//                 <div key={index}>
//                     <input
//                         type="checkbox"
//                         // checked={filters.brands.includes(brand)}
//                         // onChange={() => dispatch(toggleBrand(brand))}
//                     />
//                     {brand}
//                 </div>
//             ))}

//             {/* Rating Filter */}
//             <h5>Rating</h5>
//             <input
//                 type="number"
//                 min="0"
//                 max="5"
//                 step="0.5"
//                 // value={filters.rating}
//                 // onChange={(e) => dispatch(setRating(Number(e.target.value)))}
//             />

//             {/* Search Filter */}
//             <h5>Search</h5>
//             <input
//                 type="text"
//                 placeholder="Search products..."
//                 // value={filters.searchQuery}
//                 // onChange={(e) => dispatch(setSearchQuery(e.target.value))}
//             />

//             {/* Reset Filters Button */}
//             {/* <button onClick={() => dispatch(resetFilters())}>Reset Filters</button> */}
//         </div>
//     );
// };

// export default FilterPanel;
