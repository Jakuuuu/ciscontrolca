import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarV2 from './NavbarV2';
import FooterV2 from './FooterV2';
import useScrollReveal from '../hooks/useScrollReveal';

const LayoutV2 = () => {
  useScrollReveal();

  return (
    <div className="layout-v2">
      <NavbarV2 />
      <main className="main-content-v2">
        <Outlet />
      </main>
      <FooterV2 />
    </div>
  );
};

export default LayoutV2;
