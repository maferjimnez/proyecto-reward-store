import React from 'react';
import styled from 'styled-components';

function PurchasedProduct(props) {
  return (
    <ProductContainer>
      <ProductImg src={props.img.url} alt="Il" />
      <ProductInfo>
        <div>
          <ProductName>{props.name}</ProductName>
          <ProductCategory>{props.category}</ProductCategory>
        </div>
        <div>
          <span>Price:</span>
          <ProductCategory>{props.cost} coins.</ProductCategory>
        </div>
      </ProductInfo>
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  background-color: #f1f6f9;
`;

const ProductImg = styled.img`
  width: 8rem;
  border-radius: 10px;
  @media (min-width: 100px) {
    width: 10rem;
  }
`;

const ProductInfo = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductName = styled.p`
  font-weight: 600;
`;

const ProductCategory = styled.p`
  font-size: 14px;
`;

export default PurchasedProduct;
