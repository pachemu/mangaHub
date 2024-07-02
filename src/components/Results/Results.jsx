import styles from './styles.module.css';
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Results = ({results}) => {
    console.log(results)
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
        // <div className={styles.results}>
        //     {results.map(result => (
        //         <div key={result.id} className={styles.result}>
        //             <img src={result.image} alt={result.title} />
        //             <p>{result.title}</p>
        //         </div>
    )
}

export default Results;
