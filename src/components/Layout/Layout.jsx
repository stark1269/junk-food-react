import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = ({ setShopCart }) => {
  return (
    <>
      <AppBar setShopCart={setShopCart} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};