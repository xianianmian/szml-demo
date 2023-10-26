import React, { Component ,useEffect} from 'react';
import {Row,Col} from 'antd'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const isAuthenticated = () => {
  // 在这里检查本地存储中的 token 是否存在或有效
  const token = localStorage.getItem('qcby-token');
  return !!token; // 返回 true 或 false
};


const OtherPage = ()=>{
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state?.id;
  return (
    <div>
      <h2>基本信息</h2>
      <Row>
        <Col span={8}>商品名称：{id}</Col>
        <Col span={8}>权限类型：</Col>
        <Col span={8}>描述信息</Col>
      </Row>
      <br />
      <Row>
        <Col span={8}>富文本</Col>
        <Col span={8}>类目</Col>
        <Col span={8}>服务保障</Col>
      </Row>
      <br />
      <Row>
        <Col span={8}>兑换限制</Col>
        <Col span={8}>创建时间</Col>
        <Col span={8}>col-8</Col>
      </Row>
    </div>
  )
}
export default OtherPage