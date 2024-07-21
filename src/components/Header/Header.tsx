import { formatDate } from '../../helpers/formatDate';
import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.main}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <NavLink to={'/1/all'}>
                <button className={styles.button}>MangaList page</button>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/search/1'}>
                <button className={styles.button}>Search page</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <h1 className={styles.title}>Manga</h1>
      <div className={styles.date}> {formatDate(new Date())} </div>
    </header>
  );
};

export default Header;
