import React from 'react';
import { CartState } from '../Context/Context';
import CardItem from './CardItem';


const ProductLists = () => {

    const {state: { products } } = CartState();

    
    return (
        <div className='card-container'>
            {
                products.map((item) => {
                    return (
                        <>
                            <CardItem  item={item}/>
                        </>
                    )
                })
            }
        </div>
    )
}

export default ProductLists;
