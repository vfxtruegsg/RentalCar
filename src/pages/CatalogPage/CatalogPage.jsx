import { useEffect } from 'react';
import css from './CatalogPage.module.css';
import PaginationFields from '../../components/PaginationFields/PaginationFields.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarList } from '../../redux/cars/selectors.js';
import { getCarListThunk } from '../../redux/cars/operations.js';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const carList = useSelector(selectCarList);

  useEffect(() => {
    dispatch(getCarListThunk());
  }, [dispatch]);

  return (
    <section className={css.catalogPageSection}>
      <PaginationFields carList={carList} />
    </section>
  );
};

export default CatalogPage;
