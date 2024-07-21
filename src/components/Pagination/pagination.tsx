import styles from './styles.module.css';
import { NavLink, useSearchParams } from 'react-router-dom';
import { getPaginationRange } from '../../helpers/getPaginationRange.ts';

interface Props {
  totalPages: number;
  category: string | undefined;
  page: string | undefined;
}

const Pagination = ({ totalPages, category, page = '1' }: Props) => {
  let currentPage = parseInt(page);
  const pages = getPaginationRange(currentPage, totalPages);
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const [searchParams] = useSearchParams();
  const search = searchParams.get('post');
  return (
    <div className={styles.pagination}>
      <NavLink to={`/${previousPage}/${category}`}>
        <button className={styles.arrow} disabled={currentPage === 1}>
          {'<'}
        </button>
      </NavLink>
      <div className={styles.list}>
        {pages.map((page) => (
          <NavLink
            to={`/${page}/${category}${search ? `?post=${search}` : ''}`}
            key={page}
          >
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
        <button className={styles.arrow} disabled={currentPage === totalPages}>
          {'>'}
        </button>
      </NavLink>
    </div>
  );
};

export default Pagination;
