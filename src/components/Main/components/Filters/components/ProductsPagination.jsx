import React from 'react';
import styled from 'styled-components';
// assets
import variables from '../../../../../styles/variables';
import arrowRightIcon from '../assets/images/arrow-right.svg';
import arrowLeftIcon from '../assets/images/arrow-left.svg';

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

function Pagination() {
  return (
    <PaginationContainer>
      <div>
        <img src={arrowLeftIcon} alt="Icon of an arrow pointing to the left" />
      </div>
      <p>
        <span>16</span> of 32 products
      </p>
      <div>
        <img
          src={arrowRightIcon}
          alt="Icon of an arrow pointing to the right"
        />
      </div>
    </PaginationContainer>
  );
}

export default Pagination;
