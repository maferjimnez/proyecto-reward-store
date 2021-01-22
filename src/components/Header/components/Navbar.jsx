import React, { useState } from 'react';
import styled from 'styled-components';
// assets
import variables from '../../../styles/variables';
// dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const displayMenu = () => setMenuOpen(!menuOpen);

  return (
    <NavbarConteiner>
      <BurgerMenuIcon onClick={displayMenu}>
        {menuOpen ? (
          <FontAwesomeIcon
            icon={faTimes}
            size="2x"
            color={variables.secondayBlue}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            color={variables.secondayBlue}
          />
        )}
      </BurgerMenuIcon>
      <NavbarList menuOpen={menuOpen}>
        <NavbarItems>Store</NavbarItems>
        <NavbarItems>Purchases</NavbarItems>
        <NavbarItems>Get more coins</NavbarItems>
      </NavbarList>
    </NavbarConteiner>
  );
}

const NavbarConteiner = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    width: 80%;
  }
`;

const BurgerMenuIcon = styled.div`
  width: fit-content;
  cursor: pointer;
  margin: 8px;

  @media (min-width: 900px) {
    display: none;
  }
`;

const NavbarList = styled.ul`
  width: 100%;
  height: 91vh;
  padding-top: 2rem;
  position: absolute;
  top: 10vh;
  left: 0;
  background-color: ${variables.secondayBlue};
  list-style: none;
  display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
  justify-content: space-around;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 500px) {
  }

  @media (min-width: 900px) {
    padding: 0;
    position: initial;
    background-color: initial;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
  }
`;

const NavbarItems = styled.li`
  padding: 15px 7px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;

  :hover {
    border-bottom: solid ${variables.secondayBlue};
    font-weight: 600;
  }
  @media (min-width: 500px) {
    padding: 8px 7px;
    font-size: initial;
    padding: 0;
  }
`;

export default Navbar;
