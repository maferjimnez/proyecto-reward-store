import React from 'react';
import styled from 'styled-components';
// assets
import variables from '../../../../../styles/variables';
// dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

function FiltersSearch() {
  return (
    <FiltersContainer>
      <span>Sort by:</span>
      <MenuIcon>
        <FontAwesomeIcon icon={faEllipsisH} size="2x" color={variables.white} />
      </MenuIcon>

      <FiltersSelectors>
        <FilterOption>Most recent</FilterOption>
        <FilterOption>Lowest price</FilterOption>
        <FilterOption>Highest price</FilterOption>
      </FiltersSelectors>
    </FiltersContainer>
  );
}

const FiltersContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${variables.darkerGray};
  }
`;

const MenuIcon = styled.div`
  padding: 2px 11px;
  margin-left: 1rem;
  border-radius: 20px;
  background-color: ${variables.primaryBLue};
`;

const FiltersSelectors = styled.ul`
  width: 85%;
  display: none;
  /* justify-content: space-between; */
  list-style: none;
`;

const FilterOption = styled.li`
  padding: 14px 26px;
  border-radius: 20px;
  background-color: ${variables.gray};
  color: ${variables.darkerGray};
  cursor: pointer;

  :hover {
    background-color: ${variables.primaryBLue};
    color: ${variables.white};
  }
`;

export default FiltersSearch;
