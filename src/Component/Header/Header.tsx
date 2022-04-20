import { TopBar } from './TopBar/TopBar';
import { HeaderMobile } from './HeaderMobile/HeaderMobile';

import styles from './Header.module.scss';

const pageName = ['New Arrivals', 'Girls', 'Boys'];

export const Header = () => {
  return (
    <div>
      <div className={styles.desktop_header}>
        <TopBar />
        <div className={styles.header}>
          {pageName.map((item) => {
            return <div className={styles.item}>{item}</div>;
          })}
        </div>
      </div>

      <div className={styles.mobile}>
        <HeaderMobile />
      </div>
    </div>
  );
};
