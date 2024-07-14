/* eslint-disable react/prop-types */
import styles from './styles.module.css';
import Image from '../Image/Image.tsx';
import withSkeleton from '../../helpers/hocs/withSkeleton.tsx';
import { Link } from 'react-router-dom';

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
  const manga = item[0];
  return (
    <div className={styles.banner}>
      <Image item={manga} />
      <Link to={`https://mangahook.vercel.app/manga/${manga.id}`}>
        <h1 className={styles.title}>{manga.title}</h1>
      </Link>
      <p className={styles.description}>{manga.description}</p>
      <p className={styles.chapter}>{manga.chapter}</p>
      <p className={styles.views}>Views: {manga.view}</p>
    </div>
  );
};
const BannerWithSkeleton = withSkeleton({
    Component: Banner,
    type: 'banner',
    count: 1,
});
export default BannerWithSkeleton;
