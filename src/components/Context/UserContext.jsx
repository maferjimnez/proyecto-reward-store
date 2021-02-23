import React, { createContext, useEffect, useState } from 'react';
import { fetchUser, fetchProduct } from '../../services/api';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userData, setUserData] = useState({
    name: 'Loading...',
    points: 0,
    redeemHistory: [],
  });

  const [products, setProduct] = useState([]);

  const [allProducts, setAllProducts] = useState([]);

  const [filter, setFilter] = useState({
    category: 'all categories',
    price: 'all prices',
  });

  useEffect(() => {
    fetchUser(setUserData);
    fetchProduct(setProduct);
    fetchProduct(setAllProducts);
  }, []);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        products,
        setProduct,
        filter,
        setFilter,
        allProducts,
        setAllProducts,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
