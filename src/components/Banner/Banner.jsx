/* eslint-disable react/prop-types */
import styles from './styles.module.css';
import Image from "../Image/Image.jsx";
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx";
import {Link} from "react-router-dom";
const Banner = ({ item }) => {
    if (!item) return null;
    const manga = item[0]
    return (
        <div className={styles.banner}>
            <Image item={manga}/>
            <Link to={`https://mangahook.vercel.app/manga/${manga.id}`}>
                <h1 className={styles.title}>{manga.title}</h1>
            </Link>
            <p className={styles.description}>{manga.description}</p>
            <p className={styles.chapter}>Chapter: {manga.chapter}</p>
            <p className={styles.views}>Views: {manga.view}</p>
        </div>
    );
};
const BannerWithSkeleton = withSkeleton({Component: Banner, type: 'banner', count: 1});
export default BannerWithSkeleton;