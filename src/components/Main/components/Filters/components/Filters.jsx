import React from 'react';
import styled from 'styled-components';
// components
import Pagination from './ProductsPagination';
import FiltersSearch from './SearchFilters';
// assets
import variables from '../../../../../styles/variables';

const FiltersContainer = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 25px;
  border-bottom: 1px solid ${variables.darkerGray};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

function Filters() {
  return (
    <FiltersContainer>
      <FiltersSearch />
      <Pagination />
    </FiltersContainer>
  );
}

export default Filters;
