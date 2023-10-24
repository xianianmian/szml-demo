import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu, theme, Button, Col, Row, Dropdown, Avatar } from 'antd';
import { ShopTwoTone, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';


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
const dropDwonItems = [
  {
    key: '1',
    label: (
      <div>sfsdf</div>
    ),
  },
  {
    key: '2',
    label: (
      <div>sfsdf</div>
    ),
  },
];
const HomePage = () => {
  const { token: { colorBgContainer }, } = theme.useToken();
  const navigate = useNavigate();

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
            <Avatar size="small" icon={<UserOutlined />} />
          </Col>
          <Col span={8}>
            <Dropdown menu={{ dropDwonItems }} placement="bottom" arrow>
              <Button>账号信息</Button>
            </Dropdown>
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