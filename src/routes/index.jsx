import { Navigate } from 'react-router-dom';

import Login from '../views/login';
import ShopPage from '../views/shop/';
import LandingPage from '../views/landing';
import HomePage from '../views/home';
import NotFound from '../views/notFund';
import OtherPage from '../views/other';
import TestPage from '../views/test';



const routes = [
  { path: '/', element: <Navigate to='/home' /> },
  { path: '/login', element: <Login /> },
  { path: '/test', element: <TestPage /> },
  { path: '/landing', element: <LandingPage /> },
  {
    path: '/home',
    element: <HomePage />,
    children: [
      { 
        path: 'shop', 
        element: <ShopPage />
     },
      { 
        path: 'other', 
        element: <OtherPage />
     },
    ],
  },
  { path: '*', element: <NotFound /> },
];

export default routes;