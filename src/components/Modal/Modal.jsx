/* eslint-disable react/prop-types */
import styles from './styles.module.css';
import {forwardRef} from 'react';

const Modal = forwardRef(({item, selectedCategory, setSelected}, ref) => {
    return (
        <div className={styles.modal} ref={ref}>
            {item.map((category) => (
                <button
                    onClick={() => setSelected(category)}
                    className={selectedCategory === category ? styles.active : styles.item}
                    key={category}
                >
                    {category}
                </button>
            ))}
        </div>
    );
});

export default Modal;
