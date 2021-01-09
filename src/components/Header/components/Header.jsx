import React from 'react';
import styled from "styled-components";
// assets
import logo from '../images/aerolab-logo.svg';
import coinIcon from '../images/coin.svg';
import variables from '../../../styles/variables';
//components
import Navbar from './Navbar';

const HeaderConteiner = styled.header`
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        height: 18vh;
        padding: 1rem;
        flex-direction: column;
        font-size: 13px;
    };
`;

const LeftConteiner = styled.div`
    width: 35%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px){
        width: 100%;
    }
`; 

const UserInfo = styled.div`
    width: 16%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px){
        width: 100%;
        border-top: 1px solid ${variables.darkerGray};
        padding-top: 6px;
        justify-content: flex-end;

        p{
            margin-right: 15px;
        }
    }
`;

const UserCoins = styled.div`
    padding: 5px 10px;
    border-radius: 20px;
    background-color: ${variables.gray};
    display: flex;
    align-items: center;

    span{
        margin-right: 5px;
    }
`;

function Header () {
    return(
        <HeaderConteiner>
            <LeftConteiner>
                <img src={logo} alt="Logo"/>
                <Navbar />            
            </LeftConteiner>
            <UserInfo>
                <p>User</p>
                <UserCoins>
                    <span>6000</span>
                    <img src={coinIcon} alt="Ícono de moneda"/>
                </UserCoins>
            </UserInfo>
        </HeaderConteiner>
    );
};

export default Header;