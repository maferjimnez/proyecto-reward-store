import React, { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import styled from 'styled-components';
//assets
import coinIcon from '../images/coin.svg';
import variables from '../../../styles/variables';

function UserName() {
  const { userData } = useContext(UserContext);

  return (
    <UserInfo>
      <p>{userData.name}</p>
      <UserCoins>
        <span>{userData.points}</span>
        <img src={coinIcon} alt="Ilustración de moneda" />
      </UserCoins>
    </UserInfo>
  );
}

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin-right: 10px;
  }

  @media (min-width: 500px) {
  }

  @media (min-width: 900px) {
  }
`;

const UserCoins = styled.div`
  padding: 5px 10px;
  border-radius: 20px;
  background-color: ${variables.gray};
  display: flex;
  align-items: center;

  span {
    margin-right: 5px;
  }

  img {
    width: 2rem;
  }
`;

export default UserName;
