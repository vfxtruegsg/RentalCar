import Select from 'react-select';
import css from './PaginationFields.module.css';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { showToastErrorMessage } from '../../utils/toastMessages.js';

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

const selectOptions = (data) => {
  return data.map((item) => ({
    value: item.toLowerCase(),
    label: item
  }));
};

const PaginationFields = ({ brands }) => {
  const mileageFieldId = nanoid();

  const [searchParams, setSearchParams] = useSearchParams();

  const brandOptions = selectOptions(brands);
  const priceOptions = selectOptions(pricePerHour);

  const getOptionByValue = (options, value) =>
    options.find((option) => option.value === value) ?? null;

  const [selectBrand, setSelectBrand] = useState(
    getOptionByValue(brandOptions, searchParams.get('brand'))
  );
  const [selectPrice, setSelectPrice] = useState(
    getOptionByValue(priceOptions, searchParams.get('rentalPrice'))
  );
  const [selectFromMileage, setFromMileage] = useState(
    searchParams.get('minMileage') ?? ''
  );
  const [selectToMileage, setToMileage] = useState(
    searchParams.get('maxMileage') ?? ''
  );

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (selectBrand) {
      params.set('brand', selectBrand.value);
    } else {
      params.delete('brand');
    }

    if (selectPrice) {
      params.set('rentalPrice', selectPrice.value);
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

  const searchCars = (e) => {
    e.preventDefault();
    const form = e.target.elements;
    const fromMileageValue = form.fromMileage.value;
    const toMileageValue = form.toMileage.value;

    if (+fromMileageValue > +toMileageValue) {
      return showToastErrorMessage(
        'The minimum mileage must be less than the maximum.'
      );
    }
  };

  return (
    <form onSubmit={searchCars} className={css.paginationForm}>
      <fieldset className={css.fieldset}>
        <label className={css.label}>Car brand</label>
        <Select
          options={selectOptions(brands)}
          value={selectBrand}
          defaultValue={selectBrand}
          onChange={(selectedOption) => {
            setSelectBrand(selectedOption);
          }}
          placeholder="Choose a brand"
          classNamePrefix="custom-select"
          styles={{
            control: (base) => ({
              ...base,
              border: 'none',
              background: '#f7f7f7',
              borderRadius: '12px',
              minHeight: '44px',
              padding: '2px 6px',
              fontSize: '16px'
            }),
            placeholder: (base) => ({
              ...base,
              color: '#101828'
            }),
            menu: (base) => ({
              ...base,
              borderRadius: '12px',
              color: '#8d929a',
              zIndex: 5
            }),
            option: (base, state) => ({
              ...base,
              background: 'transparent',
              color: state.isSelected ? '#101828' : '#8d929a',
              padding: '12px 16px',
              cursor: 'pointer'
            }),
            indicatorSeparator: (base) => ({
              ...base,
              color: '#101828'
            })
          }}
        />
      </fieldset>

      <fieldset className={css.fieldset}>
        <label className={css.label}>Price / 1 hour</label>
        <Select
          options={selectOptions(pricePerHour)}
          value={selectPrice}
          onChange={(selectedOption) => {
            setSelectPrice(selectedOption);
          }}
          placeholder="Choose price"
          classNamePrefix="custom-select"
          styles={{
            control: (base) => ({
              ...base,
              border: 'none',
              background: '#f7f7f7',
              borderRadius: '12px',
              minHeight: '44px',
              padding: '2px 6px',
              fontSize: '16px'
            }),
            placeholder: (base) => ({
              ...base,
              color: '#101828'
            }),
            menu: (base) => ({
              ...base,
              borderRadius: '12px',
              color: '#8d929a',
              zIndex: 5
            }),
            option: (base, state) => ({
              ...base,
              background: 'transparent',
              color: state.isSelected ? '#101828' : '#8d929a',
              padding: '12px 16px',
              cursor: 'pointer'
            }),
            indicatorSeparator: (base) => ({
              ...base,
              color: '#101828'
            })
          }}
        />
      </fieldset>

      <div className={css.mileageFieldsContainer}>
        <label className={css.label} htmlFor={mileageFieldId}>
          Сar mileage / km
        </label>
        <div>
          <input
            value={selectFromMileage}
            onChange={(e) => {
              setFromMileage(e.target.value);
            }}
            name="fromMileage"
            id={mileageFieldId}
            className={css.fromMileage}
            type="number"
            placeholder="From"
          />
          <input
            value={selectToMileage}
            onChange={(e) => {
              setToMileage(e.target.value);
            }}
            name="toMileage"
            className={css.toMileage}
            type="number"
            placeholder="To"
          />
        </div>
      </div>

      <button
        type="submit"
        style={{ marginBottom: -24, width: 156 }}
        className="blue-btn"
      >
        Search
      </button>
    </form>
  );
};

export default PaginationFields;
