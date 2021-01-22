import React from 'react';
import styled from 'styled-components';
// assets
import shopIcon from './images/buy-blue.svg';

function RedeemButton() {
  return (
    <ImgWrapper>
      <img src={shopIcon} alt="Icono de bolsa de compra" />
    </ImgWrapper>
  );
}

const ImgWrapper = styled.div`
  align-self: flex-end;
`;

export default RedeemButton;
