import React, { } from 'react';
import './product.css';
import { useDispatch, useSelector } from 'react-redux';

const ExampleCart = ({ products }) => {
    const filters = useSelector(state => state.filters);

    // const filteredProducts = products.filter(p => 
    //     (!filters.category || p.category === filters.category) &&
    //     (!filters.brand || p.brand === filters.brand) &&
    //     (p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]) &&
    //     (p.rating >= filters.rating)
    // );

    const filteredProducts = products.filter(p => 
        (!filters.category || filters.category.includes(p.category)) 
    );

    console.log(filters)
    return (
        <>
            <section className="section-products">
                <div className="container">
                    <div className="row">
                        {filteredProducts.map((p, i) => (
                            <div key={i} className="col-md-6 col-lg-4 col-xl-3">
                                <div id="product-4" className="single-product">
                                    <div className="part-1">
                                        <img src={p.image} style={{ width: '100%' }} />
                                    </div>
                                    <div className="part-2">
                                        <h3 className="product-title">{p.title}</h3>
                                        <h4 className="product-price">${p.price}</h4>
                                    </div>
                                    <div className="part-2">
                                        <button>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
};

export default ExampleCart;