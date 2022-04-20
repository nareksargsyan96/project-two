import React from 'react';
import { observer } from 'mobx-react-lite';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useStore } from '../../Hooks/useStore';

type AuthRouteProps = RouteProps & {
  type: 'authorized' | 'unauthorized';
};

export const AuthRoute: React.FC<AuthRouteProps> = observer(({ type, component, ...props }) => {
  const { authStore } = useStore();
  if (type === 'authorized') {
    if (!authStore.isAuth) {
      return <Route {...props} render={() => <Redirect to="/login" />} />;
    }
    return <Route component={component} {...props} />;
  }

  if (type === 'unauthorized') {
    if (authStore.isAuth) {
      return <Route {...props} render={() => <Redirect to="/" />} />;
    }
    return <Route component={component} {...props} />;
  }

  return null;
});
