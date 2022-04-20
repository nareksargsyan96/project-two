import React from 'react';
import { Route, Switch } from 'react-router-dom';

import styles from './Authentication.module.scss';
import { routes } from '../../Routes/main-routes';

export const Authentication: React.FC = () => {
  return (
    <div className={styles.AuthWrapper}>
      <Switch>
        {routes.map((el) => (
          <Route exact={el.exact} path={el.path} component={el.component} />
        ))}
      </Switch>
    </div>
  );
};
