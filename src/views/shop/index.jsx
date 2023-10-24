import React, { useState } from 'react';
import './shop.css'
import { DownOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Space, theme } from 'antd';

const { Option } = Select;

const AdvancedSearchForm = () => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);
  const formStyle = {
    maxWidth: 'none',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
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
            name={`beginTime`}
            label={`开始时间`}
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

function ShopPage() {
  const { token } = theme.useToken();
  const listStyle = {
    lineHeight: '200px',
    textAlign: 'center',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
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
          <Col span={4}>商品列表</Col>
          <Col span={4} offset={16}>col</Col>
        </Row>
        <Row>
          <Col span={24}>col</Col>
        </Row>
      </div>

    </div>
  )
}
export default ShopPage