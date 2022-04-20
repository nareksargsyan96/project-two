import { Product } from '../../Component/Product/Product';
import styles from './Profile.module.scss';

export const Profile = () => {
  return (
    <div className={styles.profile}>
      <Product />
      <Product />
      <Product />
    </div>
  );
};
