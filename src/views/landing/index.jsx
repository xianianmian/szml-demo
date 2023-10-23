import React, { Component } from 'react';

import { Col, Row ,Button,Card} from 'antd';
import { NavLink, Link, useNavigate ,Outlet} from 'react-router-dom';
import  './landing.css'
import {
  TaobaoOutlined
} from '@ant-design/icons';

const LandingPage =()=>  {
  const navigate = useNavigate();
  const toHome = () => {
    console.log('back');
    navigate('/login', {
      replace: false,
    });
  }
    return ( 
    <div>
      <div className='layout'>
        <div className="header">
          <div className="headerleft">
          <Row>
            <Col span={4}><TaobaoOutlined/></Col>
            <Col span={6}>首页</Col>
            <Col span={6}>用户运营</Col>
          </Row>
          </div>
          <div className="headerright">
            <Button onClick={toHome}>登录/注册</Button>
          </div>
        </div>
        <div className="img">随便找张图<img src="" alt="" /></div>
        <div className="context">
        <Row>
          <Col span={24}><h2>用户运营</h2></Col>
        </Row>
        <Row>
          <Col span={24}>去ant-desig看一下，把这个row标签的用法学一下
          <p>https://ant.design/components/grid-cn  有不会的标签就看一下文档。这里的标签样式改不了就尝试用原生的html+css实现</p>
          </Col>
        </Row>
        <Row>
          <Col span={8}><Card></Card></Col>
          <Col span={8}><h2>用户运营</h2></Col>
          <Col span={8}><h2>用户运营</h2></Col>
        </Row>
        </div>
        <div className="footer">sdfsdfghjkl</div>
      </div>
    </div>
    );
}
 
export default LandingPage;