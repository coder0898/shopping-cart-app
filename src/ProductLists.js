import React from 'react';
import { Link } from 'react-router-dom';
import { CartState } from './Context';


const ProductLists = () => {

    const {state: { products } } = CartState();

    
    return (
        <div className='card-container'>
            {
                products.map((item) => {
                    return (
                        <>
                            <div className="card" key={item.id}>
                                <div className="cardImg">
                                    <img src={item.imgsrc} alt='404' />
                                </div>
                                <div className="cardHeader">
                                    <h3>{item.title}</h3>
                                    <p>Price: Rs {item.price}</p>
                                </div>
                                <div className="button-box">
                                <Link to={`/product/:${item.id}`}>
                                <button  >View</button>
                                </Link>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default ProductLists;
