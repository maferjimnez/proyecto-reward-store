import React from 'react';
import styled from "styled-components";
// assets 
import variables from '../../../styles/variables';

const NavbarConteiner = styled.nav`
    width: 80%;
    display: flex;
    align-items: center;

    @media (max-width: 768px){
        width: 75%
    }
`;

const NavbarList = styled.ul`
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-around;
`;

const NavbarItems = styled.li`
    padding: 6px 7px;
    cursor: pointer;

    :hover{
        border-bottom: solid ${variables.secondayBlue};
        font-weight: 600;
    }
    @media (max-width: 768px){
        padding: 8px 7px;
    }
`;

function Navbar () {
    return(
        <NavbarConteiner>
            <NavbarList>
                <NavbarItems>Store</NavbarItems>
                <NavbarItems>Purchases</NavbarItems>
                <NavbarItems>Get more coins</NavbarItems>
            </NavbarList>
        </NavbarConteiner>
    );
};

export default Navbar;