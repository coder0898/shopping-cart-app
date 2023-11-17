import React, { createContext, useContext, useReducer, useState } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducer';


const Cart = createContext();

const Context = ({ children }) => {

    const productData = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        imgsrc: faker.image.urlPicsumPhotos(),
        inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    }));

    // console.log(productData);

    const [prod] = useState(productData);

    const [state, dispatch] = useReducer(cartReducer,{
        products:productData,
        cart:[]
    })

    return (
        <Cart.Provider value={{state, dispatch}}>
            {children}
        </Cart.Provider>
    )
}

export default Context;

export const CartState = ()=>{
    return useContext(Cart);
}
