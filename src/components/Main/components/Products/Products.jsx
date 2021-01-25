import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../../Context/UserContext';
import Product from './Product';

function Products() {
  const products = useContext(UserContext);
  console.log(products);

  return (
    <ProductsWrapper>
      {products.products.map((product) => (
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
