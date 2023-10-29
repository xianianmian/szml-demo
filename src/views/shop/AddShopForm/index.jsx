import React, { useState, useEffect ,useRef} from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Col, Form, Input, Row, Select, Space, theme, Tag, DatePicker, Modal, Table, Radio, ConfigProvider } from 'antd';
import api from '../../../utils/http'

const AddShopForm = (props) => {
  const { onFunc,onUpdate,isModalOpen } = props

  const { Option } = Select;
  const { initData } = props;
  const [form] = Form.useForm();
  const [detailData, setDetailData] = useState(initData);
  const [formData, setFormData] = useState({});
  const submitNew = () => {
    api.post('good/addgood', formData)
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    onUpdate()
    onFunc()
  }
  return (
    <div>
      <Modal 
      title="新增信息"  
      open={isModalOpen} 
      onCancel={onFunc} 
      okText={"提交"}
      onOk={submitNew}
      >
      <Form form={form}
        initialValues={detailData}
        style={{ maxWidth: 600, }}
      >
        <Form.Item
          name={`managerId`}
          label={`权益ID`}
          rules={[{ required: true, message: '请输入', },]} >
          <Input placeholder="placeholder" onChange={(e) => setFormData({ ...formData, managerId: e.target.value })} />
        </Form.Item>
        <Form.Item
          name={`createrId`}
          label={`createrId`}
          rules={[{ required: true, message: '请输入', },]} >
          <Input placeholder="placeholder" onChange={(e) => setFormData({ ...formData, createrId: e.target.value })} />
        </Form.Item>
        <Form.Item
          name={`goodId`}
          label={`goodId`}
          rules={[{ required: true, message: '请输入', },]} >
          <Input placeholder="placeholder" onChange={(e) => setFormData({ ...formData, goodId: e.target.value })} />
        </Form.Item>
        <Form.Item
          name={`max`}
          label={`库存`}
          rules={[
            {
              required: true,
              message: '请输入',
            },
          ]}
        >
          <Input placeholder="placeholder" onChange={(e) => setFormData({ ...formData, max: e.target.value })} />
        </Form.Item>
        <Form.Item
          name={`count`}
          label={`count`}
          rules={[
            {
              required: true,
              message: '请输入',
            },
          ]}
        >
          <Input placeholder="placeholder" onChange={(e) => setFormData({ ...formData, count: e.target.value })} />
        </Form.Item>
        <Form.Item
          name={`status`}
          label={`状态`}
          rules={[
            {
              required: true,
              message: '请输入',
            },
          ]}
        >
          <Select onChange={(value) => setFormData({ ...formData, status: value })}>
            <Option value="0">审批完下线</Option>
            <Option value="1">上线</Option>
            <Option value="2">未审批下线</Option>
            <Option value="3">草稿</Option>
          </Select>
        </Form.Item>
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
          <DatePicker onChange={(date, dateString) => setFormData({ ...formData, endTime: dateString })} />
        </Form.Item>
        <Form.Item
          name={`startTime`}
          label={`开始时间`}
          rules={[
            {
              required: true,
              message: '请输入',
            },
          ]}
        >
          <DatePicker onChange={(date, dateString) => setFormData({ ...formData, startTime: dateString })} />
        </Form.Item>
        {/* <Button onClick={submitNew}>提交</Button> */}
      </Form>
      </Modal>
    </div>
  )
}
export default AddShopForm