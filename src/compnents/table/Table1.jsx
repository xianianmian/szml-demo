import React from 'react';
import { Divider, Table ,Button,Space} from 'antd';

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
        <Button size="min">编辑</Button>
        <Button size="min">删除</Button>
        
      </Space>
    ),
  },
];

const data = [
  
];

const   TestOne = () => {
  return (
    <div>
      <Table  columns={columns}  
        dataSource={data} />
    </div>
  )
};

export default   TestOne;
