import styles from './styles.module.css';
import {useOnClickOutside} from "../../helpers/useClickOnOutside.js";
import Modal from "../Modal/Modal.jsx";
import {useRef, useState} from "react";

// eslint-disable-next-line react/prop-types
const Categories = ({categories, setSelected, selectedCategory}) => {
    const modalRef = useRef(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => {
        setIsModalOpen(false)
    }
    useOnClickOutside(modalRef, closeModal)
    return (
        <div className={styles.categories}>
            {/* eslint-disable-next-line react/prop-types */}
            {categories.slice(0, 19).map(category => {
                    return (
                        <button onClick={() => setSelected(category)}
                                className={selectedCategory === category ? styles.active : styles.item} key={category}>
                            {category}
                        </button>
                    )
                }
            )
            }
            <div>
                <div className={styles.openModal} onClick={(() => setIsModalOpen(true))}>+</div>
                {isModalOpen ? <Modal item={categories} selectedCategory={selectedCategory} setSelected={setSelected}
                                      ref={modalRef}/> : null}
            </div>
        </div>

    );
};

export default Categories;