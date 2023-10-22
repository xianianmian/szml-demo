import React from 'react';
import style from "./login.module.css"
import { NavLink, Link, useNavigate ,Outlet} from 'react-router-dom';
import { Button, Checkbox, Form, Input, Col, Row } from 'antd';

const Login = () => {
  const navigate = useNavigate();

  const toHome = () => {
    console.log('back');
    navigate('/homes', {
      replace: false,
    });
  }

  return (
    <div className={style.login}>
      <Outlet ></Outlet>
      <div className={style.form}>
        <div>
          
          <Row className={style.arow}>
            <Col span={4}><p>用户名:</p></Col>
            <Col span={20}><Input placeholder="Basic usage" /></Col>
          </Row>
        </div>
        <br />
        <br />
        <div>
          <Row className={style.arow}>
            <Col span={4}><p>密码:</p></Col>
            <Col span={20}><Input placeholder="Basic password" /></Col>
          </Row>
        </div>
        <br />
        <Row>
          <Col span={4} offset={6}>
            <Button onClick={toHome}>登录</Button>
          </Col>
          <Col span={4} offset={6}>
            <Link  to={'/homes/shop' } >
               <Button >zhuce</Button>           
            </Link>
          </Col>
        </Row>
        
      </div>
    </div>
  );
}

export default Login;
