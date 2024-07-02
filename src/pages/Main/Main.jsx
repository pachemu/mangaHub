import styles from './styles.module.css';
import Banner from '../../components/Banner/Banner';
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {getCategories, getMangaList} from '../../api/getMangaList.js';
import MangaList from '../../components/MangaList/MangaList';
import Skeleton from "../../components/Skeleton/Skeleton.jsx";
import Pagination from "../../components/Pagination/pagination.jsx";
import Categories from "../../components/Categories/categories.jsx";
import {useParams, useSearchParams} from "react-router-dom";
import Search from "../../components/Search/Search.jsx";

const Main = () => {
    const [mangaList, setMangaList] = useState([]);
    const [isLoading, setLoaded] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [categoriesList, setCategoriesList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const totalPages = 100;
    let {page, category} = useParams()

    const dataCache = {};

    const fetchMangaList = async (page, category) => {
        const cacheKey = `${category}-${page}`;
        if (dataCache[cacheKey]) {
            setLoaded(false);
            return;
        }

        try {
            setLoaded(true);
            const data = await getMangaList(page, category);
            setMangaList(data.mangaList);
            setLoaded(false);
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
        fetchMangaList(page, category);
    }, [currentPage, selectedCategory]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleNextPage = () => {
        setCurrentPage(page + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(page - 1);
    };

    const handlePageClick = (page) => {
        setCurrentPage(page);
    };

    const [searchParams, setSearchParams] = useSearchParams()
    const postQuery = searchParams.get('post')
    return (
        <main className={styles.main}>
            <Search setSearchParams={setSearchParams} postQuery={postQuery}/>
            {!isLoading && mangaList.length > 0 ? (<Banner item={mangaList[0]}/>) : (<Skeleton count={1}/>)}
            {!isLoading ? (
                <Categories
                    categories={categoriesList}
                    setSelected={setSelectedCategory}
                    selectedCategory={selectedCategory}
                    currentPage={page}
                />
            ) : (
                <Skeleton count={20} type={'categories'}/>
            )}
            <Pagination
                totalPages={totalPages}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                category={category}
                page={page}
            />
            {isLoading ? (<Skeleton count={24} type={'item'}/>) : (<MangaList manga={mangaList}/>)}
            <Pagination
                category={category}
                totalPages={totalPages}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={currentPage}
                page={page}
            />
        </main>
    );
};

export default Main;
