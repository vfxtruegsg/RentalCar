import css from './PaginationFields.module.css';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

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

const PaginationFields = ({ carList }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectBrand, setSelectBrand] = useState();
  const [selectPrice, setSelectPrice] = useState();
  const [selectFromMileage, setFromMileage] = useState('');
  const [selectToMileage, setToMileage] = useState('');

  const mileageFieldId = nanoid();

  const onSelectBrand = (e) => {
    setSelectBrand(e.target.value);
  };

  const onSelectPrice = (e) => {
    setSelectPrice(e.target.value);
  };

  const onSelectFromMileage = (e) => {
    setFromMileage(e.target.value);
  };

  const onSelectToMileage = (e) => {
    setToMileage(e.target.value);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (selectBrand) {
      params.set('brand', selectBrand);
    } else {
      params.delete('brand');
    }

    if (selectPrice) {
      params.set('rentalPrice', selectPrice);
    } else {
      params.delete('rentalPrice');
    }

    if (selectFromMileage) {
      params.set('minMileage', selectFromMileage);
    } else {
      params.delete('minMileage');
    }

    if (selectToMileage) {
      params.set('maxMileage', selectToMileage);
    } else {
      params.delete('maxMileage');
    }

    setSearchParams(params);
  }, [
    selectBrand,
    selectPrice,
    selectFromMileage,
    selectToMileage,
    searchParams,
    setSearchParams
  ]);

  return (
    <form className={css.paginationForm}>
      <fieldset className={css.fieldset}>
        <label className={css.label}>Car brand</label>
        <select
          value={selectBrand}
          onChange={onSelectBrand}
          className={css.select}
        >
          <option>Choose a brand</option>
          {carList.map((item, index) => (
            <option value={item.toLowerCase()} key={index}>
              {item}
            </option>
          ))}
        </select>
      </fieldset>

      <fieldset className={css.fieldset}>
        <label className={css.label}>Price/ 1 hour</label>
        <select
          value={selectPrice}
          onChange={onSelectPrice}
          className={css.select}
        >
          <option>Choose a brand</option>
          {pricePerHour.map((item, index) => (
            <option value={item.toLowerCase()} key={index}>
              {item}
            </option>
          ))}
        </select>
      </fieldset>

      <div className={css.mileageFieldsContainer}>
        <label className={css.label} htmlFor={mileageFieldId}>
          Сar mileage / km
        </label>
        <div>
          <input
            value={selectFromMileage}
            onChange={onSelectFromMileage}
            id={mileageFieldId}
            className={css.fromMileage}
            type="number"
            placeholder="From"
          />
          <input
            value={selectToMileage}
            onChange={onSelectToMileage}
            className={css.toMileage}
            type="number"
            placeholder="To"
          />
        </div>
      </div>

      <button
        type="submit"
        style={{ marginBottom: -24, width: 156 }}
        className={`blue-btn`}
      >
        Search
      </button>
    </form>
  );
};

export default PaginationFields;
