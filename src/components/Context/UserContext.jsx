import React, { createContext, useEffect, useState } from 'react';
import { fetchUser, fetchProduct } from '../../services/api';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [userData, setUserData] = useState({
        name: '',
		points: 0,
		redeemHistory: []
    });

    const [products, setProduct] = useState([]);
    
    useEffect(() => {
        fetchUser(userData, setUserData);
        fetchProduct(products, setProduct);
        console.log(userData);
     }, []);
     
    return (
        <UserContext.Provider
        value={{
            userData,
            setUserData,
            products,
            setProduct
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};