import React from 'react';
import styled from "styled-components";
// assets
import logo from '../images/aerolab-logo.svg';
//components
import Navbar from './Navbar';
import UserName from './Username'

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
    width: 30%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px){
        width: 100%;
    }
`; 

function Header () {
    return(
        <HeaderConteiner>
            <LeftConteiner>
                <img src={logo} alt="Logo"/>
                <Navbar />            
            </LeftConteiner>
            <UserName />
        </HeaderConteiner>
    );
};

export default Header;