import { Link } from 'react-router-dom';
import css from './CarItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsFavorite } from '../../redux/cars/selectors.js';
import { toggleFavorite } from '../../redux/cars/slice.js';
import { showToastSuccessMessage } from '../../utils/toastMessages.js';

const CarItem = ({ carInf }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectIsFavorite);
  const isFavorite = favorites.find((item) => item.id == carInf.id);

  const addresData = carInf.address.split(', ');
  const carMileage = String(carInf.mileage).split('');

  const handleLikeClick = () => {
    dispatch(toggleFavorite(carInf));

    isFavorite
      ? showToastSuccessMessage('Successfully deleted favorite car!')
      : showToastSuccessMessage('Successfully added favorite car!');
  };

  return (
    <li className={css.carItemContainer}>
      <div style={{ position: 'relative', marginBottom: 16 }}>
        <img
          className={css.carImg}
          src={carInf.img}
          alt={`${(carInf.brand, carInf.model)} picture`}
        />
        <button onClick={handleLikeClick}>
          <img
            className={css.likeBtn}
            src={!isFavorite ? '/likeBtn.svg' : '/likeBtnActive.svg'}
            alt="Like button"
            width={16}
            height={16}
          />
        </button>
      </div>

      <div className={css.basicInfCarContainer}>
        <h3>
          {carInf.brand}{' '}
          <span style={{ color: '#3470ff' }}>{carInf.model}</span>,{' '}
          {carInf.year}
        </h3>
        <p>${carInf.rentalPrice}</p>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%'
        }}
      >
        <div className={css.detailedInformationContainer}>
          <p className={css.detailedInformation}>
            {addresData[1]} | {addresData[2]} | {carInf.rentalCompany}
          </p>
          <p className={css.detailedInformation}>
            {carInf.type} | {carMileage[0]}{' '}
            {carMileage.splice(1, carMileage.length)} km
          </p>
        </div>

        <Link to={carInf.id} className="blue-btn">
          Read More
        </Link>
      </div>
    </li>
  );
};

export default CarItem;
