package com.service;

import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import com.domain.Product;
import com.mapper.ProductMapper;
import com.service.iml.ProductService;
@Service
public class ProductServiceImpl implements ProductService{

    @Resource
    private ProductMapper ProductMapper;

    @Override
    public int deleteByPrimaryKey(Integer catid) {
        return ProductMapper.deleteByPrimaryKey(catid);
    }

    @Override
    public int insert(Product record) {
        return ProductMapper.insert(record);
    }

    @Override
    public int insertSelective(Product record) {
        return ProductMapper.insertSelective(record);
    }

    @Override
    public Product selectByPrimaryKey(Integer catid) {
        return ProductMapper.selectByPrimaryKey(catid);
    }

    @Override
    public int updateByPrimaryKeySelective(Product record) {
        return ProductMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(Product record) {
        return ProductMapper.updateByPrimaryKey(record);
    }

}
