import css from './Layout.module.css';
import { NavLink } from 'react-router-dom';
import Navigation from '../Navigation/Navigation.jsx';

const Layout = () => {
  return (
    <div className={css.layoutContainer}>
      <nav className={`${css.navigationContainer} container`}>
        <img
          src="/RentalCar.svg"
          alt="RentalCar logo"
          width={102}
          height={16}
        />

        <Navigation />
      </nav>
    </div>
  );
};

export default Layout;
