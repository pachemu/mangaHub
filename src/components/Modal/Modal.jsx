/* eslint-disable react/prop-types */
import styles from './styles.module.css';
import {forwardRef} from 'react';
import {NavLink} from "react-router-dom";

// eslint-disable-next-line react/display-name
const Modal = forwardRef(({item, selectedCategory, currentPage}, ref) => {
    return (
        <div className={styles.modal} ref={ref}>
            {item.map((category) => (
                // eslint-disable-next-line react/jsx-key
                <NavLink to={`/${currentPage}/${category.id}`} key={category.id}>
                <button
                    className={selectedCategory === category ? styles.active : styles.item}
                    key={category.id}
                >
                    {category.id}
                </button>
                </NavLink>
            ))}
        </div>
    );
});

export default Modal;
