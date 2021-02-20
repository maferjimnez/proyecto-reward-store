import React from 'react';
import styled from 'styled-components';
// components
// import Hero from '../../Hero/components/Hero';
import Filters from './Filters/components/Filters';
import Products from './Products/Products';

const MainContainer = styled.main`
  margin: 2rem;

  @media (min-width: 500px) {
    margin: 2rem 6rem;
  }
`;

function Main() {
  return (
    <MainContainer>
      {/* <Hero /> */}
      <Filters />
      <Products />
    </MainContainer>
  );
}

export default Main;
