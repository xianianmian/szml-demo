import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import "./App.css"
const App = () => {
  const elementRouter = useRoutes(routes);
  return (
    <div>
      {/* <Login /> */}
      <div>这是</div>
      {elementRouter}
    </div>
  );
};
export default App;