import React from 'react';
import style from "./login.module.css"
import { NavLink, Link, useNavigate, Outlet } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Col, Row } from 'antd';
import axios from 'axios'
import { useState, useEffect } from 'react';
import {message } from 'antd'
import { LoginServer,LoginPostServer } from '../../api/home';


const Login = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage()
  const [userName, setUserName] = useState(null)
  const [passWord, setPassWord] = useState(null)
  const [inpit1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [token,setToken] = useState(null)
  const registe = () => {
    console.log(userName, passWord, token);
  }
  const toHome = () => {
    if (inpit1 == userName && input2 == passWord) {
      localStorage.setItem("token", token);
      messageApi.info('登陆成功!');
      navigate('/home', {
        replace: false,
      });
    }else{
      messageApi.error('账号活密码错误，登陆失败');
    }
  }

  let a, b;
  useEffect(() => {
    // const inputValue = {userName:'admin',passWord:'123456'}
    // axios.post('http://localhost:4000/user/login',inputValue)
    // .then(res=>{
    //   if(res.success){
    //     console.log(res);
    //     // res数据处理。。。。。。。。。
    //     //登录跳转
    //   }else{
    //     //跳转失败
    //   }
    // })
    // axios.get("http://localhost:4000/result")
    //   .then(res => {
    //     console.log(res.data.data);
    //     const shuju = res.data.data.data
    //     setUserName(shuju.userName)
    //     setPassWord(shuju.password)
    //     setToken(res.data.data.token)
        
    //   })
  },[userName,passWord]);

  return (
    <div className={style.login}>
      {contextHolder}
      <div className={style.form}>
        <div>

          <Row className={style.arow}>
            <Col span={4}><p>用户名:</p></Col>
            <Col span={20}>
              <Input
                placeholder="Basic usage"
                value={inpit1}
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
                value={input2}
                onChange={e => setInput2(e.target.value)} />
            </Col>
          </Row>
        </div>
        <br />
        <Row>
          <Col span={4} offset={6}>
            <Button onClick={toHome}>登录</Button>
          </Col>
          <Col span={4} offset={6}>
            <Button onClick={registe}>注册</Button>
          </Col>
        </Row>

      </div>
    </div>
  );
}

export default Login;
