import css from './PaginationFields.module.css';
import CustomSelect from '../CustomSelect/CustomSelect.jsx';
import MileageFields from '../MileageFields/MileageFields.jsx';

const pricePerHour = [
  '10',
  '20',
  '30',
  '40',
  '50',
  '60',
  '70',
  '80',
  '90',
  '100',
  '110',
  '120',
  '130',
  '140',
  '150'
];

const PaginationFields = () => {
  return (
    <div className={css.paginationContainer}>
      <CustomSelect
        data={[
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
        label={'Car brand'}
        placeholder={'brand'}
      />

      <CustomSelect
        data={pricePerHour}
        label={'Price/ 1 hour'}
        placeholder={'price'}
      />

      <MileageFields />

      <button style={{ marginBottom: -24, width: 156 }} className={`blue-btn`}>
        Search
      </button>
    </div>
  );
};

export default PaginationFields;
