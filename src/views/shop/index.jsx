import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './shop.css'
import { Button, Col, Form, Input, Row, Select, Space, theme,Tag,DatePicker ,Modal} from 'antd';
import TestOne from '../../compnents/table/Table1'


const { Option } = Select;

const isAuthenticated = () => {
  // 在这里检查本地存储中的 token 是否存在或有效
  const token = localStorage.getItem('token');
  console.log(token,'ss');
  return !!token; // 返回 true 或 false
};

const AdvancedSearchForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/login');
    }
  }, [navigate]);


  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);
  const formStyle = {
    maxWidth: 'none',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Form form={form} name="advanced_search" style={formStyle} >
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            name={`roleID`}
            label={`权益ID`}
            rules={[
              {
                required: true,
                message: '请输入',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={`goodsName`}
            label={`商品名称`}
            rules={[
              {
                required: true,
                message: '请输入',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={`role`}
            label={`管理人`}
            rules={[
              {
                required: true,
                message: '请输入',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            name={`goodsStatus`}
            label={`商品状态`}
            rules={[
              {
                required: true,
                message: '请输入',
              },
            ]}
          >
            <Select>
              <Option value="1">
                suib
              </Option>
              <Option value="2">abababa</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={`endTime`}
            label={`结束时间`}
            rules={[
              {
                required: true,
                message: '请输入',
              },
            ]}
          >
             <DatePicker onChange={onChange} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={`beginTime`}
            label={`开始时间`}
            rules={[
              {
                required: true,
                message: '请输入',
              },
            ]}
          >
          <DatePicker onChange={onChange} />
          </Form.Item>
        </Col>
       
      </Row>
        <Row gutter={24}>
          <Col span={2} offset={20}>
            <Button> 重置</Button>
          </Col>
          <Col span={2} >
            <Button type='primary'>查询</Button>
          </Col>
        </Row>

    </Form>
  );
};

const addShopForm = ()=>{
  return (
    <div>
      
    </div>
  )
}

function ShopPage() {
  const { token } = theme.useToken();
  const listStyle = {
    lineHeight: '200px',
    textAlign: 'center',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="shop">
      <div className="shopTop">
        <Row>
          <Col span={24}>
            <AdvancedSearchForm />
          </Col>
        </Row>
      </div>
      <div className="shopBottom">
        <Row>
          <Col span={4}><Tag>商品列表</Tag></Col>
          <Col span={4} offset={16}><Button type='primary' size='min'onClick={showModal}>新建</Button></Col>
        </Row>
        <br />
        <Row>
          <Col span={24}>
            <TestOne></TestOne>
          </Col>
        </Row>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          
        </Modal>
      </div>

    </div>
  )
}
export default ShopPage