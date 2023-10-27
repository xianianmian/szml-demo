import React, { useState, useEffect } from 'react';
import {Row,Col} from 'antd'
import api from '../../utils/http';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Button,  Table,  } from 'antd';

const isAuthenticated = () => {
  // 在这里检查本地存储中的 token 是否存在或有效
  const token = localStorage.getItem('qcby-token');
  return !!token; // 返回 true 或 false
};

const Atable = ()=>{
  const location = useLocation();
  const id = location.state?.id
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const columns = [
    { title: 'ID', dataIndex: 'Id', key: 'Id' },
    { title: '操作人', dataIndex: 'optioner', key: 'optioner' },
    { title: 'optionTime', dataIndex: 'optionTime', key: 'optionTime' },
    { title: '状态', dataIndex: 'status', key: 'status' },
    { title: '商品Id', dataIndex: 'goodId', key: 'goodId' },
  ];

  useEffect(()=>{
    if(id){
      api.get('/good/get_good_conversion/'+id)
      .then(res=>{
        console.log(res.data.data);
        setTableData(res.data.data)
      })
    }
  },[])


  return (
    <div>
      <Table columns={columns} dataSource={tableData} />
    </div>
  )


}


const OtherPage = ()=>{
  const navigate = useNavigate();
  const location = useLocation();  const id = location.state?.id
  const [detailFormData,setDetailFormData] = useState({})


  useEffect(()=>{
    if(id){
          api.get('/good/get_good_information/'+id)
    .then(res=>{
      console.log(res.data.data);
      setDetailFormData(res.data.data)
    })
    }
  },[])
  const shengpi = ()=>{

    api.post('/good/agree_submit/'+id,)
    .then(res=>{
      console.log(res);
    }).catch(err =>{
      console.log(err);
    })
  }
  const editFun = ()=>{
    api.post('/good/edit_stage/'+id)
    .then(res=>{
      console.log(res);
    }).catch(err =>{
      console.log(err);
    })
  }
  const shengpiTongGuo = ()=>{
    api.post('/good/agree_submit/'+id)
    .then(res=>{
      console.log(res);
    }).catch(err =>{
      console.log(err);
    })
  }
  const shengpiBohui = ()=>{
    api.post('/good/reject_submit/'+id)
    .then(res=>{
      console.log(res);
    }).catch(err =>{
      console.log(err);
    })
  }
  const shangxian = ()=>{
    api.post('/good/go_online/'+id)
    .then(res=>{
      console.log(res);
    }).catch(err =>{
      console.log(err);
    })
  }

  return (
    <div>
      <h2>基本信息</h2>
      <Row>
        <Col span={8}>商品名称：{detailFormData.id}</Col>
        <Col span={8}>权限类型：{detailFormData.updateTime}</Col>
        <Col span={8}>描述信息</Col>
      </Row>
      <br />
      <Row>
        <Col span={8}>富文本</Col>
        <Col span={8}>类目</Col>
        <Col span={8}>服务保障</Col>
      </Row>
      <br />
      <Row>
        <Col span={8}>兑换限制</Col>
        <Col span={8}>创建时间</Col>
        <Col span={8}>col-8</Col>
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
export default OtherPage