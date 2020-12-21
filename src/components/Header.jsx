import React from 'react';
import styled from "styled-components";

const HeaderConteiner = styled.header`
background-color: blue;
`; 

function Header () {
    return(
        <HeaderConteiner>
            <p>hola pobando un dos un dos</p> 
        </HeaderConteiner>
    );
};


export default Header;