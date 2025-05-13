import css from './CustomSelect.module.css';
import { useState } from 'react';

const CustomSelect = ({ data, label, placeholder }) => {
  const [select, setSelect] = useState('');

  const onSelect = (e) => {
    setSelect(e.target.value);
  };

  return (
    <fieldset className={css.fieldset}>
      <label className={css.label}>{label}</label>
      <select value={select} onChange={onSelect} className={css.select}>
        <option value={''}>Choose a {placeholder}</option>
        {data.map((item, index) => (
          <option value={item.toLowerCase()} key={index}>
            {item}
          </option>
        ))}
      </select>
    </fieldset>
  );
};

export default CustomSelect;
