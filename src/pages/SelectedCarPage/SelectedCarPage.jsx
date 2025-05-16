import css from './SelectedCarPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import {
  selectCarDescription,
  selectIsLoading
} from '../../redux/cars/selectors.js';
import { Loader } from '../../components/Loader/Loader.jsx';
import { getDetailDescriptionCarThunk } from '../../redux/cars/operations.js';
import { useParams } from 'react-router-dom';

const CarDescription = lazy(() =>
  import('../../components/CarDescription/CarDescription.jsx')
);

const SelectedCarPage = () => {
  const { carId } = useParams();

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const selectedCarData = useSelector(selectCarDescription);

  useEffect(() => {
    dispatch(getDetailDescriptionCarThunk(carId));
  }, [dispatch, carId]);

  if (!selectedCarData || selectedCarData.length == 0) return null;

  return (
    <>
      <Suspense fallback={<Loader />}>
        {isLoading && <Loader />}
        <section className={`${css.selectedCarPage} container`}>
          <CarDescription data={selectedCarData} />
        </section>
      </Suspense>
    </>
  );
};

export default SelectedCarPage;
