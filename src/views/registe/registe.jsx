import style from "./registe.module.css"
import { NavLink, Link, useNavigate, Outlet } from 'react-router-dom';
import { Button, Checkbox, Form, Input, Col, Row, message } from 'antd';
import React, { useState, useEffect } from 'react';
import bj from "./bj.jpg"
import Loginapi from '../../api/loginapi/loginapi'

const Registe = () => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage()

  const [inpit1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const toHome = () => {
    const inputValue = {
      userName: inpit1,
      password: input2
    }
    Loginapi(inpit1, input2).then(res => {
      console.log(res, 'ss');
      if (res.success) {
        const token = res.data.token
        localStorage.setItem("qcby-token ", token);
        message.success("登录成功")
        navigate('/home/shop', {
          replace: false,
        });
      } else {
        message.warning("登陆失败,密码错误")
      }
    })
  }
  const toLandin = () => {
    navigate('../landing', { replace: false })
  }
  return (
    <div className={style.login}>
      {contextHolder}
      <img src={bj} className={style.img} alt=''></img>
      <div className={style.form}>
        <div>
          <div className={style.title}>
            <h1>注册界面</h1>
            <p className={style.xd}>平台注册画面</p>
          </div>
          <Form 
          >
          <Form.Item
            name={"userName"}
            labelAlign="right"
            label={"用户名"}
            labelCol={
              [{span:4}]
            }
            rules={[
              {
                required: true,
                message: 'Please enter your username!',
              },
              {
                min: 4,
                message: 'Username must be at least 4 characters long!',
              },
            ]}
          >
            <Input
              placeholder="Basic usage"
              onChange={e => setInput1(e.target.value)} />
          </Form.Item>
          <br />
          <br />

          <Form.Item
            label={"密码"}
            labelAlign="left"
            name={"password"}
            labelCol={
              [{span:4}]
            }
            rules={[
              {
                required: true,
                message: 'Please enter your password!',
              },
              {
                min: 6,
                message: 'Password must be at least 6 characters long!',
              }
            ]}
          >
            <Input
              placeholder="Basic password"
              onChange={e => setInput2(e.target.value)}
            />
          </Form.Item>

          <br />
          <Row>

            <Col span={4} offset={6}>
              <Button onClick={toHome}>注册</Button>
            </Col>
            <Col span={4} offset={6}>
              <Button onClick={toLandin}>返回</Button>
            </Col>
          </Row>
          </Form>


          <div className={style.footer}>
            <p>www.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registe;
