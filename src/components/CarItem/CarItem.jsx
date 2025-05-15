import css from './CarItem.module.css';

const CarItem = ({ carInf }) => {
  const addresData = carInf.address.split(', ');

  return (
    <li className={css.carItemContainer}>
      <div style={{ position: 'relative', marginBottom: 16 }}>
        <img
          className={css.carImg}
          src={carInf.img}
          alt={`${(carInf.brand, carInf.model)} picture`}
        />
        <button>
          <img
            className={css.likeBtn}
            src="/likeBtn.svg"
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
        <p>$ {carInf.rentalPrice}</p>
      </div>

      <div className={css.detailedInformationContainer}>
        <p className={css.detailedInformation}>
          {addresData[1]} | {addresData[2]} | {carInf.rentalCompany}
        </p>
        <p className={css.detailedInformation}>
          {carInf.type} | {carInf.mileage} km
        </p>
      </div>

      <button className="blue-btn">Read More</button>
    </li>
  );
};

export default CarItem;
