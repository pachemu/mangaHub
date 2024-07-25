import { ChangeEvent, useState } from 'react';
import styles from './styles.module.css';
import { SetURLSearchParams } from 'react-router-dom';
import { reverseToEnglish } from '../../helpers/reverseToEnglish.ts';

interface Props {
  setSearchParams: SetURLSearchParams;
  postQuery: string | null;
}

const Search = ({ setSearchParams, postQuery }: Props) => {
  const [search, setSearch] = useState<string>(postQuery || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!search || search.trim() === '') {
      setSearchParams('');
      return;
    }
    const englishSearch = reverseToEnglish(search);
    setSearchParams({ post: englishSearch });
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
