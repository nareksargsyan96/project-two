import { useContext } from 'react';
import { RootStore, StoresContext } from '../Store/index';

export const useStore = (): RootStore => {
  return useContext(StoresContext);
};
