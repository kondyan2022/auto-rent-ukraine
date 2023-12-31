import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
