import { useState } from 'react';

const useProductPagination = (
  pages = [],
  productsPerPage,
  currentPage,
  setCurrentPage
) => {
  const maxPage = Math.ceil(pages.length / productsPerPage);

  function currentData() {
    const begin = (currentPage - 1) * productsPerPage;
    const end = begin + productsPerPage;
    return pages.slice(begin, end);
  }

  function nextPage() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  function prevPage() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  return {
    nextPage,
    prevPage,
    currentData,
    maxPage,
  };
};

export default useProductPagination;
