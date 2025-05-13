import { useSearchParams } from 'react-router-dom';
import css from './CustomSelect.module.css';
import { useEffect, useState } from 'react';

const CustomSelect = ({ data, label, placeholder, paramsType }) => {
  const [select, setSelect] = useState();

  const [searchParams, setSearchParams] = useSearchParams();

  const onSelect = (e) => {
    setSelect(e.target.value);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (select) {
      params.set(paramsType, select);
    } else {
      params.delete(paramsType);
    }

    setSearchParams(params);
  }, [paramsType, select, searchParams, setSearchParams]);

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
