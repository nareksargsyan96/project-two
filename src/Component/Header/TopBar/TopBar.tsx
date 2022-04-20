import PersonIcon from '@mui/icons-material/Person';
import styles from './TopBar.module.scss';

export const TopBar = () => {
  return (
    <div className={styles.tobBar}>
      <h1 className={styles.tobBar_left}>Logo</h1>
      <div className={styles.tobBar_right}>
        <PersonIcon />
      </div>
    </div>
  );
};
