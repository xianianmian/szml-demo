import React from 'react';
import style from "./login.module.css"
import { NavLink, Link, useNavigate ,Outlet} from 'react-router-dom';
import { Button, Checkbox, Form, Input, Col, Row } from 'antd';

import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [userName,setUserName] = useState('')
  const [passWord,setPassWord] = useState('')

  const registe = ()=>{
    console.log(userName,passWord);
  }
  const toHome = () => {
    console.log('back');
    navigate('/home', {
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
            <Col span={20}>
              <Input 
              placeholder="Basic usage" 
              value={userName}
              onChange={e => setUserName(e.target.value)}/>
            </Col>
          </Row>
        </div>
        <br />
        <br />
        <div>
          <Row className={style.arow}>
            <Col span={4}><p>密码:</p></Col>
            <Col span={20}>
              <Input 
              placeholder="Basic password"  
              value={passWord}
              onChange={e => setPassWord(e.target.value)}/>
              </Col>
          </Row>
        </div>
        <br />
        <Row>
          <Col span={4} offset={6}>
            <Button onClick={toHome}>登录</Button>
          </Col>
          <Col span={4} offset={6}>
            <Link  to={'/home/shop' } >
               <Button onClick={registe}>注册</Button>           
            </Link>
          </Col>
        </Row>
        
      </div>
    </div>
  );
}

export default Login;
