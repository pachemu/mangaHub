import styles from './styles.module.css';
import Banner from '../../components/Banner/Banner';
import {useEffect, useState} from 'react';
import {getMangaList} from '../../api/apiNews';
import MangaList from '../../components/MangaList/MangaList';
import Skeleton from "../../components/Skeleton/Skeleton.jsx";

const Main = () => {
    const [mangaList, setMangaList] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [isLoading, setLoaded] = useState(true)
    useEffect(() => {
        const fetchMangaList = async () => {
            try {
                setLoaded(true)
                const data = await getMangaList();
                setMangaList(data.mangaList);
                setLoaded(false)
            } catch (error) {
                console.error('Error fetching manga list:', error);
            }
        };
        fetchMangaList();
    }, []);

    return (
        <main className={styles.main}>
            {!isLoading && mangaList.length > 0 ? (<Banner item={mangaList[0]}/>) : (<Skeleton count={1}/>)}
            {isLoading ? (<Skeleton count={24} type={'item'}/>) : (<MangaList manga={mangaList}/>)}
        </main>
    );
};

export default Main;
