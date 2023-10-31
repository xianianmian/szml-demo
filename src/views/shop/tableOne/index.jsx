import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Space, Modal, Table, Row,Col,Tag} from 'antd';
import AddShopForm from '../AddShopForm'
import {getAlldata} from '../../../api/shopapi/shopapi'
import moment from 'moment'

const TableOne = ({ value }) => {
  // console.log(value, 'value');
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState(value);
  const [initData, setInitData] = useState([])
  const AddShopFormRef = useRef(null);

  const handleViewClick = (record) => {
    console.log(record,'ss');
    setInitData(record)
    navigate('../shopdetail', { 
      state: { id: record.id } ,
      replace:false
    })
  }

  const openModal = () => {
    setIsModalOpen(true)
  };
  const closeModal = () => {
    console.log('这里触发了');
    setIsModalOpen(false)
  };
  const columns = [
    { title: '用户ID', dataIndex: 'createrId', key: 'createrId' },
    { title: '特权ID', dataIndex: 'proxyerId', key: 'proxyerId' },
    { title: '供应商ID', dataIndex: 'providerId', key: 'providerId' },
    { title: '最大库存', dataIndex: 'max', key: 'max' },
    { title: '管理者ID', dataIndex: 'managerId', key: 'managerId' },
    { title: '现有数量', dataIndex: 'count', key: 'count' },
    { title: 'startTime', dataIndex: 'startTime', key: 'startTime' },
    { title: 'endTime', dataIndex: 'endTime', key: 'endTime' },
    { title: '商品状态', dataIndex: 'status', key: 'status' },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button size="min" onClick={() => handleViewClick(record)} type='primary'>查看</Button>
          <Button size="min" >删除</Button>
        </Space>
      ),
    },
  ];

  const getTableData = () => {
    getAlldata().then(res=>{
      console.log(res,'我刷新了');
      const resData = res.data
      resData.forEach((element,index) => {
        //格式化指定时间
        element.startTime = moment(element.startTime).format('YYYY-MM-DD');
        element.updateTime = moment(element.updateTime).format('YYYY-MM-DD');
        element.endTime = moment(element.endTime).format('YYYY-MM-DD');
      });
        setTableData(resData)
    })
  }
  useEffect(() => { 
    if(value != []){
      console.log('我先这里');
      setTableData(value)
    }
    getTableData() 
    
  }, [value])

  return (
    <div>
      <Row>
        <Col span={2}><Tag>商品列表</Tag></Col>
        <Col span={3} ><Button type='primary' size='min' onClick={openModal}>新建</Button></Col>
      </Row>
      <br />
      <Table columns={columns} dataSource={tableData} />
      <AddShopForm onFunc={closeModal} onUpdate={getTableData} isModalOpen={isModalOpen}></AddShopForm>
    </div>
  )
};
export default TableOne;