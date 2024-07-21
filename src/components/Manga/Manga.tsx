import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { findCorrectChapter } from '../../helpers/findCorrectChapter.ts';
import { IManga } from '../../interfaces/interfaces.ts';

const Manga = ({ manga }: IManga) => {
  if (!manga) return null;
  const numberOfChapter = findCorrectChapter(manga.chapter);
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
          <Link
            to={`https://mangahook.vercel.app/manga/${manga.id}/chapter-${numberOfChapter}`}
          >
            <p className={styles.chapter}>Chapter : {numberOfChapter}</p>

          {numberOfChapter !== null ? (
            <Link
              to={`https://mangahook.vercel.app/manga/${manga.id}/chapter-${numberOfChapter}`}
            >
              {manga.chapter ? (
                <p className={styles.chapter}>{manga.chapter}</p>
              ) : (
                <p className={styles.chapter}>Chapter: 1</p>
              )}
            </Link>
          ) : (
            <Link
              to={`https://mangahook.vercel.app/manga/${manga.id}/chapter-${numberOfChapter}`}
            >
              <p className={styles.chapter}>Chapter: 1</p>
            </Link>
          )}
        </div>
        <p className={styles.views}>Views: {manga.view ? manga.view : '1k'}</p>
      </div>
    </li>
  );
};

export default Manga;
