import React from 'react';
import { Link } from 'react-router-dom';
import { CartState } from '../Context/Context';
import Card from './Card';


const ProductLists = () => {

    const {state: { products } } = CartState();

    
    return (
        <div className='card-container'>
            {
                products.map((item) => {
                    return (
                        <>
                            <Card item={item}/>
                        </>
                    )
                })
            }
        </div>
    )
}

export default ProductLists;
