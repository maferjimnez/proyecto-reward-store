import React from 'react';
import styled from "styled-components";
// components
import Filters from './Filters/components/Filters';

const MainContainer = styled.main`
    margin: 2rem 8rem;
`;

function Main () {
    return(
        <MainContainer>
            <Filters />
        </MainContainer>
    );
};

export default Main;