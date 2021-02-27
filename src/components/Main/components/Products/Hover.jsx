import React, { useState } from 'react';
import styled from 'styled-components';
import { fetchRedeemProduct } from '../../../../services/api';
// assets
import coin from '../../../Header/images/coin.svg';
import whiteBag from './images/buy-white.svg';
import variables from '../../../../styles/variables';
import RedeemModal from './RedeemModal';

function Hover(props) {
  const {
    productCost,
    productId,
    userPoints,
    userData,
    setUserData,
    productName,
  } = props;
  const [successRedeem, setSuccessRedeem] = useState(false);

  function redeemProduct(id, cost, userPoints) {
    const redeemModalStatus = fetchRedeemProduct(id);
    const userNewPoints = userPoints - cost;
    setUserData({ ...userData, points: userNewPoints });
    setSuccessRedeem(redeemModalStatus);
  }

  function displayHover(productCost, userPoints) {
    if (productCost > userPoints) {
      return (
        <HoverInfoNoPoints>
          <HoverText>
            {productCost}
            <Coin src={coin} alt="Ilustration of a coin" />
          </HoverText>
          <HoverRedeem>
            <RedeemPoints>You need {productCost - userPoints}</RedeemPoints>
          </HoverRedeem>
        </HoverInfoNoPoints>
      );
    } else {
      return (
        <>
          <HoverImg src={whiteBag} alt="Ilustration of a shopping bag" />
          <HoverInfo>
            <HoverText>
              {productCost}
              <Coin src={coin} alt="Ilustration of a coin" />
            </HoverText>

            <RedeemModal
              redeemProduct={redeemProduct}
              productId={productId}
              productName={productName}
              productCost={productCost}
              userPoints={userPoints}
              successRedeem={successRedeem}
            />
          </HoverInfo>
        </>
      );
    }
  }

  return (
    <HoverContainer>{displayHover(productCost, userPoints)}</HoverContainer>
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

const HoverInfoNoPoints = styled.div`
  margin-top: 53%;
  width: 90%;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const HoverRedeem = styled.div`
  padding: 1rem;
  width: 100%;
  border-radius: 30px;
  background-color: rgb(84 87 90 / 80%);
  display: flex;
  justify-content: center;
`;

const RedeemPoints = styled.p`
  color: white;
`;

export default Hover;
