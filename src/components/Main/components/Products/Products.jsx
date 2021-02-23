import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchProduct } from '../../../../services/api';
import { UserContext } from '../../../Context/UserContext';
import Product from './Product';

function Products() {
  const { products, setProduct } = useContext(UserContext);
  const { allProducts, setAllProducts } = useContext(UserContext);
  const { filter } = useContext(UserContext);

  const filterByCategory = () => {
    if (filter.category == 'all categories') {
      setProduct(allProducts);
    } else {
      const productsFilteredByCategory = allProducts.filter(
        (product) => filter.category == product.category
      );
      setProduct(productsFilteredByCategory);
    }
  };

  useEffect(() => {
    filterByCategory();
  }, [filter]);

  return (
    <ProductsWrapper>
      {products.map((product) => (
        <Product {...product} key={product._id} />
      ))}
      ;
    </ProductsWrapper>
  );
}

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export default Products;
