package com.service;

import com.mapper.ProductConversionProcessMapper;
import com.mapper.ProductUserCorrespondingMapper;
import com.mapper.UserGoodMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import com.domain.UserGood;
import com.service.iml.UserGoodService;

import java.util.List;

@Service
public class UserGoodServiceImpl implements UserGoodService{

    @Resource
    private UserGoodMapper userGoodMapper;

    @Autowired
    private ProductConversionProcessMapper ProductConversionProcessMapper;

    @Autowired
    private ProductUserCorrespondingMapper ProductUserCorrespondingMapper;
    @Override
    public int deleteByPrimaryKey(Integer id) {
        return userGoodMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(UserGood record) {
        return userGoodMapper.insert(record);
    }

    @Override
    public int insertSelective(UserGood record) {
        return userGoodMapper.insertSelective(record);
    }

    @Override
    public UserGood selectByPrimaryKey(Integer id) {
        return userGoodMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(UserGood record) {
        return userGoodMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(UserGood record) {
        return userGoodMapper.updateByPrimaryKey(record);
    }

    @Override
    public List<UserGood> findone(Integer id) {
        return userGoodMapper.findone(id);
    }

    @Override
    public List<UserGood> findAll() {
        return userGoodMapper.findAll();
    }

    @Override
    public boolean submit_approval(Integer id) {
        String status ="申请审批";
        userGoodMapper.change_approval(id,status);
        return false;
    }
}
