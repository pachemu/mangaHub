import styles from './styles.module.css';
import Image from '../Image/Image.tsx';
import withSkeleton from '../../helpers/hocs/withSkeleton.tsx';
import { Link } from 'react-router-dom';
import { findPopularManga } from '../../helpers/findPopularManga.ts';
import { findCorrectChapter } from '../../helpers/findCorrectChapter.ts';

interface Props {
  item: [
    {
      title: string;
      id: string;
      description: string;
      image: string;
      view: string;
      chapter: string;
    },
  ];
}

const Banner = ({ item }: Props) => {
  if (!item) return null;
  const manga = findPopularManga(item);
  if (!manga) return null;
  const numberOfChapter = findCorrectChapter(manga.chapter);
    if (item.length < 1) return null;
  const manga = item[0];
  return (
    <div className={styles.banner}>
      <Image item={manga} />
      <Link to={`https://mangahook.vercel.app/manga/${manga.id}`}>
        <h1 className={styles.title}>{manga.title}</h1>
      </Link>
      {manga.description ? (
        <span className={styles.info}>
          <p className={styles.description}>{manga.description}</p>
          <Link
            to={`https://mangahook.vercel.app/manga/${manga.id}/chapter-${numberOfChapter}`}
          >
            <p className={styles.chapter}>Chapter : {numberOfChapter}</p>
          </Link>
          <p className={styles.views}>Views: {manga.view}</p>
        </span>
      ) : (
        <span className={styles.info}>
          <p className={styles.description}></p>
          <Link
            to={`https://mangahook.vercel.app/manga/${manga.id}/chapter-1}`}
          >
            <p className={styles.chapter}>Chapter : 1</p>
          </Link>
          <p className={styles.views}>Views: 1k</p>
        </span>
      )}
    </div>
  );
};
const BannerWithSkeleton = withSkeleton({
  Component: Banner,
  type: 'banner',
  count: 1,
});
export default BannerWithSkeleton;
