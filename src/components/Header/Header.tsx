import { formatDate } from '../../helpers/formatDate';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Manga</h1>
      <div className={styles.date}> {formatDate(new Date())} </div>
    </header>
  );
};

export default Header;
