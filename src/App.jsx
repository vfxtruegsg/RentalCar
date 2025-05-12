import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loader } from './components/Loader/Loader.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const Layout = lazy(() => import('./components/Layout/Layout.jsx'));
const SelectedCarPage = lazy(() =>
  import('./pages/SelectedCarPage/SelectedCarPage.jsx')
);
function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <main>
          <Layout />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:carId" element={<SelectedCarPage />} />
          </Routes>
        </main>
      </Suspense>
    </>
  );
}

export default App;
