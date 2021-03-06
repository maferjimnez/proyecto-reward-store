import React, { useState } from 'react';
import styled from 'styled-components';
// assets
import variables from '../../../styles/variables';
// dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
        <NavbarLink exact to="/">
          <NavbarItems onClick={displayMenu}>Store</NavbarItems>
        </NavbarLink>
        <NavbarLink to="purchases">
          <NavbarItems onClick={displayMenu}>Purchases</NavbarItems>
        </NavbarLink>
        <NavbarLink to="getcoins">
          <NavbarItems onClick={displayMenu}>Get more coins</NavbarItems>
        </NavbarLink>
      </NavbarList>
    </NavbarConteiner>
  );
}

export default Navbar;

const NavbarLink = styled(Link)`
  text-decoration: none;
`;

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
  z-index: 1000;
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
  :hover {
    color: ${variables.white};
    padding: 0.5rem 1rem;
    border-radius: 20px;
    background-color: ${variables.primaryBLue};
  }
  @media (min-width: 500px) {
    padding: 0.5rem 1rem;
    font-size: initial;
    padding: 0;
  }
`;
