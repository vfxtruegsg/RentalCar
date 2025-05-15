import css from './CarList.module.css';
import CarItem from '../CarItem/CarItem.jsx';

const CarList = ({ carData }) => {
  return (
    <div className="container">
      <ul className={css.carList}>
        {carData.map((item) => (
          <CarItem key={item.id} carInf={item} />
        ))}
      </ul>
    </div>
  );
};

export default CarList;
