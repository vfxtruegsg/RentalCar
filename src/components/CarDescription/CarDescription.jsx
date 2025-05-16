import css from './CarDescription.module.css';
import RentForm from '../RentForm/RentForm.jsx';
const CarDescription = ({ data }) => {
  const addresData = data.address.split(', ');
  const carType = data.type.split('');
  const carMileage = String(data.mileage).split('');

  return (
    <div className={css.carDescriptionConteiner}>
      <div className={css.communicateContainer}>
        <img className={css.img} src={data.img} alt="Car image" />
        <RentForm />
      </div>
      <div className={css.InfContainer}>
        <div className={css.basicInf}>
          <div className={css.carInf}>
            <h1 className={css.header}>
              {data.brand} {data.model}, {data.year}
            </h1>
            <p style={{ color: '#8d929a' }}>
              Id: {data.id.split('-')[0].split('').splice(0, 4)}
            </p>
          </div>
          <div className={css.location}>
            <img
              src="/location.svg"
              alt="Location image"
              width={16}
              height={16}
              style={{ marginRight: 4 }}
            />
            <p style={{ marginRight: 16 }}>
              {addresData[1]}, {addresData[2]}
            </p>
            <p>
              Mileage: {carMileage[0]} {carMileage.splice(1, carMileage.length)}{' '}
              km
            </p>
          </div>
          <p className={css.price}>$ {data.rentalPrice}</p>
          <p>{data.description}</p>
        </div>
        <div className={css.detailedInfContainer}>
          <div>
            <h2 className={css.detailedTitle}>Rental Conditions:</h2>
            <div className={css.itemsContainer}>
              <div className={css.detailedItem}>
                <img src="/check-circle.svg" alt="Check image" />
                <p>{data.rentalConditions[0]}</p>
              </div>
              <div className={css.detailedItem}>
                <img src="/check-circle.svg" alt="Check image" />
                <p>{data.rentalConditions[2]}</p>
              </div>
              <div className={css.detailedItem}>
                <img src="/check-circle.svg" alt="Check image" />
                <p>{data.rentalConditions[1]}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className={css.detailedTitle}>Car Specifications:</h2>
            <div className={css.itemsContainer}>
              <div className={css.detailedItem}>
                <img src="/calendar.svg" alt="Check image" />
                <p>Year: {data.year}</p>
              </div>
              <div className={css.detailedItem}>
                <img src="/car.svg" alt="Check image" />
                <p>
                  Type: {carType[0]}
                  {carType.splice(1, carType.length).join('').toLowerCase()}
                </p>
              </div>
              <div className={css.detailedItem}>
                <img src="/fuel-pump.svg" alt="Check image" />
                <p>Fuel Consumption: {data.fuelConsumption}</p>
              </div>
              <div className={css.detailedItem}>
                <img src="/gear.svg" alt="Check image" />
                <p>Engine Size: {data.engineSize}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className={css.detailedTitle}>
              Accessories and functionalities:
            </h2>
            <div className={css.itemsContainer}>
              <div className={css.detailedItem}>
                <img src="/check-circle.svg" alt="Check image" />
                <p>{data.accessories[0]}</p>
              </div>
              <div className={css.detailedItem}>
                <img src="/check-circle.svg" alt="Check image" />
                <p>{data.accessories[1]}</p>
              </div>
              <div className={css.detailedItem}>
                <img src="/check-circle.svg" alt="Check image" />
                <p>{data.accessories[2]}</p>
              </div>
              <div className={css.detailedItem}>
                <img src="/check-circle.svg" alt="Check image" />
                <p>{data.functionalities[0]}</p>
              </div>
              <div className={css.detailedItem}>
                <img src="/check-circle.svg" alt="Check image" />
                <p>{data.functionalities[1]}</p>
              </div>
              <div className={css.detailedItem}>
                <img src="/check-circle.svg" alt="Check image" />
                <p>{data.functionalities[2]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDescription;
