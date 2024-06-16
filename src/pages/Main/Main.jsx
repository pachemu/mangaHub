import styles from './styles.module.css';
import Banner from '../../components/Banner/Banner';
import {useEffect, useState} from 'react';
import {getMangaList} from '../../api/getMangaList.js';
import MangaList from '../../components/MangaList/MangaList';
import Skeleton from "../../components/Skeleton/Skeleton.jsx";
import Pagination from "../../components/Pagination/pagination.jsx";


const Main = () => {
    const [mangaList, setMangaList] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [isLoading, setLoaded] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 100
    useEffect(() => {
        const fetchMangaList = async (currentPage) => {
            try {
                setLoaded(true)
                const data = await getMangaList(currentPage);
                setMangaList(data.mangaList);
                setLoaded(false)
            } catch (error) {
                console.error('Error fetching manga list:', error);
            }
        };
        fetchMangaList(currentPage);
    }, [currentPage]);
    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    }
    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    }
    const handlePageClick = (currentPage) => {
        setCurrentPage(currentPage)
    }

    return (
        <main className={styles.main}>
            {!isLoading && mangaList.length > 0 ? (<Banner item={mangaList[0]}/>) : (<Skeleton count={1}/>)}
            <Pagination
                totalPages={totalPages}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={currentPage}
            />
            {isLoading ? (<Skeleton count={24} type={'item'}/>) : (<MangaList manga={mangaList}/>)}

            <Pagination
                totalPages={totalPages}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={currentPage}
            />
        </main>
    );
};

export default Main;
