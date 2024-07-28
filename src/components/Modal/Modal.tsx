import styles from './styles.module.css';
import { ForwardedRef, forwardRef } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  item: [
    {
      id: string;
    },
  ];
  currentPage: number;
}

const Modal = forwardRef(
  ({ item, currentPage }: Props, ref: ForwardedRef<null>) => {
    return (
      <div className={styles.modal} ref={ref}>
        {item.slice(19, 41).map((category) => (
          // eslint-disable-next-line react/jsx-key
          <NavLink to={`/${currentPage}/${category.id}`} key={category.id}>
            <button key={category.id} className={styles.item}>
              {category.id}
            </button>
          </NavLink>
        ))}
      </div>
    );
  },
);

export default Modal;
