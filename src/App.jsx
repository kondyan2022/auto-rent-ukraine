import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

// import { AppWrapper } from './App.styled';
import AboutPage from './pages/AboutPage/AboutPage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import FavoritiesPage from './pages/FavoritesPage/FavoritesPage';

// const test = import.meta.env.VITE_API_TEST;

function App() {
  // console.log(test);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<AboutPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritiesPage />} />
        <Route path="*" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}
export default App;
