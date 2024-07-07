/* eslint-disable react/prop-types */
import styles from './styles.module.css';
import {Link} from "react-router-dom";
import {findCorrectChapter} from "../../helpers/findCorrectChapter.js";

const Manga = ({ item }) => {
    if (!item) return null;
    const numberOfChapter = findCorrectChapter(item)
    return (
        <li className={styles.item}>
            <div className={styles.info}>
                <div className={styles.wrapper}>
                    <Link to={`https://mangahook.vercel.app/manga/${item.id}`}>
                        <img className={styles.image} src={item.image} alt={item.title}/>
                    </Link>
                </div>
                <h1 className={styles.title}>{item.title}</h1>
                <div>
                    {numberOfChapter !== null && (
                        <Link to={`https://mangahook.vercel.app/manga/${item.id}/chapter-${numberOfChapter}`}>
                            <p className={styles.chapter}>{item.chapter}</p>
                        </Link>
                    )}
                </div>
                <p className={styles.views}>Views: {item.view}</p>
            </div>
        </li>
    );
};

export default Manga;