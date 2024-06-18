import styles from './styles.module.css';
import Banner from '../../components/Banner/Banner';
import {useEffect, useState} from 'react';
import {getCategories, getMangaList} from '../../api/getMangaList.js';
import MangaList from '../../components/MangaList/MangaList';
import Skeleton from "../../components/Skeleton/Skeleton.jsx";
import Pagination from "../../components/Pagination/pagination.jsx";
import Categories from "../../components/Categories/categories.jsx";

const Main = () => {
    const [mangaList, setMangaList] = useState([]);
// eslint-disable-next-line no-unused-vars
    const [isLoading, setLoaded] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const [categoriesList, setCategoriesList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Drama');
    const totalPages = 100
    const fetchMangaList = async (currentPage) => {
        try {
            setLoaded(true)
            const data = await getMangaList(currentPage, selectedCategory
            );
            setMangaList(data.mangaList);
            setLoaded(false)
        } catch (error) {
            console.error('Error fetching manga list:', error);
        }
    };

    const fetchCategories = async () => {
        try {
            const data = await getCategories();
            setCategoriesList([...data].map(obj => obj.id));
        } catch (error) {
            console.error('Error fetching manga list:', error);
        }
    };

    useEffect(() => {
            fetchMangaList(currentPage);
        },
        [currentPage, selectedCategory]);

    useEffect(() => {
        fetchCategories();
    }, []);
    console.log('category', categoriesList)
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
            {!isLoading ? (
                <Categories
                    categories={categoriesList}
                    setSelected={setSelectedCategory}
                    selectedCategory={selectedCategory}
                />
            ) : (
                <Skeleton count={20} type={'categories'}/>
            )}
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