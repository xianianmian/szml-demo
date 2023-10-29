import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu, theme, Button, Col, Row, Dropdown, Avatar, Space } from 'antd';
import { DownOutlined, SmileOutlined ,ShopTwoTone, UserOutlined } from '@ant-design/icons';

import { useState, useEffect } from 'react';
// import Dropdowns from '../test/index'

const { Header, Content, Sider } = Layout;


const items = [

  {
    label: '商品列表',
    key: 'shop',
  },

  {
    label: '其它',
    key: 'other',
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const { token: { colorBgContainer }, } = theme.useToken();
  const dropitems = [
    {
      key: '1',
      label: (
        <Button onClick={() => { navigate('/login', { replace: false }) }}>退出</Button>
      ),
    },
    {
      key: '2',
      label: (
        <Button onClick={() => { navigate('/test', { replace: false }) }}>test</Button>
      ),
    },
  
  ];
  const Dropdowns = () => (
    <Space direction="vertical">
        <Dropdown
          menu={{
            dropitems,
          }}
          placement="bottom"
        >
          ddd
          {/* <Avatar icon={UserOutlined}></Avatar> */}
        </Dropdown>
    </Space>
  );

  const toPath = (e) => {
    console.log('click ', e);
    if (e.key == 'shop') {
      navigate('shop', {
        replace: false,
      });
    } else if (e.key == 'other') {
      navigate('other', {
        replace: false,
      });
    } else if (e.key == 'shopdetail') {
      navigate('shopdetail', {
        replace: true
      })
    }
  };
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', color: 'white', justifyContent: "space-between" }} >
        <Row>
          <Col span={24}>
            <h2>商品信息管理</h2>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
              {/* <Dropdowns></Dropdowns> */}
              <Button onClick={() => { navigate('/login', { replace: false }) }}>退出</Button>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer, }}>
          <Menu
            onSelect={toPath}
            style={{ height: '100%', borderRight: 0 }}
            defaultOpenKeys={['shop']}
            defaultSelectedKeys={['shop']}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px', }} >
          <Content style={{ padding: 24, margin: 0, minHeight: 280, background: colorBgContainer, }}>
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default HomePage;