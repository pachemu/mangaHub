import styles from './styles.module.css';
import Banner from '../../components/Banner/Banner';
import {useEffect, useState} from 'react';
import {getMangaList} from '../../api/apiNews';
import MangaList from '../../components/MangaList/MangaList';

const Main = () => {
    const [mangaList, setMangaList] = useState([]);

    useEffect(() => {
        const fetchMangaList = async () => {
            try {
                const data = await getMangaList();
                setMangaList(data.mangaList);
            } catch (error) {
                console.error('Error fetching manga list:', error);
            }
        };
        fetchMangaList();
    }, []);

    return (
        <main className={styles.main}>
            {mangaList.length > 0 && <Banner item={mangaList[0]}/>}
            <MangaList manga={mangaList}/>
        </main>
    );
};

export default Main;
