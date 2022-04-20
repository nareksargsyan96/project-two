import { Route, Switch } from 'react-router-dom';
import { appRoutes } from './main-routes';

export const AppRoutes = () => {
  return (
    <Switch>
      {appRoutes.map(({ exact, path, component }) => (
        <Route key={path} exact={exact} path={path} component={component} />
      ))}
    </Switch>
  );
};
