import React from 'react';
import styled from 'styled-components';
// components
// import Filters from './Filters/components/Filters';
import Products from './Products/Products';

const MainContainer = styled.main`
  margin: 2rem;
`;

function Main() {
  return (
    <MainContainer>
      {/* <Filters /> */}
      <Products />
    </MainContainer>
  );
}

export default Main;
