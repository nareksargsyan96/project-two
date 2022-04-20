import React from 'react';

export interface IRouteItem {
  name: string;
  text: string;
  path: string;
  exact?: boolean;
  isActive?: boolean;
  component: React.LazyExoticComponent<any>;
}
