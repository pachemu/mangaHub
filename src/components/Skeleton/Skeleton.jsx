import styles from './styles.module.css';
// eslint-disable-next-line react/prop-types
const Skeleton = ({count = 1, type = 'banner'}) => {

    return (
        <>
            {count > 1 ? (<ul className={styles.list}>
                {[...Array(count)].map((_, index) => (
                    <li key={index}
                        className={type === 'banner' ? styles.banner : type === 'item' ? styles.item : styles.category}>
                    </li>
                ))}
            </ul>) : <li className={type === 'banner' ? styles.banner : styles.item}></li>}
        </>
    )
}


export default Skeleton;