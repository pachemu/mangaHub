import Pagination from '../Pagination/pagination.tsx';
import MangaList from '../MangaList/MangaList.tsx';

interface Props {
  totalPages: number;
  category: string | undefined;
  page: string | undefined;
  isLoading: boolean;
  mangas: [] | undefined;
}

const PaginationWithManga = ({
  totalPages = 100,
  category,
  page,
  isLoading,
  mangas,
}: Props) => {
  return (
    <div>
      <Pagination totalPages={totalPages} category={category} page={page} />
      <MangaList isLoading={isLoading} mangas={mangas} />
      <Pagination category={category} totalPages={totalPages} page={page} />
    </div>
  );
};

export default PaginationWithManga;
