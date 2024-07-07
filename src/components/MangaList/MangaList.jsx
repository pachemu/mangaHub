/* eslint-disable react/prop-types */
import styles from './styles.module.css'
import Manga from "../Manga/Manga.jsx";
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx";
const MangaList = ({manga}) => {
     return (
        <ul className={styles.list}>
            {manga.slice(1, 24).map(item => {
                return <Manga item={item} key={item.id} />
            })}
        </ul>
    )
}


const MangaListWithSkeleton = withSkeleton({Component: MangaList, type: 'item', count: 24});
export default MangaListWithSkeleton
