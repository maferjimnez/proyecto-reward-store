import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../../Context/UserContext';
// assets
import variables from '../../../../../styles/variables';
import FiltersSearch from './SearchFilters';
import { fetchProduct } from '../../../../../services/api';
// dependencies

function CategoryFilters() {
  const { allProducts, setAllProducts } = useContext(UserContext);
  const { filter, setFilter } = useContext(UserContext);
  const categories = [
    ...new Set(allProducts.map((product) => product.category)),
  ].sort();

  // useEffect(() => {
  //   fetchProduct(setAllProducts);
  // }, []);

  const handleCategoryFilter = (event) => {
    let { value } = event.target;
    const newCategory = { ...filter, category: value };
    setFilter(newCategory);
  };

  return (
    <div>
      <p>Filter by:</p>
      <select
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
      </select>
    </div>
  );
}

export default CategoryFilters;
