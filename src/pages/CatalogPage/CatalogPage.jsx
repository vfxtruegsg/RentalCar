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
import { useSearchParams } from 'react-router-dom';

const CatalogPage = () => {
  const [searchParams] = useSearchParams();

  const PaginationFields = lazy(() =>
    import('../../components/PaginationFields/PaginationFields.jsx')
  );
  const CarList = lazy(() => import('../../components/CarList/CarList.jsx'));

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const carBrands = useSelector(selectCarBrands);
  const carData = useSelector(selectCarList);

  useEffect(() => {
    const filterQuery = {
      brand: searchParams.get('brand') || '',
      rentalPrice: searchParams.get('rentalPrice') || '',
      minMileage: searchParams.get('minMileage') || '',
      maxMileage: searchParams.get('maxMileage') || ''
    };

    dispatch(getCarBrandsThunk());
    if (carData.length === 0) {
      dispatch(getAllRentCarsThunk(filterQuery));
    }
  }, [dispatch, searchParams, carData.length]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        {isLoading && <Loader />}
        <section className={css.catalogPageSection}>
          <PaginationFields brands={carBrands} />
          <CarList carData={carData} />
        </section>
      </Suspense>
    </>
  );
};

export default CatalogPage;
