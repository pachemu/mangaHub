import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import { getPaginationRange } from '../../helpers/getPaginationRange.ts';

interface Props {
  totalPages: number;
  category?: string;
  page?: string;
  postQuery: string | number | boolean;
}

const Pagination = ({ totalPages, category, page = '1', postQuery }: Props) => {
  let currentPage = parseInt(page);
  const pages = getPaginationRange(currentPage, totalPages);
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const buildLink = (page: number, postQuery: string | number | boolean) => {
    return category !== undefined
      ? `/${page}/${category}`
      : `/search/${page}?post=${encodeURIComponent(postQuery)}`;
  };

  return (
    <div className={styles.pagination}>
      <NavLink to={buildLink(previousPage, postQuery)}>
        <button className={styles.arrow} disabled={currentPage === 1}>
          {'<'}
        </button>
      </NavLink>
      <div className={styles.list}>
        {pages.map((page) => (
          <NavLink to={buildLink(page, postQuery)} key={page}>
            <button
              className={`${styles.number} ${page === currentPage ? styles.active : ''}`}
            >
              {page}
            </button>
          </NavLink>
        ))}
      </div>
      <NavLink to={buildLink(nextPage, postQuery)}>
        <button className={styles.arrow} disabled={currentPage === totalPages}>
          {'>'}
        </button>
      </NavLink>
    </div>
  );
};

export default Pagination;
