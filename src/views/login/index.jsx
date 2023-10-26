import style from "./login.module.css"
import { NavLink, Link, useNavigate, Outlet } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Col, Row } from 'antd';
import React, { useState, useEffect } from 'react';
import {message } from 'antd'
import bj from "./bj.jpg"
import api from '../../utils/http'

const Login = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage()

  const [inpit1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const toHome = () => {
    const inputValue = {
      userName:inpit1,
      password:input2
    }
    api.post('http://localhost:9095/user/login',inputValue)
    .then(res=>{
      console.log(res.data);
      if(res.data.success ){
        const token = res.data.data.token
        localStorage.setItem("token", token);
        navigate('/home', {
          replace: false,
        });
      }else{
        console.log('账号密码错误');
      }

    }).catch(err=>{
      console.log(err);
    })
  }
  return (
    <div className={style.login}>
      {contextHolder}
      <img src={bj} className={style.img} alt=''></img>
      <div className={style.form}>
        <div>
          <div className={style.title}>
            <h1>登陆界面</h1>
            <p className={style.xd}>平台登录画面</p>
          </div>
          <br />
          <Row className={style.arow}>
            <Col span={4}><p>用户名:</p></Col>
            <Col span={20}>
              <Input
                placeholder="Basic usage"
                onChange={e => setInput1(e.target.value)} />
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
                onChange={e => setInput2(e.target.value)}
                />
            </Col>
          </Row>
        </div>
        <br />
        <Row>
          
        <Col span={4} offset={6}>
            <Button onClick={toHome}>登录</Button>
          </Col>
          <Col span={4} offset={6}>
            <Button >注册</Button>
          </Col>
          <Col span={8} offset={20}>
            <a className={style.click}>忘记密码？</a>
          </Col>
        </Row>

        <div className={style.footer}>
            <p>www.com</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
