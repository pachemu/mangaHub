/* eslint-disable react/prop-types */
import styles from './styles.module.css';
import Image from "../Image/Image.jsx";
const Banner = ({ item }) => {
    if (!item) return null;

    return (
        <div className={styles.banner}>
            <Image item={item}/>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.chapter}>Chapter: {item.chapter}</p>
            <p className={styles.views}>Views: {item.view}</p>
        </div>
    );
};

export default Banner;