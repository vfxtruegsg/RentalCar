import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.homePageContainer}>
      <section className={css.homePageContainer__homeSection}>
        <div>
          <h1 className={css.homeSection__homeHeader}>
            Find your perfect rental car
          </h1>
          <p className={css.homeSection__homeTitle}>
            Reliable and budget-friendly rentals for any journey
          </p>
        </div>
        <Link className={`blue-btn`} to="/catalog">
          View Catalog
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
