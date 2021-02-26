import React from 'react';
import styled from 'styled-components';
// assets
import coin from '../../../Header/images/coin.svg';
import blueBag from './images/buy-blue.svg';

function RedeemButton(props) {
  const { productCost, userPoints } = props;

  function displayRedeemInfo(userPoints, productCost) {
    if (productCost > userPoints) {
      return (
        <RedeemInfo>
          <RedeemText>You need {productCost - userPoints}</RedeemText>
          <RedeemImg src={coin} alt="Ilustration of a coin" />
        </RedeemInfo>
      );
    } else {
      return <img src={blueBag} alt="Icono de bolsa de compra" />;
    }
  }

  return (
    <RedeemContainer>
      {displayRedeemInfo(userPoints, productCost)}
    </RedeemContainer>
  );
}

const RedeemContainer = styled.div`
  z-index: 10;
  display: flex;
  justify-content: flex-end;
`;

const RedeemInfo = styled.div`
  padding: 7px 15px;
  border-radius: 30px;
  background-color: rgb(84 87 90 / 50%);
  display: flex;
  align-items: center;
`;

const RedeemText = styled.span`
  margin-right: 10px;
  color: white;
`;

const RedeemImg = styled.img`
  width: 2rem;
`;

export default RedeemButton;
