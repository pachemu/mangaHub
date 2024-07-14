import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { findCorrectChapter } from '../../helpers/findCorrectChapter.ts';
import { IManga } from '../../interfaces/interfaces.ts';

const Manga = ({ manga }: IManga) => {
  if (!manga) return null;
  const numberOfChapter = findCorrectChapter(manga);
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <div className={styles.wrapper}>
          <Link to={`https://mangahook.vercel.app/manga/${manga.id}`}>
            <img className={styles.image} src={manga.image} alt={manga.title} />
          </Link>
        </div>
        <h1 className={styles.title}>{manga.title}</h1>
        <div>
          {numberOfChapter !== null && (
            <Link
              to={`https://mangahook.vercel.app/manga/${manga.id}/chapter-${numberOfChapter}`}
            >
              <p className={styles.chapter}>{manga.chapter}</p>
            </Link>
          )}
        </div>
        <p className={styles.views}>Views: {manga.view}</p>
      </div>
    </li>
  );
};

export default Manga;