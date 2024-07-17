import { ChangeEvent, useEffect, useState } from 'react';
import { searchManga } from '../../api/getMangaList.js';
import styles from './styles.module.css';
import { SetURLSearchParams } from 'react-router-dom';

interface Props {
  setSearchParams: SetURLSearchParams;
  postQuery: string | null;
  page: string | undefined | number;
  setData: (data: any) => void;
}

const Search = ({ setSearchParams, postQuery, page = 1, setData }: Props) => {
  const [search, setSearch] = useState<string>(postQuery || '');

  useEffect(() => {
    setSearch(postQuery || '');
  }, [postQuery]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!search || search.trim() === '') {
      setSearchParams('');
      return;
    }

    try {
      setSearchParams({ post: search });
      const data = await searchManga(search, page);
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.search}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.searchForm}>
          <input
            type="text"
            value={search}
            onChange={handleInputChange}
            placeholder="Search"
            name="search"
            className={styles.input}
          />
          <input type="submit" className={styles.searchButton} value="Search" />
        </div>
      </form>
    </div>
  );
};

export default Search;
