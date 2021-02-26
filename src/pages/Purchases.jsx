import React, { useContext, useEffect } from 'react';
import { UserContext } from '../components/Context/UserContext';
import PurchasedProduct from '../components/Main/components/Products/PurchasedProduct';
import { fetchUserPurchases } from '../services/api';

function Purchases() {
  const { redeemedProducts, setRedeemedProducts } = useContext(UserContext);
  const productsPurchased = redeemedProducts;

  useEffect(() => {
    fetchUserPurchases(setRedeemedProducts);
  }, []);

  return (
    <div>
      {productsPurchased.map((product) => (
        <PurchasedProduct {...product} key={product.createDate} />
      ))}
    </div>
  );
}

export default Purchases;
