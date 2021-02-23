import React from 'react';
import styled from 'styled-components';
// assets
import variables from '../../../../../styles/variables';
// dependencies
import CategoryFilters from './CategoryFilters';

function FiltersSearch() {
  return (
    <FiltersContainer>
      <CategoryFilters />
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

export default FiltersSearch;
