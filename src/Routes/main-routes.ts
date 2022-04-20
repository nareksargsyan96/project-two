import React from 'react';
import { IRouteItem } from '../interfaces/routes';

export const appRoutes: IRouteItem[] = [
  {
    name: 'profile',
    text: 'Profile',
    path: '/profile',
    exact: true,
    component: React.lazy(() =>
      import('../Pages/Profile/Profile').then(({ Profile }) => ({
        default: Profile,
      })),
    ),
  },
];

export const routes: IRouteItem[] = [
  {
    name: 'login',
    text: 'Login',
    path: '/login',
    isActive: false,
    exact: true,
    component: React.lazy(() =>
      import('../Pages/Authentication/Login/Login').then(({ Login }) => ({
        default: Login,
      })),
    ),
  },
  {
    name: 'registration',
    text: 'Registration',
    path: '/registration',
    isActive: false,
    exact: true,
    component: React.lazy(() =>
      import('../Pages/Authentication/Registration/Registration').then(({ Registration }) => ({
        default: Registration,
      })),
    ),
  },
  {
    name: 'recovery',
    text: 'Recovery',
    path: '/recovery',
    isActive: false,
    exact: true,
    component: React.lazy(() =>
      import('../Pages/Authentication/Recovery/Recovery').then(({ Recovery }) => ({
        default: Recovery,
      })),
    ),
  },
];
