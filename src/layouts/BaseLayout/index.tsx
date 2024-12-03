import React, { FC } from 'react';

import { Header } from '../../components';

import { IBaseLayoutProps } from './types';

export const BaseLayout: FC<IBaseLayoutProps> = props => {
  const { children } = props;

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
