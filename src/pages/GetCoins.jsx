import React from 'react';
import styled from 'styled-components';
import Coin from '../components/Header/images/coin.svg';
import variables from '../styles/variables';

function GetCoins() {
  return (
    <Main>
      <h1>Get more coins</h1>
      <p>Select the amount of coins you want to add</p>
      <ButtonsWrapper>
        <Button>
          <img alt="Ilustration of a coin" src={Coin} />
          1000
        </Button>
        <Button>
          <img alt="Ilustration of a coin" src={Coin} />
          5000
        </Button>
        <Button>
          <img alt="Ilustration of a coin" src={Coin} />
          7500
        </Button>
      </ButtonsWrapper>
    </Main>
  );
}

const Main = styled.main`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    background-color: ${variables.gray};
  }

  img {
    margin-left: -1rem;
  }

  @media (min-width: 800px) {
    padding: 1.5rem 7vw;
  }
`;

const ButtonsWrapper = styled.div`
  margin-top: 2rem;
  height: 35vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 800px) {
    margin-top: 3rem;
    width: 70vw;
    flex-direction: row;
    height: 3rem;
  }
`;

export default GetCoins;
