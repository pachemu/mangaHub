import Pagination from '../Pagination/pagination.tsx';
import MangaListWithSkeleton from '../MangaList/MangaList.tsx';

interface Props {
  totalPages: number;
  category: string | undefined;
  page: string | undefined;
  isLoading: boolean;
  mangas: {
    mangaList: [];
  };
  postQuery: string;
}

const PaginationWithManga = ({
  totalPages = 100,
  category,
  page,
  mangas,
  isLoading,
  postQuery,
}: Props) => {
  return (
    <div>
      <Pagination
        postQuery={postQuery}
        totalPages={totalPages}
        category={category}
        page={page}
      />
      <MangaListWithSkeleton isLoading={isLoading} mangas={mangas} />
      <Pagination
        postQuery={postQuery}
        category={category}
        totalPages={totalPages}
        page={page}
      />
    </div>
  );
};

export default PaginationWithManga;
