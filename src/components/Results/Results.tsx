import styles from './styles.module.css';
import { Link } from 'react-router-dom';

interface Result {
  id: string;
  image: string;
  title: string;
}

type Props = {
  results: Result[];
};

const Results = ({ results }: Props) => {
  if (results.length == 0) {
    return <div>Нет результатов</div>;
  }

  return (
    <div className={styles.results}>
      {results.map((result: Result) => (
        <div className={styles.result} key={result.id}>
          <Link to={`https://mangahook.vercel.app/manga/${result.id}`}>
            <div key={result.id} className={styles.result}>
              <img
                src={result.image}
                alt={result.title}
                className={styles.image}
              />
              <p className={styles.title}>{result.title}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Results;
