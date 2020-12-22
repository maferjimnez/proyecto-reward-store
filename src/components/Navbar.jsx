import React from 'react';
import styled from "styled-components";
// assets 
import variables from '../styles/variables';


const NavbarConteiner = styled.nav`
    width: 75%;
    display: flex;
    align-items: center;
`;

const NavbarList = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-around;
`;

const NavbarItems = styled.li`
    padding: 10px 15px;
    background-color: ${variables.white};
    border-radius: 20px;
    box-shadow: -5px -5px 20px ${variables.white}, 3px 4px 4px ${variables.colorShadow};
`;

function Navbar () {
    return(
        <NavbarConteiner>
            <NavbarList>
                <NavbarItems>Tienda</NavbarItems>
                <NavbarItems>Mis compras</NavbarItems>
                <NavbarItems>Canjear puntos</NavbarItems>
            </NavbarList>
        </NavbarConteiner>
    );
};

export default Navbar;