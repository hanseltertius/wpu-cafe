import { RouteObject } from 'react-router-dom';
import Home from '../components/pages/Home';
import ProtectedRoute from './ProtectedRoute';
import Login from '../components/pages/Login';
import OrderList from '../components/pages/OrderList';
import OrderDetail from '../components/pages/OrderDetail';
import MenuList from '../components/pages/MenuList';
import MenuDetail from '../components/pages/MenuDetail';
import ReviewList from '../components/pages/ReviewList';
import LayoutWithNavbar from '../components/layouts/LayoutWithNavbar';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <LayoutWithNavbar />
      </ProtectedRoute>
    ),
    children: [
      { path: 'orders', element: <OrderList /> },
      { path: 'orders/:id', element: <OrderDetail /> },
      { path: 'menus', element: <MenuList /> },
      { path: 'menus/:id', element: <MenuDetail /> },
      { path: 'reviews', element: <ReviewList /> },
    ],
  },
];

export default routes;
