import styles from './styles.module.css';

// eslint-disable-next-line react/prop-types
const Pagination = ({totalPages, currentPage, handleNextPage, handlePageClick, handlePreviousPage}) => {
    // Вычисление диапазона отображаемых страниц
    const getPaginationRange = () => {
        const startPage = Math.max(currentPage - 5, 1);
        const endPage = Math.min(currentPage + 5, totalPages);
        const pages = [];

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    };

    const pages = getPaginationRange();

    return (
        <div className={styles.pagination}>
            <button
                onClick={handlePreviousPage}
                className={styles.arrow}
                disabled={currentPage === 1}
            >
                {'<'}
            </button>
            <div className={styles.list}>
                {pages.map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageClick(page)}
                        className={`${styles.number} ${page === currentPage ? styles.active : ''}`}
                    >
                        {page}
                    </button>
                ))}
            </div>
            <button
                onClick={handleNextPage}
                className={styles.arrow}
                disabled={currentPage === totalPages}
            >
                {'>'}
            </button>
        </div>
    );
};

export default Pagination;
