import React from 'react';

import CommonRouter from '@/CommonRouter';
import NavBar from '@/components/NavBar';
import FlexCenter from '@/components/FlexCenter';

export const App: React.FC = () => {
  return (
    <div style={{ flexDirection: 'column', display: 'flex' }}>
      <NavBar />
      <CommonRouter />
    </div>
  );
};
