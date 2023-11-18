import React from 'react';
import CardItem from './CardItem';


const ProductLists = ({ transformProducts}) => {


    return (
        <div className='ProductContainer'>
            {
             transformProducts().map((item) => {
                    return (
                        <>
                            <CardItem  item={item} key={item.id}/>
                        </>
                    )
                })
            }
        </div>
    )
}

export default ProductLists;
