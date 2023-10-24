import React, { Component } from 'react';
import tupian from './R-C.jpg'
import { Col, Row ,Button,Card, Avatar} from 'antd';
import { NavLink, Link, useNavigate ,Outlet} from 'react-router-dom';
import  './landing.css'


const LandingPage =()=>  {
  const navigate = useNavigate();
  const toHome = () => {
    console.log('back');
    navigate('/login', {
      replace: false,
    });
  }
    const { Meta } = Card;
    return ( 
    <div>
      <div className='layout'>
        <div className="header">
          <div className="headerleft">
          <Row>
            <Col span={4}>
                <div>
                    <img src="2.png" alt=""></img>    
                </div>
            </Col>
            <Col span={6}>首页</Col>
            <Col span={6}>用户运营</Col>
          </Row>
          </div>
          <div className="headerright">
            <Button onClick={toHome}>登录/注册</Button>
          </div>
        </div>
        <div><img src={tupian} className="img" alt="" /></div>

        <div className="context">
        <Row>
            <Col push={11}>
                <h2>用户运营</h2>
            </Col>
        </Row>
        <Row>
          <Col push={10}>
          <p>叽里呱啦叽里呱啦叽里呱啦叽里呱啦叽里</p>
          </Col>
        </Row>
                    <Row>
                        <Col span={8} push={4}>
                            <Card
                                style={{ width: 300 }}
                            >
                                <Meta
                                    avatar={<Avatar src="" />}
                                    title="渠道运营"
                                    description="叽里呱啦叽里呱啦"
                                />
                            </Card>
                        </Col>
                        <Col span={8} push={2}>
                        <Card
                                style={{ width: 300 }}
                            >
                                <Meta
                                    avatar={<Avatar src="" />}
                                    title="活跃运营"
                                    description="叽里呱啦叽里呱啦"
                                />
                            </Card>
                        </Col>
                        <Col span={8}>
                        <Card
                                style={{ width: 300 }}
                            >
                                <Meta
                                    avatar={<Avatar src="" />}
                                    title="支付宝会员"
                                    description="叽里呱啦叽里呱啦"
                                />
                            </Card>
                        </Col>
                    </Row>
        </div>
        <div className="footer">叽里呱啦叽里呱啦</div>
      </div>
    </div>
    );
}
 
export default LandingPage;