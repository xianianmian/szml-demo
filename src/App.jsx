import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import Login from './views/login';
import "./App.css"
const App = () => {
  const elementRouter = useRoutes(routes);
  return (
    <div>
      {/* <Login /> */}
      {elementRouter}
    </div>
  );
};
export default App;