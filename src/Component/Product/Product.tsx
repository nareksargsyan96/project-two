import { Button } from '../Button/Button';
import styles from './Product.module.scss';

export const Product = () => {
  return (
    <div className={styles.product}>
      <div className={styles.img} />
      <h1>Name</h1>
      <Button size="145" className={styles.product_btn}>
        Button
      </Button>
    </div>
  );
};
