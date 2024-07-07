import {useMemo} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {getCategories, getMangaList} from '../../api/getMangaList.js';
import styles from './styles.module.css';
import Banner from '../../components/Banner/Banner';
import MangaList from '../../components/MangaList/MangaList';
import Pagination from "../../components/Pagination/pagination.jsx";
import Categories from "../../components/Categories/categories.jsx";
import Search from "../../components/Search/Search.jsx";
import {TOTAL_PAGES} from "../../constants/constants.js";

const Main = () => {
    let {page, category} = useParams();

    // Мемоизация параметров для useFetch
    const mangaListParams = useMemo(() => ({
        page: page || 1,
        category: category || 'all',
    }), [page, category]);

    const {data, error, isLoading} = useFetch(getMangaList, mangaListParams);

    const {data: dataCategories} = useFetch(getCategories);

    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('post');

    return (
        <main className={styles.main}>
            <Search setSearchParams={setSearchParams} postQuery={postQuery}/>
            <Banner isLoading={isLoading} item={data.mangaList}/>
            {dataCategories && (
                <Categories
                    isLoading={isLoading}
                    categories={dataCategories}
                    selectedCategory={category}
                    currentPage={page}
                />
            )}
            <Pagination
                totalPages={TOTAL_PAGES}
                category={category}
                page={page}
            />
            <MangaList isLoading={isLoading} manga={data.mangaList}/>
            <Pagination
                category={category}
                totalPages={TOTAL_PAGES}
                page={page}
            />
        </main>
    );
};

export default Main;
