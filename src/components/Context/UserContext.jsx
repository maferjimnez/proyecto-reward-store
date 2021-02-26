import React, { createContext, useEffect, useState } from 'react';
import {
  fetchUser,
  fetchProduct,
  fetchUserPurchases,
} from '../../services/api';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userData, setUserData] = useState({
    name: 'Loading...',
    points: 0,
    redeemHistory: [],
    cost: 0,
  });

  const [products, setProduct] = useState([]);

  const [redeemedProducts, setRedeemedProducts] = useState([]);

  const [allProducts, setAllProducts] = useState([]);

  const [filter, setFilter] = useState({
    category: 'all categories',
    price: 'all prices',
  });

  useEffect(() => {
    fetchUser(setUserData);
    fetchProduct(setProduct);
    fetchProduct(setAllProducts);
    fetchUserPurchases(setRedeemedProducts);
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
        redeemedProducts,
        setRedeemedProducts,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
