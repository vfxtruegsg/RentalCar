import { nanoid } from '@reduxjs/toolkit';
import css from './MileageFields.module.css';
import { useState } from 'react';

const MileageFields = () => {
  const mileageFieldId = nanoid();

  const [fromMileage, setFromMileage] = useState();
  const [toMileage, setToMileage] = useState();

  const onSelectFromMileage = (e) => {
    setFromMileage(e.target.value);
  };

  const onSelectToMileage = (e) => {
    setToMileage(e.target.value);
  };

  return (
    <div className={css.mileageFieldsContainer}>
      <label className={css.label} htmlFor={mileageFieldId}>
        Сar mileage / km
      </label>
      <div>
        <input
          value={fromMileage}
          onChange={onSelectFromMileage}
          id={mileageFieldId}
          className={css.fromMileage}
          type="number"
          placeholder="From"
        />
        <input
          value={toMileage}
          onChange={onSelectToMileage}
          className={css.toMileage}
          type="number"
          placeholder="To"
        />
      </div>
    </div>
  );
};

export default MileageFields;
