import React, { useContext, useState } from 'react';
import { UserContext } from '../../../Context/UserContext';
import styled from 'styled-components';
// components
import RedeemButton from './RedeemButton';
import Hover from './Hover';
//assets
import variables from '../../../../styles/variables';

function Product(props) {
  const { name, img, category, cost, _id } = props;
  const { userData, setUserData } = useContext(UserContext);
  const userPoints = userData.points;
  const [productHover, setProductHover] = useState(false);

  return (
    <ProductContainer
      onMouseLeave={() => setProductHover(false)}
      onMouseEnter={() => setProductHover(true)}
    >
      {productHover && (
        <Hover
          productName={name}
          productCost={cost}
          productId={_id}
          userPoints={userData.points}
          setUserData={setUserData}
          userData={userData}
        />
      )}
      <RedeemButton productCost={cost} userPoints={userPoints} />
      <ProductImg src={img.url} alt={`Imagen de ${props.name}`} />
      <ProductTextInfo>
        <ProductCategory>{category}</ProductCategory>
        <ProductName>{name}</ProductName>
      </ProductTextInfo>
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  position: relative;
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

const ProductImg = styled.img`
  position: relative;
  bottom: 2rem;
`;

const ProductName = styled.p`
  font-size: 18px;
`;

const ProductCategory = styled.p`
  color: ${variables.darkerGray};
`;

export default Product;
