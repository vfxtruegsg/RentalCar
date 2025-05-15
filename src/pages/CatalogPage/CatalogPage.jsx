import { useEffect } from 'react';
import css from './CatalogPage.module.css';
import PaginationFields from '../../components/PaginationFields/PaginationFields.jsx';

const CatalogPage = () => {
  useEffect(() => {}, []);

  return (
    <section className={css.catalogPageSection}>
      <PaginationFields
        carList={[
          'Aston Martin',
          'Audi',
          'BMW',
          'Bentley',
          'Buick',
          'Chevrolet',
          'Chrysler',
          'GMC',
          'HUMMER',
          'Hyundai',
          'Kia',
          'Lamborghini',
          'Land Rover',
          'Lincoln',
          'MINI',
          'Mercedes-Benz',
          'Mitsubishi',
          'Nissan',
          'Pontiac',
          'Subaru',
          'Volvo'
        ]}
      />
    </section>
  );
};

export default CatalogPage;
