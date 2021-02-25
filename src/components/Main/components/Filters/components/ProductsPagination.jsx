import React from 'react';
import styled from 'styled-components';
// assets
// import variables from '../../../../../styles/variables';
import arrowRightIcon from '../assets/images/arrow-right.svg';
import arrowLeftIcon from '../assets/images/arrow-left.svg';

import { useProductPagination } from '../../../../Main/components/Products/useProductsPagination';

function Pagination(props) {
  const { currentPage, count, handleNext, handlePrev } = props;
  console.log(handleNext);
  return (
    <PaginationContainer>
      <div>
        <img
          onClick={handlePrev}
          src={arrowLeftIcon}
          alt="Icon of an arrow pointing to the left"
        />
      </div>
      <p>
        Page {currentPage} of {count}
      </p>
      <div>
        <img
          onClick={handleNext}
          src={arrowRightIcon}
          alt="Icon of an arrow pointing to the right"
        />
      </div>
    </PaginationContainer>
  );
}

export default Pagination;

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
