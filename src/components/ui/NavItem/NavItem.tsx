import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';
import { JSX } from 'react';

interface IPropTypes {
  menuIcon: JSX.Element;
  to: string;
  children: string | JSX.Element;
  onClick?: () => void;
}

const NavItem = ({ menuIcon, to, children, onClick }: IPropTypes) => {
  return (
    <NavLink
      to={to}
      end
      onClick={onClick}
      className={({ isActive }) =>
        `${styles['navbar-item-container']} ${isActive ? styles.active : ''}`
      }
    >
      <div className={styles['navbar-item-icon']}>{menuIcon}</div>
      <div className={styles['navbar-item']}>{children}</div>
    </NavLink>
  );
};

export default NavItem;
