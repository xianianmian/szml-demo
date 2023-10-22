import { Navigate } from 'react-router-dom';

import Login from '../views/login';
import Shop from '../views/shop/';
import LayoutPage from '../views/layou';
import NotFound from '../views/notFund';

const routes = [
  { path: '/', element: <Navigate to='/home' /> },
  { path: '/login', element: <Login /> },
  {
    path: '/homes',
    element: <LayoutPage />,
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