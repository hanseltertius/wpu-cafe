import { NavLink } from 'react-router-dom';
import styles from './NavItem.module.css';
import { JSX } from 'react';

interface IPropTypes {
  menuIcon: JSX.Element;
  to: string;
  children: string | JSX.Element;
  className?: string;
  isLogout?: boolean;
  onClick?: () => void;
}

const NavItem = (props: IPropTypes) => {
  const {
    menuIcon,
    to,
    children,
    className = '',
    isLogout = false,
    onClick = () => {},
  } = props;

  const isDangerColor = isLogout ? styles['danger-color'] : '';

  return (
    <NavLink
      to={to}
      end
      onClick={onClick}
      className={({ isActive }) =>
        `${styles['navbar-item-container']} ${isActive ? styles.active : ''} 
          ${isDangerColor}
          ${className}`
      }
    >
      <div className={`${styles['navbar-item-icon']} ${isDangerColor}`}>
        {menuIcon}
      </div>
      <div className={styles['navbar-item']}>{children}</div>
    </NavLink>
  );
};

export default NavItem;
