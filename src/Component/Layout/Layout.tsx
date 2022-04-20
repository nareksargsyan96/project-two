import { FC } from 'react';
import { Header } from '../Header/Header';
import { Filter } from '../../Component/Filter/Filter';
import { Sidebar } from '../../Component/Sidebar/Sidebar';
import { Footer } from '../../Component/Footer/Footer';
import { AppRoutes } from '../../Routes/AppRoutes';

import styles from './Layout.module.scss';

export const Layout: FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Filter />
        <AppRoutes />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
};
