import React, { Component } from 'react';
import style from './layout.module.css'
import { NavLink, Link, useNavigate ,Outlet} from 'react-router-dom';


class LayoutPage extends Component {
  render() { 
    return ( 
    <div>
      <div className={style.layout}>
        this is layoytpage
        <Outlet></Outlet>
      </div>
    </div>
    );
  }
}
 
export default LayoutPage;