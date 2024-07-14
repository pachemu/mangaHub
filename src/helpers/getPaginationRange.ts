export const getPaginationRange = (currentPage: number, totalPages: number) => {
  const startPage = Math.max(currentPage - 5, 1);
  const endPage = Math.min(currentPage + 5, totalPages);
  const pages = [];

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return pages;
};
