import styles from './styles.module.css';
import { useOnClickOutside } from '../../helpers/hooks/useClickOnOutside.ts';
import Modal from '../Modal/Modal.tsx';
import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import withSkeleton from '../../helpers/hocs/withSkeleton.tsx';

interface Props {
  categories: [
    {
      id: string;
      name: string;
    },
  ];
  selectedCategory: string;
  currentPage: number;
}

const Categories = ({ categories, selectedCategory, currentPage }: Props) => {
  const modalRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useOnClickOutside(modalRef, closeModal);
  if (!categories) return 0;
  return (
    <div className={styles.categories}>
      {categories.slice(0, 19).map((category) => (
        <NavLink to={`/1/${category.name}`} key={category.id}>
          <button
            className={
              selectedCategory === category.id ? styles.active : styles.item
            }
          >
            {category.id}
          </button>
        </NavLink>
      ))}
      <div className={styles.addCategories}>
        <div className={styles.openModal} onClick={() => setIsModalOpen(true)}>
          +
        </div>
        {isModalOpen && (
          <Modal item={categories} ref={modalRef} currentPage={currentPage} />
        )}
      </div>
    </div>
  );
};

const CategoriesWithSkeleton = withSkeleton({
  Component: Categories,
  type: 'categories',
  count: 20,
});

export default CategoriesWithSkeleton;
