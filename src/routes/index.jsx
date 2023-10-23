import { Navigate } from 'react-router-dom';

import Login from '../views/login';
import Shop from '../views/shop/';
import LandingPage from '../views/landing';
import HomePage from '../views/home';
import NotFound from '../views/notFund';

const routes = [
  { path: '/', element: <Navigate to='/home' /> },
  { path: '/login', element: <Login /> },
  { path: '/landing', element: <LandingPage /> },
  {
    path: '/home',
    element: <HomePage />,
    children: [
      { 
        path: 'shop', 
        element: <Shop />
     }
    ],
  },
  { path: '*', element: <NotFound /> },
];

export default routes;