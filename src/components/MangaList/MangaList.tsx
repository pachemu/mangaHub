import styles from './styles.module.css';
import Manga from '../Manga/Manga.tsx';
import withSkeleton from '../../helpers/hocs/withSkeleton.tsx';
import { SoloManga } from '../../interfaces/interfaces.ts';

interface Props {
  mangas: SoloManga[] | [];
  isLoading: boolean;
}

const MangaList = ({ mangas }: Props) => {
  console.log(mangas);
  return (
    <ul className={styles.list}>
      {mangas?.slice(0, 24).map((manga: SoloManga) => {
        return <Manga manga={manga} key={manga.id} />;
      })}
    </ul>
  );
};

const MangaListWithSkeleton = withSkeleton({
  Component: MangaList,
  type: 'item',
  count: 23,
});
export default MangaListWithSkeleton;
