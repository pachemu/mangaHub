import styles from './styles.module.css';
import {useOnClickOutside} from "../../helpers/hooks/useClickOnOutside.js";
import Modal from "../Modal/Modal.jsx";
import {useRef, useState} from "react";
import {NavLink, useSearchParams} from "react-router-dom";
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx";
import FilterType from "../FilterType/FilterType.jsx";

// eslint-disable-next-line react/prop-types
const Categories = ({categories, selectedCategory, currentPage}) => {
    const modalRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams()
    const postQuery = searchParams.get('type')

    const closeModal = () => {
        setIsModalOpen(false);
    };
    useOnClickOutside(modalRef, closeModal);

    return (
        <div className={styles.categories}>
            {/* eslint-disable-next-line react/prop-types */}
            {categories.slice(0, 19).map(category => (
                <NavLink to={`/1/${category.name}`} key={category.id}>
                    <button
                        className={selectedCategory === category.id ? styles.active : styles.item}
                    >
                        {category.id}
                    </button>
                </NavLink>
            ))}
            <div className={styles.addCategories}>
                <div className={styles.openModal} onClick={() => setIsModalOpen(true)}>+</div>
                {isModalOpen && <Modal
                    item={categories}
                    selectedCategory={selectedCategory}
                    ref={modalRef}
                    currentPage={currentPage}
                />}
            </div>
            <FilterType
                setSearchParams={setSearchParams}/>
        </div>
    );
};

const CategoriesWithSkeleton = withSkeleton({Component: Categories, type: 'categories', count: 20});

export default CategoriesWithSkeleton;