import React, { useContext } from 'react';
import styled from 'styled-components';
//assets
import Coin from '../components/Header/images/coin.svg';
import variables from '../styles/variables';

import { UserContext } from '../components/Context/UserContext';
import { fetchGetPoints } from '../services/api';

function GetCoins() {
  const { userData, setUserData } = useContext(UserContext);

  const getPoints = (amount) => {
    fetchGetPoints(amount, userData, setUserData);
  };

  return (
    <Main>
      <Title>Get more coins</Title>
      <p>Select the amount of coins you want to add</p>
      <ButtonsWrapper>
        <Button
          onClick={() => {
            getPoints(1000);
          }}
        >
          <img alt="Ilustration of a coin" src={Coin} />
          1000
        </Button>
        <Button
          onClick={() => {
            getPoints(5000);
          }}
        >
          <img alt="Ilustration of a coin" src={Coin} />
          5000
        </Button>
        <Button
          onClick={() => {
            getPoints(7500);
          }}
        >
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

const Title = styled.h1`
  color: ${variables.primaryBLue};
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
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
    margin: 0 1rem 0 -1rem;
    width: 2rem;
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
