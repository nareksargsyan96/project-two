import React from 'react';
import { configure } from 'mobx';
import AuthStore from './Auth/AuthStore';

configure({
  enforceActions: 'never',
});

export class RootStore {
  authStore: AuthStore;

  constructor() {
    this.authStore = new AuthStore();
  }
}

export const StoresContext = React.createContext(new RootStore());
