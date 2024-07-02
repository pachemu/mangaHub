// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import {searchManga} from '../../api/getMangaList';
import styles from './styles.module.css';
import Results from "../Results/Results.jsx";

// eslint-disable-next-line react/prop-types
const Search = ({setSearchParams, postQuery}) => {
    const [search, setSearch] = useState(postQuery || '');
    const [results, setResults] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [page, setPage] = useState(1);

    useEffect(() => {
        setSearch(postQuery || '');
    }, [postQuery]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!search || search.trim() === '') {
            alert('Please enter a search query.');
            return;
        }

        try {
            const data = await searchManga(search, page);
            setResults(data.mangaList);
            setSearchParams({post: search});
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleInputChange = (e) => {
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
                    name='search'
                    className={styles.input}
                />
                <input type="submit" className={styles.input} value="Search"/>
            </form>
            <Results results={results}/>
        </div>
    );
};

export default Search;
