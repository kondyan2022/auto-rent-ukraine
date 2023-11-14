import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SharedLayout from './components/SharedLayout/SharedLayout';
// import AboutPage from './pages/AboutPage/AboutPage';
// import CatalogPage from './pages/CatalogPage/CatalogPage';
// import FavoritiesPage from './pages/FavoritesPage/FavoritesPage';
import { getIsLoading } from './redux/carsSlice';
import Backdrop from './components/Backdrop/Backdrop';
import { RotatingLines } from 'react-loader-spinner';
import { lazy } from 'react';

const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const FavoritiesPage = lazy(() =>
  import('./pages/FavoritesPage/FavoritesPage'),
);

function App() {
  const isLoading = useSelector(getIsLoading);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<AboutPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritiesPage />} />
        </Route>
        <Route path="*" element={<AboutPage />} />
      </Routes>
      {isLoading && (
        <Backdrop closeOnClick={false} closeOnEscape={false} loader>
          <RotatingLines
            strokeColor="var(--color-blue)"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </Backdrop>
      )}
    </>
  );
}
export default App;
