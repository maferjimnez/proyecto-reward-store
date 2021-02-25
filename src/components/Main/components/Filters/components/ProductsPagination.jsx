import React from 'react';
import styled from 'styled-components';
// assets
// import variables from '../../../../../styles/variables';
import arrowRightIcon from '../assets/images/arrow-right.svg';
import arrowLeftIcon from '../assets/images/arrow-left.svg';

function Pagination(props) {
  const { currentPage, count, handleNext, handlePrev } = props;
  console.log(handleNext);
  return (
    <PaginationWrapper>
      <PaginationContainer>
        <div>
          <Arrow
            onClick={handlePrev}
            src={arrowLeftIcon}
            alt="Icon of an arrow pointing to the left"
          />
        </div>
        <p>
          Page <span>{currentPage}</span> of <span>{count}</span>
        </p>
        <div>
          <Arrow
            onClick={handleNext}
            src={arrowRightIcon}
            alt="Icon of an arrow pointing to the right"
          />
        </div>
      </PaginationContainer>
    </PaginationWrapper>
  );
}

const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PaginationContainer = styled.div`
  padding: 1rem;
  width: 15rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Arrow = styled.img`
  width: 2rem;
  cursor: pointer;

  :hover {
    filter: drop-shadow(0px 0px 2px #5edfff);
  }
`;

export default Pagination;
