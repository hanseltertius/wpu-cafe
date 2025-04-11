import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

import { useState } from 'react';
import styles from './Navbar.module.css';
import NavItem from '../NavItem';
import { FaClipboardList, FaCommentAlt, FaPowerOff } from 'react-icons/fa';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <button
        className={styles.hamburger}
        onClick={() => setDrawerOpen(true)}
        aria-label="Open navigation"
      >
        ☰
      </button>
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        direction="left"
      >
        <div className={styles['drawer-container']}>
          <div className={`${styles['drawer-header']} primary`}>
            <h1>WPU Cafe</h1>
          </div>
          <div className={styles['drawer-content']}>
            <NavItem
              to="/orders"
              menuIcon={<FaClipboardList />}
              onClick={() => setDrawerOpen(false)}
            >
              Orders
            </NavItem>
            <NavItem
              to="/reviews"
              menuIcon={<FaCommentAlt />}
              onClick={() => setDrawerOpen(false)}
            >
              Reviews
            </NavItem>
          </div>
          <div className={styles['drawer-footer']}>
            <NavItem
              to="/"
              menuIcon={<FaPowerOff />}
              onClick={() => {
                console.log('logout clicked');
                setDrawerOpen(false);
              }}
            >
              Logout
            </NavItem>
          </div>
        </div>
      </Drawer>
      <div className={`${styles['navbar-brand']}`}>
        <strong>WPU Cafe</strong>
      </div>
    </header>
  );
};

export default Navbar;
