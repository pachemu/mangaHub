/* eslint-disable react/prop-types */
import styles from './styles.module.css';

interface Props {
  item: {
    image: string;
    title: string;
  };
}

const Image = ({ item }: Props) => {
  return (
    <div className={styles.wrapper}>
      <img src={item.image} alt={item.title} className={styles.image} />
    </div>
  );
};

export default Image;
