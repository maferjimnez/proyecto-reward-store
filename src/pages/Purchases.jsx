import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
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
    <PurchasesContainer>
      <h1>Purchases:</h1>
      <ProductsWrapper>
        {productsPurchased.map((product) => (
          <PurchasedProduct {...product} key={product.createDate} />
        ))}
      </ProductsWrapper>
    </PurchasesContainer>
  );
}

const PurchasesContainer = styled.div`
  margin: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductsWrapper = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  @media (min-width: 500px) {
    width: 80%;
  }

  @media (min-width: 700px) {
    width: 60%;
  }

  @media (min-width: 1000px) {
    width: 30%;
  }
`;

export default Purchases;
