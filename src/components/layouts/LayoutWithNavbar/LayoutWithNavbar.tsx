import { Outlet } from 'react-router-dom';
import Navbar from '../../ui/Navbar';

const LayoutWithNavbar = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default LayoutWithNavbar;
