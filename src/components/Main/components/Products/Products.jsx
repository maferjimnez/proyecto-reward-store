import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchProduct } from '../../../../services/api';
import { UserContext } from '../../../Context/UserContext';
import Product from './Product';
import ProductsPagination from '../Filters/components/ProductsPagination';
import useProductPagination from './useProductsPagination';

function Products() {
  const { products, setProduct } = useContext(UserContext);
  const { allProducts } = useContext(UserContext);
  const { filter } = useContext(UserContext);
  const [productsPaginate, setProductsPaginate] = useState([]);

  // useEffect(() => {
  //   setProductsPaginate([...products]);
  // }, [products]);

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

  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 16;

  const count = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const productsPaginated = useProductPagination(
    products,
    PRODUCTS_PER_PAGE,
    currentPage,
    setCurrentPage
  );

  // function handlePaginationNext(event, pageSelected) {
  //   setCurrentPage(pageSelected);
  //   productsPaginated.nextPage(pageSelected);
  // }
  // function handlePaginationPev(event, pageSelected) {
  //   setCurrentPage(pageSelected);
  //   productsPaginated.prevPage(pageSelected);
  // }

  return (
    <ProductsWrapper>
      <ProductsPagination
        currentPage={currentPage}
        count={count}
        handleNext={productsPaginated.nextPage}
        handlePrev={productsPaginated.prevPage}
      />

      {productsPaginated.currentData().map((product) => (
        <Product {...product} key={product._id} />
      ))}

      <ProductsPagination
        currentPage={currentPage}
        count={count}
        handleNext={productsPaginated.nextPage}
        handlePrev={productsPaginated.prevPage}
      />
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
