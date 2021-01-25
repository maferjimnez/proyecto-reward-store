import React from 'react';
import styled from 'styled-components';
// assets
import blueBag from './images/buy-blue.svg';
import whiteBag from './images/buy-white.svg';

function RedeemButton() {
  return (
    <ImgWrapper>
      <img src={blueBag} alt="Icono de bolsa de compra" />
    </ImgWrapper>
  );
}

const ImgWrapper = styled.div`
  align-self: flex-end;
`;

export default RedeemButton;
