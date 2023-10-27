import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './shop.css'
import { Button, Col, Form, Input, Row, Select, Space, theme, Tag, DatePicker, Modal, Table, Radio } from 'antd';
import api from '../../utils/http'
import moment from 'moment';
//redux
// import { configureStore, createSlice } from '@reduxjs/toolkit';



const { Option } = Select;

const isAuthenticated = () => {
  // 在这里检查本地存储中的 token 是否存在或有效

  const token = localStorage.getItem('qcby-token ');
  return !!token; // 返回 true 或 false
};

//条件查询组件
const AdvancedSearchForm = () => {
  const navigate = useNavigate();

  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const formStyle = { maxWidth: 'none', background: token.colorFillAlter, borderRadius: token.borderRadiusLG, padding: 24, };
  const [formDataInit,setFormDataInit] = useState( {
    roleID: '1',
    goodsName: 'cat',
    role: 1,
    goodsStatus: '1',
    endTime: moment('2023-10-31', 'YYYY-MM-DD'), 
  })
  const [formData, setFormData] = useState({});

  const [tableData,setTableData] = useState({})

  const handleSubmit = () => {
    // 处理或发送表单数据
    console.log(formData);
    //一个查询——————要求重置表格数据
    api.get('/good/findone/'+formData.roleID)
    .then(res=>{
      console.log(res);
      tableData(res.data.data)
    })
  };

  const resetForm = ()=>{
    form.resetFields();
  }

  return (
    <Form form={form} name="advanced_search"  style={formStyle} >
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

//新增数据modal页面
const AddShopForm = (props) => {
  const { initData } = props;
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const [detailData, setDetailData] = useState(initData)

  const [formData, setFormData] = useState({});

  useEffect(() => {
    console.log("aa", detailData);
  }, [detailData])
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div>
      <Form form={form}
        initialValues={detailData}
        style={{ maxWidth: 600, }}
      >
        <Form.Item
          name={`roleID`}
          label={`权益ID`}
          rules={[{ required: true, message: '请输入', },]} >
          <Input placeholder="placeholder" onChange={(e) => setFormData({ ...formData, roleID: e.target.value })} />
        </Form.Item>
        <Form.Item
          name={`count`}
          label={`数量`}
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
          name={`goodsStatus`}
          label={`商品状态`}
          rules={[
            {
              required: true,
              message: '请输入',
            },
          ]}
        >
          <Select onChange={(value) => setFormData({ ...formData, goodsStatus: value })}>
            <Option value="1">suib</Option>
            <Option value="2">abababa</Option>
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
      </Form>
    </div>
  )
}
//表格组件
const TestOne = (props) => {
  const {chaxunData} = props


  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [initData, setInitData] = useState([])

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleViewClick = (record) => {
    // setIsModalOpen(true);
    
    setInitData(record)
    console.log(record);
    navigate('../other', { state: { id: record.id } });
  }
  const idchaxun = (e) =>{
    api.get('/good/findone'+e)
    .then(res=>{
      console.log(res);
    })
  }
  const columns = [
    { title: '权益ID', dataIndex: 'managerId', key: 'managerId' },
    { title: '库存', dataIndex: 'max', key: 'max' },
    { title: 'count', dataIndex: 'count', key: 'count' },
    { title: 'startTime', dataIndex: 'startTime', key: 'startTime' },
    { title: 'endTime', dataIndex: 'endTime', key: 'endTime' },
    { title: '状态', dataIndex: 'status', key: 'status' },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button size="min" onClick={() => handleViewClick(record)} type='primary'>查看</Button>
          {/* <Button size="min" onClick={idchaxun}>删除</Button> */}
        </Space>
      ),
    },
  ];



  const getTableData = () => {
    api.get('http://localhost:9095/good/findall')
      .then(res => {
        // console.log(res.data.data);
        setTableData(res.data.data)
      }).catch(err => {
        console.log(err);
      })
  }
  useEffect(() => { getTableData() }, [])

  return (
    <div>
      <Table columns={columns} dataSource={tableData} />
      <Modal title="详细信息" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <AddShopForm initData={initData}></AddShopForm>
      </Modal>
    </div>
  )
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
          <Col span={4} offset={16}><Button type='primary' size='min' onClick={showModal}>新建</Button></Col>
        </Row>
        <br />
        <Row>
          <Col span={24}>
            <TestOne></TestOne>
          </Col>
        </Row>
        <Modal title="新增信息" open={isModalOpen}  onCancel={handleCancel}>
          <AddShopForm></AddShopForm>
        </Modal>
      </div>

    </div>
  )
}
export default ShopPage