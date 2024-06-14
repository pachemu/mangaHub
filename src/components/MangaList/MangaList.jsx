/* eslint-disable react/prop-types */
import styles from './styles.module.css'
import Manga from "../Manga/Manga.jsx";
const MangaList = ({manga}) => {
     return (
        <ul className={styles.list}>
            {manga.map(item => {
                return <Manga item={item} key={item.id} />
            })}
        </ul>
    )
}

export default MangaList;