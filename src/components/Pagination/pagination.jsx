import styles from './styles.module.css';
import {NavLink, useNavigate} from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Pagination = ({
                        totalPages,
                        handleNextPage,
                        handlePageClick,
                        handlePreviousPage,
                        prefetchMangaList,
                        category,
                        page
                    }) => {

    const navigate = useNavigate();
    const handlePrevPage = () => {
        navigate(-1);
    }
    const handleNextiPage = () => {
        navigate(1);
    }

    let currentPage = parseInt(page)
    const getPaginationRange = (currentPage) => {
        const startPage = Math.max(currentPage - 5, 1);
        const endPage = Math.min(currentPage + 5, totalPages);
        const pages = [];

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }


        return pages;
    };

    const pages = getPaginationRange(currentPage);
    const previousPage = currentPage - 1
    const nexPage = currentPage + 1;
    return (
        <div className={styles.pagination}>
            <NavLink to={`/${previousPage}/${category}`}>
            <button
                onClick={() => {
                    handlePreviousPage();
                    handlePrevPage();
                }}
                className={styles.arrow}
                disabled={currentPage === 1}
                onMouseEnter={() => prefetchMangaList(currentPage - 1)}
            >
                {'<'}
            </button>
            </NavLink>
            <div className={styles.list}>
                {pages.map((page) => (
                    // eslint-disable-next-line react/jsx-key
                    <NavLink to={`/${page}/${category}`}>
                    <button
                        key={page}
                        onClick={() => handlePageClick(page)}
                        className={`${styles.number} ${page === currentPage ? styles.active : ''}`}
                        onMouseEnter={() => prefetchMangaList(page)}
                    >
                        {page}
                    </button>
                    </NavLink>
                ))}
            </div>
            <NavLink to={`/${nexPage}/${category}`}>
            <button
                onClick={() => {
                    handleNextiPage()
                    handleNextPage()
                }}
                className={styles.arrow}
                disabled={currentPage === totalPages}
                onMouseEnter={() => prefetchMangaList(currentPage + 1)}
            >
                {'>'}
            </button>
            </NavLink>
        </div>
    );
};

export default Pagination;
