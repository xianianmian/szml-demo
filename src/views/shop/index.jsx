import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Col, Form, Input, Row, Select, Space, theme, Tag, DatePicker, Modal, Table, Radio, ConfigProvider } from 'antd';
import api from '../../utils/http'
import './shop.css'


import AdvancedSearchForm from './AdvancedSearchForm'
import TableOne from './tableOne';

//shop总页面
function ShopPage() {
  const [value, setValue] = useState('');
  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="shop">
      <div className="shopTop">
        <Row>
          <Col span={24}>
            <AdvancedSearchForm  onValueChange={handleValueChange} />
          </Col>
        </Row>
      </div>
      <div className="shopBottom">

        <Row>
          <Col span={24}>
            <TableOne value={value}></TableOne>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default ShopPage

