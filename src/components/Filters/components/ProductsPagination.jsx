import React from 'react';
import styled from "styled-components";
// assets
import variables from '../../../styles/variables';

const PaginationContainer = styled.div`
    width: 23%;

    p{
        border-right: 1px solid ${variables.darkerGray};
        padding: 9px 20px 13px 0;
    }
`;

function Pagination () {
    return(
        <PaginationContainer>
            <p><span>16</span> of 32 products</p>
        </PaginationContainer>
    );
};

export default Pagination;
