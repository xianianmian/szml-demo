import React from 'react';
import { Divider, Table ,Button,Space} from 'antd';

const columns = [
  { title: '用户ID', dataIndex: 'createrId', key: 'createrId' },
  { title: '特权ID', dataIndex: 'proxyerId', key: 'proxyerId' },
  { title: '供应商ID', dataIndex: 'providerId', key: 'providerId' },
  { title: '最大库存', dataIndex: 'max', key: 'max' },
  { title: '管理者ID', dataIndex: 'managerId', key: 'managerId' },
  { title: '现有数量', dataIndex: 'count', key: 'count' },
  { title: 'startTime', dataIndex: 'startTime', key: 'startTime' },
  { title: 'updateTime', dataIndex: 'updateTime', key: 'updateTime' },
  { title: '商品状态', dataIndex: 'status', key: 'status' },
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
