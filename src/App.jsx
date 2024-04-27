import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import "./App.css"
const App = () => {
  const elementRouter = useRoutes(routes);
  return (
    <div>
      {/* <Login /> */}
      <div>
        <p>sdfsfsdf</p>
        这是dev,我现在尝试推送到dev2分支上，刚刚失败了一次
        <div>又
          <p>sdfsdf</p>
          突</div>
        <div>在世一次</div>
         </div>
      <div>尝试取消提交</div>
      {elementRouter}
    </div>
  );
};
export default App;