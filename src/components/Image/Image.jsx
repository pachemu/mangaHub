/* eslint-disable react/prop-types */
import styles from './styles.module.css'
const Image = ({item}) => {
     return (
        <div className={styles.wrapper}>
            <img src={item.image} alt={item.title} className={styles.image}/>
        </div>
    )
}

export default Image;