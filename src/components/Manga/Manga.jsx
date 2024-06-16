/* eslint-disable react/prop-types */
import styles from './styles.module.css';
const Manga = ({ item }) => {
    if (!item) return null;

    return (
        <li className={styles.item}>
            <div className={styles.info}>
                <div className={styles.wrapper}>
                    <img className={styles.image} src={item.image} alt={item.title}/>
                </div>
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.chapter}>Chapter: {item.chapter}</p>
                <p className={styles.views}>Views: {item.view}</p>
            </div>
        </li>
    );
};


export default Manga;