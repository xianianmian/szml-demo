import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Button, Table, } from 'antd';
import { getDetailGoodConversion 
  ,getDetailGoodInformation,
  agreeSubmit,
  editStage,
  rejectSubmit,
  goOnline
} from '../../api/shopapi/shopdetail';
import moment from 'moment'
const isAuthenticated = () => {
  // 在这里检查本地存储中的 token 是否存在或有效
  const token = localStorage.getItem('qcby-token');
  return !!token; // 返回 true 或 false
};

const Atable = () => {
  const location = useLocation();
  const id = location.state?.id
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const columns = [
    { title: '权益ID', dataIndex: 'id', key: 'id' },
    { title: '商品ID', dataIndex: 'goodId', key: 'goodId' },
    { title: '操作时间', dataIndex: 'optionTime', key: 'optionTime' },
    { title: '操作角色ID', dataIndex: 'optioner', key: 'optioner' },
    { title: '商品状态', dataIndex: 'status', key: 'status' },

   
  ];
  useEffect(() => {
    if (id) {
      getDetailGoodConversion(id).then(res=>{
        console.log(res.data,'con');
        const resData = res.data
        resData.forEach((element,index) => {
          element.status = element.status == '0' ? '通过' : '未通过'
          element.optionTime = moment(element.optionTime).format('YYYY-MM-DD');
        });
        setTableData(resData)
      })
    }
  }, [])
  return (
    <div>
      <Table columns={columns} dataSource={tableData} />
    </div>
  )
}


const ShopDetail = () => {
  const navigate = useNavigate();
  const location = useLocation(); const id = location.state?.id
  const [detailFormData, setDetailFormData] = useState({})
  useEffect(() => {
    if (id) {
      getDetailGoodInformation(id).then(res=>{
        console.log(res.data,'info');
        const resData = res.data

          resData.createTime = moment(resData.createTime).format('YYYY-MM-DD');
          resData.endTime = moment(resData.endTime).format('YYYY-MM-DD');
          resData.showTime = moment(resData.showTime).format('YYYY-MM-DD');
          resData.startTime = moment(resData.startTime).format('YYYY-MM-DD');
          resData.updateTime = moment(resData.updateTime).format('YYYY-MM-DD');
        setDetailFormData(resData)
      })
    }
  }, [])
  const shengpi = () => {
    agreeSubmit(id).then(res=>console.log(res))
  }
  const editFun = () => {
    editStage(id).then(res=>console.log(res))
  }
  const shengpiTongGuo = () => {
    agreeSubmit(id).then(res=>console.log(res))
  }
  const shengpiBohui = () => {
    rejectSubmit(id).then(res=>console.log(res))
  }
  const shangxian = () => {
    goOnline(id).then(res=>console.log(res))
  }

  return (
    <div>
      <h2>基本信息</h2>
      <Row>
        <Col span={8}>商品名称：{detailFormData.goodDescribe}</Col>
        <Col span={8}>城市ID:{detailFormData.cityId}</Col>
        <Col span={8}>count:{detailFormData.count}</Col>
      </Row>
      <br />
      <Row>
        <Col span={8}>保修时间：{detailFormData.goodProtect}</Col>
        <Col span={8}>商品ID：{detailFormData.goodId}</Col>
        <Col span={8}>状态：{detailFormData.status}</Col>
      </Row>
      <br />
      <Row>
        <Col span={8}>跟新时间：{detailFormData.updateTime}</Col>
        <Col span={8}>创建时间:{detailFormData.createTime}</Col>
        <Col span={8}>结束时间：{detailFormData.endTime}</Col>
      </Row>
      <br />
      <div>
        <Button onClick={shengpi} type='primary'>发起审批</Button>
        <Button onClick={editFun} type='primary'>编辑</Button>
        <Button onClick={shengpiTongGuo} type='primary'>审批通过</Button>
        <Button onClick={shengpiBohui} type='primary'>审批驳回</Button>
        <Button onClick={shangxian} type='warning'>上线</Button>
      </div>
      <Row>
        <Col span={24}>
          <Atable></Atable>
        </Col>
      </Row>
    </div>
  )
}
export default ShopDetail