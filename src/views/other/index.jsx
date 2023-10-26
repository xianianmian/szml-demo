import React, { Component ,useEffect} from 'react';
import {Row,Col} from 'antd'
import { useNavigate } from 'react-router-dom';
const isAuthenticated = () => {
  // 在这里检查本地存储中的 token 是否存在或有效
  const token = localStorage.getItem('token');
  return !!token; // 返回 true 或 false
};


const OtherPage = ()=>{
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
          <Row>
      <Col span={24}>col</Col>
    </Row>
          <Row>
      <Col span={24}>col</Col>
    </Row>
    </div>
  )
}
export default OtherPage