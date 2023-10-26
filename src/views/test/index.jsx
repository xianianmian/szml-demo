import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Form, Input, Row, Select, Space, theme, Tag, DatePicker, Modal, Table, Radio } from 'antd';

const TestPage = () => {

  return (
    <div>
      <h2>基本信息</h2>
      <Row>
        <Col span={8}>商品名称：</Col>
        <Col span={8}>权限类型：</Col>
        <Col span={8}>描述信息</Col>
      </Row>
      <Row>
        <Col span={8}>富文本</Col>
        <Col span={8}>类目</Col>
        <Col span={8}>服务保障</Col>
      </Row>
      <Row>
        <Col span={8}>兑换限制</Col>
        <Col span={8}>创建时间</Col>
        <Col span={8}>col-8</Col>
      </Row>
    </div>
  );
};

export default TestPage



