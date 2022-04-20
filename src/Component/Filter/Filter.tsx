import styles from './Filter.module.scss';

export const Filter = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.block}>
        <div className={styles.filtersblock} />
        <div className={styles.filtersblock} />
        <div className={styles.filtersblock} />
      </div>
    </div>
  );
};
