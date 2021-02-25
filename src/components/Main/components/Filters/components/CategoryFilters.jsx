import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../../Context/UserContext';
// assets

function CategoryFilters() {
  const { allProducts } = useContext(UserContext);
  const { filter, setFilter } = useContext(UserContext);
  const categories = [
    ...new Set(allProducts.map((product) => product.category)),
  ].sort();

  const handleCategoryFilter = (event) => {
    let { value } = event.target;
    const newCategory = { ...filter, category: value };
    setFilter(newCategory);
  };

  return (
    <FilterContainer>
      <FilterTitle>Filter by:</FilterTitle>
      <FilterSelect
        name="category"
        id="categoryFilter"
        value={filter.category}
        onChange={handleCategoryFilter}
      >
        <option value={'all categories'}>All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </FilterSelect>
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterTitle = styled.span`
  margin-bottom: 5px;
  font-size: 1rem;
`;

const FilterSelect = styled.select`
  font-size: 1rem;
  padding: 7px 10px;
  border: 1px solid #9ba4b4;
  border-radius: 5px;
  outline: none;
`;

export default CategoryFilters;
