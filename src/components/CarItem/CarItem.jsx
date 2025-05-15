import css from './CarItem.module.css';

const CarItem = (carInf) => {
  return (
    <li key={carInf.id} className={css.carItemContainer}>
      <div style={{ position: 'relative', marginBottom: 16 }}>
        <img
          className={css.carImg}
          src={carInf.img}
          alt={`${(carInf.brand, carInf.model)} picture`}
        />
        <img
          className={css.likeBtn}
          src="/likeBtn.svg"
          alt="Like button"
          width={16}
          height={16}
        />
      </div>

      <div className={css.basicInfCarContainer}>
        <h3>
          {carInf.brand}
          <span style={{ display: 'block', color: '#3470ff' }}>
            {carInf.model}
          </span>
          , {carInf.year}
        </h3>
        <p>{carInf.rentalPrice}</p>
      </div>

      <div className={css.detailedInformationContainer}>
        <p>
          {carInf.address} | {carInf.mileage} km
        </p>
        <p>
          {carInf.address} | {carInf.mileage} km
        </p>
      </div>

      <button className="blue-btn">Read More</button>
    </li>
  );
};

export default CarItem;
