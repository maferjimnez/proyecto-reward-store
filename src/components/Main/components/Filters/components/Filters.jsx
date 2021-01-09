import React from 'react';
import styled from "styled-components";
// components
import Pagination from './ProductsPagination';
import FiltersSearch from './SearchFilters';
// assets 
import ArrowRightIcon from '../assets/images/arrow-right.svg';
import variables from '../../../../../styles/variables';

const FiltersContainer = styled.div`
    padding-bottom: 25px;
    border-bottom: 1px solid ${variables.darkerGray};
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    img{
        cursor: pointer;

        :hover{
            width: 53px;
        }
    }
`;

function Filters () {
    return(
        <FiltersContainer>
            <div>
                <Pagination />
                <FiltersSearch />
            </div>
            <img src={ArrowRightIcon} alt="Next page arrow icon" />
        </FiltersContainer>        
    )
};

export default Filters;