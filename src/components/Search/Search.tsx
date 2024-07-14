// eslint-disable-next-line no-unused-vars
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { searchManga } from '../../api/getMangaList.js';
import styles from './styles.module.css';
import Results from '../Results/Results.tsx';
import { SetURLSearchParams } from 'react-router-dom';

interface Props {
  setSearchParams: SetURLSearchParams;
  postQuery: string | null;
  page: string | undefined | number;
}

interface Result {
  id: string;
  image: string;
  title: string;
}

// eslint-disable-next-line react/prop-types
const Search = ({ setSearchParams, postQuery, page = 1 }: Props) => {
  const [search, setSearch] = useState<string>(postQuery || '');
  const [results, setResults] = useState<Array<Result> | null>([]);

  useEffect(() => {
    setSearch(postQuery || '');
  }, [postQuery]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search || search.trim() === '') {
      setResults(null);
      return;
    }

    try {
      const data = await searchManga(search, page);
      setResults(data.mangaList);
      setSearchParams({ post: search });
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
        <input
          type="text"
          value={search}
          onChange={handleInputChange}
          placeholder="Search"
          name="search"
          className={styles.input}
        />
        <input type="submit" className={styles.input} value="Search" />
      </form>
      <Results results={results} />
    </div>
  );
};

export default Search;
