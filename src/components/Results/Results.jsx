import styles from './styles.module.css';
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Results = ({results}) => {
    if (!results) {
        return;
    }
    // eslint-disable-next-line react/prop-types
    return (
        <div className={styles.results}>
            {/* eslint-disable-next-line react/prop-types */}
            {results.map(result => (
                // eslint-disable-next-line react/jsx-key
                <div className={styles.result}>
                    <Link to={`https://mangahook.vercel.app/manga/${result.id}`}>
                        <div key={result.id} className={styles.result}>
                            <img src={result.image} alt={result.title} className={styles.image}/>
                            <p className={styles.title}>{result.title}</p>
                        </div>
                    </Link>
                </div>

            ))}
        </div>
    )
}

export default Results;
