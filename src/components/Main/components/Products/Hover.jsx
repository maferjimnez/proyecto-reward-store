import React from 'react';
import styled from 'styled-components';
import { fetchRedeemProduct } from '../../../../services/api';
// assets
import coin from '../../../Header/images/coin.svg';
import whiteBag from './images/buy-white.svg';
import variables from '../../../../styles/variables';

function Hover(props) {
  const { productCost, productId, userPoints, userData, setUserData } = props;

  function redeemProduct(id, cost, userPoints) {
    fetchRedeemProduct(id);
    const userNewPoints = userPoints - cost;
    console.log(userData);
    setUserData({ ...userData, points: userNewPoints });
  }

  return (
    <HoverContainer>
      <HoverImg src={whiteBag} alt="Ilustration of a shopping bag" />
      <HoverInfo>
        <HoverText>
          {productCost}
          <Coin src={coin} alt="Ilustration of a coin" />
        </HoverText>
        <HoverButton
          onClick={() => redeemProduct(productId, productCost, userPoints)}
        >
          Redeem now.
        </HoverButton>
      </HoverInfo>
    </HoverContainer>
  );
}

const HoverContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgb(22 194 239 / 62%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const HoverImg = styled.img`
  margin: 0.9rem 0.3rem;
  width: 3.5rem;
  align-self: flex-end;
`;

const HoverInfo = styled.div`
  width: 90%;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HoverButton = styled.button`
  width: 100%;
  padding: 1rem;
  outline: none;
  border: none;
  background-color: ${variables.gray};
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  :hover {
    box-shadow: 1px 2px 6px -2px rgba(0, 0, 0, 0.54);
  }
`;

const Coin = styled.img`
  width: 2rem;
  margin-left: 1rem;
`;

const HoverText = styled.p`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: ${variables.white};
  font-size: 2rem;
  font-weight: 300;
`;

export default Hover;
