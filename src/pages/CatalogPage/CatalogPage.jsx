import { useEffect, lazy, Suspense, useState } from 'react';
import css from './CatalogPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCarBrands,
  selectCarList,
  selectIsLoading,
  selectTotalCars
} from '../../redux/cars/selectors.js';
import {
  getAllRentCarsThunk,
  getCarBrandsThunk
} from '../../redux/cars/operations.js';
import { Loader } from '../../components/Loader/Loader.jsx';
import { useSearchParams } from 'react-router-dom';

const PaginationFields = lazy(() =>
  import('../../components/PaginationFields/PaginationFields.jsx')
);
const CarList = lazy(() => import('../../components/CarList/CarList.jsx'));

const CatalogPage = () => {
  const [searchParams] = useSearchParams();

  const [page, setPage] = useState(1);
  const limit = 12;

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const carBrands = useSelector(selectCarBrands);
  const carData = useSelector(selectCarList);
  const carTotal = useSelector(selectTotalCars);

  const isLoadMoreVisible = carData.length < carTotal;

  useEffect(() => {
    const filterQuery = {
      brand: searchParams.get('brand') || '',
      rentalPrice: searchParams.get('rentalPrice') || '',
      minMileage: searchParams.get('minMileage') || '',
      maxMileage: searchParams.get('maxMileage') || '',
      limit,
      page
    };

    dispatch(getCarBrandsThunk());
    dispatch(getAllRentCarsThunk(filterQuery));
  }, [dispatch, searchParams, page]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        {isLoading && <Loader />}
        <section className={`${css.catalogPageSection} container`}>
          <PaginationFields brands={carBrands} />
          <CarList carData={carData} />
          {isLoadMoreVisible && (
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className={css.loadMoreBtn}
            >
              Load more
            </button>
          )}
        </section>
      </Suspense>
    </>
  );
};

export default CatalogPage;
