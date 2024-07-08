import styles from './styles.module.css';
import {NavLink} from "react-router-dom";
import {getPaginationRange} from "../../helpers/getPaginationRange.js";


// eslint-disable-next-line react/prop-types
const Pagination = ({
                        totalPages,
                        category,
                        page
                    }) => {
    let currentPage = parseInt(page)
    const pages = getPaginationRange(currentPage, totalPages);
    const previousPage = currentPage - 1
    const nextPage = currentPage + 1;
    return (
        <div className={styles.pagination}>
            <NavLink to={`/${previousPage}/${category}`}>
            <button
                className={styles.arrow}
                disabled={currentPage === 1}
            >
                {'<'}
            </button>
            </NavLink>
            <div className={styles.list}>
                {pages.map((page) => (
                    // eslint-disable-next-line react/jsx-key
                    <NavLink to={`/${page}/${category}`} key={page}>
                    <button
                        key={page}
                        className={`${styles.number} ${page === currentPage ? styles.active : ''}`}
                    >
                        {page}
                    </button>
                    </NavLink>
                ))}
            </div>
            <NavLink to={`/${nextPage}/${category}`}>
            <button
                className={styles.arrow}
                disabled={currentPage === totalPages}
            >
                {'>'}
            </button>
            </NavLink>
        </div>
    );
};

export default Pagination;
