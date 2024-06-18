/* eslint-disable react/prop-types */
import styles from './styles.module.css';

const Manga = ({ item }) => {
    if (!item) return null;

    // Получаем совпадение регулярного выражения
    const match = item.chapter.match(/(\d+(\.\d+)?)$/);
    // Проверяем, есть ли совпадение, если нет, устанавливаем значение по умолчанию
    const roundedNumber = match ? Math.round(parseFloat(match[0])) : null;

    return (
        <li className={styles.item}>
            <div className={styles.info}>
                <div className={styles.wrapper}>
                    <a href={`https://mangahook.vercel.app/manga/${item.id}`}>
                        <img className={styles.image} src={item.image} alt={item.title}/>
                    </a>
                </div>
                <h1 className={styles.title}>{item.title}</h1>
                <div>
                    {roundedNumber !== null && (
                        <a href={`https://mangahook.vercel.app/manga/${item.id}/chapter-${roundedNumber}`}>
                            <p className={styles.chapter}>Chapter: {item.chapter}</p>
                        </a>
                    )}
                </div>
                <p className={styles.views}>Views: {item.view}</p>
            </div>
        </li>
    );
};

export default Manga;