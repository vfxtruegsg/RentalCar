import { Link } from 'react-router-dom';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className={css.homePageSection}>
      <div className={css.homePageSection__homeContainer}>
        <div>
          <h1 className={css.homePageSection__homeHeader}>
            Find your perfect rental car
          </h1>
          <p className={css.homePageSection__homeTitle}>
            Reliable and budget-friendly rentals for any journey
          </p>
        </div>
        <Link className={`blue-btn`} to="/catalog">
          View Catalog
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
