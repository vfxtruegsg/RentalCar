import { clsx } from 'clsx';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const buildActiveLinkClass = ({ isActive }) => {
    return clsx(isActive && css.active);
  };

  return (
    <div className={css.navigation}>
      <NavLink className={buildActiveLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildActiveLinkClass} to="/catalog">
        Catalog
      </NavLink>
    </div>
  );
};

export default Navigation;
