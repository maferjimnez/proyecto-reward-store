import React from 'react';
import styled from "styled-components";
// assets
import logo from '../assets/aerolab-logo.svg';
import coinIcon from '../assets/icons/coin.svg';
import variables from '../styles/variables';
//components
import Navbar from './Navbar';

const HeaderConteiner = styled.header`
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;

    @media (min-width: 320px) {
        padding: 1rem;
        flex-direction: column;
    };
`;

const LeftConteiner = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;

`; 

const UserInfo = styled.div`
    width: 18%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const UserCoins = styled.div`
    padding: 5px 10px;
    border-radius: 20px;
    background-color: ${variables.gray};
    display: flex;
    align-items: center;
`;

function Header () {
    return(
        <HeaderConteiner>
            <LeftConteiner>
                <img src={logo} alt="Logo"/>
                <Navbar />            
            </LeftConteiner>
            <UserInfo>
                <p>Larry Capinga</p>
                <UserCoins>
                    <span>6000</span>
                    <img src={coinIcon} alt="Ícono de moneda"/>
                </UserCoins>
            </UserInfo>
        </HeaderConteiner>
    );
};

export default Header;