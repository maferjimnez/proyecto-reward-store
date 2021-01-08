import React from 'react';
import styled from "styled-components";
// assets
import background from '../assets/header-x2.png';
import variables from '../styles/variables';


const HeroConteiner = styled.div`
    height: 65vh;
    background: url(${background}) no-repeat;
    background-size: cover;
    display: flex;
`;

const HeroTitle = styled.div`
    margin: 0 0 4rem 7rem; 
    font-size: 2rem;
    align-self: flex-end;

    h1{
        color: ${variables.white};
    }
`;

function Hero () {
    return(
        <HeroConteiner>
            <HeroTitle>
                <h1>Electronics</h1>
            </HeroTitle>
        </HeroConteiner>
    );
};

export default Hero;