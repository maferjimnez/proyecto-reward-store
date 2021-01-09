import React from 'react';
import styled from 'styled-components';
// assets
import variables from '../../../../../styles/variables';

const FiltersContainer = styled.div`
    width: 85vh;
    padding-left: 15px;

    span{
        color: ${variables.darkerGray}; 
    }
`;

const FiltersSelectors = styled.ul`
    width: 85%;
    display: flex;
    justify-content: space-between;
    list-style: none;
`;

const FilterOption = styled.li`
    padding: 14px 26px;
    border-radius: 20px;
    background-color: ${variables.gray};
    color: ${variables.darkerGray};
    cursor: pointer;

    :hover{
        background-color: ${variables.primaryBLue};
        color: ${variables.white};
    }
`;

function FiltersSearch () {
    return(
        <FiltersContainer>
            <span>Sort by:</span>
            <FiltersSelectors>
                <FilterOption>Most recent</FilterOption>
                <FilterOption>Lowest price</FilterOption>
                <FilterOption>Highest price</FilterOption>
            </FiltersSelectors>
        </FiltersContainer>
    )
};

export default FiltersSearch;