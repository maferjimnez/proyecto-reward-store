import React from 'react';
import styled from 'styled-components';
// assets
import background from '../images/header-x2.png';
import variables from '../../../styles/variables';

function Hero() {
  return (
    <div>
      <HeroBackground
        src={background}
        alt="Imágen de auriculares con fondo color azul claro."
      />
      <HeroTitle>
        <h1>Rewards Store</h1>
      </HeroTitle>
    </div>
  );
}

const HeroBackground = styled.img`
  width: 100%;
`;

const HeroTitle = styled.div`
  position: absolute;
  top: 9rem;
  left: 2rem;
  font-size: 0.8rem;
  h1 {
    color: ${variables.white};
  }

  @media (min-width: 500px) {
    top: 12rem;
    font-size: 1rem;
  }

  @media (min-width: 900px) {
    top: 28rem;
    left: 4rem;
    font-size: 2rem;
  }
`;

export default Hero;
