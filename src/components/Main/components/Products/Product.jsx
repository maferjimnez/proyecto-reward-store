import React from 'react';
import styled from 'styled-components';
// components
import RedeemButton from './RedeemButton';
//assets
import variables from '../../../../styles/variables';

function Product(props) {
  const { name, img, category } = props;

  return (
    <ProductContainer>
      <RedeemButton />
      <img src={img.url} alt={`Imagen de ${props.name}`} />
      <ProductTextInfo>
        <ProductName>{name}</ProductName>
        <ProductCategory>{category}</ProductCategory>
      </ProductTextInfo>
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 2px;
  box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.54);
  display: flex;
  flex-direction: column;
`;

const ProductTextInfo = styled.div`
  border-top: 1px solid ${variables.darkerGray};
  padding-top: 10px;
`;

const ProductName = styled.p`
  font-size: 18px;
`;

const ProductCategory = styled.p`
  color: ${variables.darkerGray};
`;

export default Product;
