import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthRoute } from './Component/AuthRoute/AuthRoute';
import { Layout } from './Component/Layout/Layout';
import { Authentication } from './Pages/Authentication/Authentication';

export const App = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/profile" />} />
      <AuthRoute
        type="unauthorized"
        path={['/login', '/registration', '/recovery']}
        component={Authentication}
      />
      <AuthRoute type="authorized" path={['/profile']} component={Layout} />
    </Switch>
  );
};
