import styles from './styles.module.css';
import Manga from '../Manga/Manga.tsx';
import withSkeleton from '../../helpers/hocs/withSkeleton.tsx';
import { SoloManga } from '../../interfaces/interfaces.ts';

interface Props {
  mangas: [SoloManga];
}

const MangaList = ({ mangas }: Props) => {
  return (
    <ul className={styles.list}>
      {mangas.slice(1, 20).map((manga: SoloManga) => {
        return <Manga manga={manga} key={manga.id} />;
      })}
    </ul>
  );
};

const MangaListWithSkeleton = withSkeleton({
  Component: MangaList,
  type: 'item',
  count: 20,
});
export default MangaListWithSkeleton;
