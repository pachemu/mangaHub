import styles from './styles.module.css';
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <Link className={styles.button} to={'http://localhost:5173/1/all'}>Go to <h1
                className={styles.title}>MangaHub</h1></Link>
        </div>
    )
};

export default HomePage;