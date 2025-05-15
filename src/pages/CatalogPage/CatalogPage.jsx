import { useEffect, lazy, Suspense } from 'react';
import css from './CatalogPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCarBrands,
  selectCarList,
  selectIsLoading
} from '../../redux/cars/selectors.js';
import {
  getAllRentCarsThunk,
  getCarBrandsThunk
} from '../../redux/cars/operations.js';
import { Loader } from '../../components/Loader/Loader.jsx';

const CatalogPage = () => {
  const PaginationFields = lazy(() =>
    import('../../components/PaginationFields/PaginationFields.jsx')
  );
  const CarList = lazy(() => import('../../components/CarList/CarList.jsx'));

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const carBrands = useSelector(selectCarBrands);
  const carList = useSelector(selectCarList);

  useEffect(() => {
    dispatch(getCarBrandsThunk());
    dispatch(getAllRentCarsThunk());
  }, [dispatch]);

  if (!carBrands || carBrands.length || carList.length === 0) return null;

  return (
    <>
      <Suspense fallback={<Loader />}>
        {isLoading && <Loader />}
        <section className={css.catalogPageSection}>
          <PaginationFields carList={carBrands} />
          <CarList carData={carList} />
        </section>
      </Suspense>
    </>
  );
};

export default CatalogPage;
