import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Space, Modal, Table, Row,Col,Tag} from 'antd';
import api from '../../../utils/http'
import AddShopForm from '../AddShopForm'


const TableOne = ({ value }) => {
  // console.log(value, 'value');
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState(value);
  const [initData, setInitData] = useState([])
  const AddShopFormRef = useRef(null);

  const handleViewClick = (record) => {
    setInitData(record)
    console.log(record);
    navigate('../shopdetail', { state: { id: record.id } })
  }

  const openModal = () => {
    setIsModalOpen(true)
  };
  const closeModal = () => {
    console.log('这里触发了');
    setIsModalOpen(false)
  };

  useEffect(() => {
    setTableData(value)
  }, [value])

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
          <Button size="min" >删除</Button>
        </Space>
      ),
    },
  ];

  const getTableData = () => {
    api.get('/good/findall')
      .then(res => {
        console.log('我刷新了');
        setTableData(res.data.data)
      }).catch(err => {
        console.log(err);
      })
  }
  useEffect(() => { getTableData() }, [])

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