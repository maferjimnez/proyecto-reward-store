import React from 'react';
import styled from 'styled-components';
// assets
import logo from '../images/aerolab-logo.svg';
//components
import Navbar from './Navbar';
import UserName from './Username';

function Header() {
  return (
    <HeaderConteiner>
      <LeftConteiner>
        <img src={logo} alt="Logo" />
        <Navbar />
      </LeftConteiner>
      <UserName />
    </HeaderConteiner>
  );
}

const HeaderConteiner = styled.header`
  padding: 0 1rem 0 0;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  font-size: 13px;

  @media (min-width: 500px) {
    padding: 1rem;
  }
`;

const LeftConteiner = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;

  img {
    padding: 0 1rem;
  }

  @media (min-width: 900px) {
    width: 40%;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }
`;

export default Header;
