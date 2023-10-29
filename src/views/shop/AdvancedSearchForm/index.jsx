import React, { useState, useEffect ,useRef} from 'react';
import { Button, Col, Form, Input, Row, Select, Space, theme, Tag, DatePicker, Modal, Table, Radio, ConfigProvider } from 'antd';
import { useNavigate } from 'react-router-dom';
import api from '../../../utils/http'
import moment from 'moment';


const AdvancedSearchForm = ({ onValueChange }) => {
  const navigate = useNavigate();
  const { Option } = Select;
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const formStyle = { maxWidth: 'none', background: token.colorFillAlter, borderRadius: token.borderRadiusLG, padding: 24, };
  const [formData, setFormData] = useState({});


  const handleSubmit = () => {
    // 处理或发送表单数据——这个id不明确
    console.log(formData,'fome');
    api.get('/good/findone/' + formData.goodId)
      .then(res => {
        console.log(res);
        onValueChange(res.data.data)
      })
  };

  const resetForm = () => {
    api.get('/good/findall')
    .then(res => {
      onValueChange(res.data.data)
    }).catch(err => {
      console.log(err);
    })
    form.resetFields();
  }

  return (
    <Form form={form} name="advanced_search" style={formStyle} >
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            name={`roleID`}
            label={`权益ID`}
            rules={[{ required: true, message: '请输入', },]} >
            <Input placeholder="placeholder" onChange={(e) => setFormData({ ...formData, roleID: e.target.value })} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={`goodId`}
            label={`goodId`}
            rules={[{ required: true, message: '请输入', },]} >
            <Input placeholder="placeholder" onChange={(e) => setFormData({ ...formData, goodId: e.target.value })} />
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
            <Input placeholder="placeholder" disabled onChange={(e) => setFormData({ ...formData, goodsName: e.target.value })} />
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
            <Input placeholder="placeholder" disabled onChange={(e) => setFormData({ ...formData, role: e.target.value })} />
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
            <Select disabled onChange={(value) => setFormData({ ...formData, goodsStatus: value })}>
              <Option value="1">suib</Option>
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
            <DatePicker disabled onChange={(date, dateString) => setFormData({ ...formData, endTime: dateString })} />
          </Form.Item>
        </Col>


      </Row>
      <Row gutter={24}>
        <Col span={2} offset={20}>
          <Button onClick={resetForm}> 重置</Button>
        </Col>
        <Col span={2} >
          <Button type='primary' onClick={handleSubmit}>查询</Button>
        </Col>
      </Row>

    </Form>
  );
};
export default AdvancedSearchForm