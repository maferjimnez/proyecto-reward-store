import React from 'react';
import styled from 'styled-components';
// components
import CategoryFilters from './CategoryFilters';
// assets
import variables from '../../../../../styles/variables';

const FiltersContainer = styled.div`
  padding-bottom: 2rem;
  border-bottom: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  @media (min-width: 800px) {
    align-items: flex-start;
  }
`;

function Filters() {
  return (
    <FiltersContainer>
      <CategoryFilters />
    </FiltersContainer>
  );
}

export default Filters;
