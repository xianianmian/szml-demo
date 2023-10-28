package com.service;

import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import com.mapper.ProductConversionProcessMapper;
import com.domain.ProductConversionProcess;
import com.service.iml.ProductConversionProcessService;

import java.util.List;

@Service
public class ProductConversionProcessServiceImpl implements ProductConversionProcessService{

    @Resource
    private ProductConversionProcessMapper ProductConversionProcessMapper;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return ProductConversionProcessMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(ProductConversionProcess record) {
        return ProductConversionProcessMapper.insert(record);
    }

    @Override
    public int insertSelective(ProductConversionProcess record) {
        return ProductConversionProcessMapper.insertSelective(record);
    }

    @Override
    public ProductConversionProcess selectByPrimaryKey(Integer id) {
        return ProductConversionProcessMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(ProductConversionProcess record) {
        return ProductConversionProcessMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(ProductConversionProcess record) {
        return ProductConversionProcessMapper.updateByPrimaryKey(record);
    }

    @Override
    public List<ProductConversionProcess> get_good_conversion(Integer id) {
        List<ProductConversionProcess> result=ProductConversionProcessMapper.get_good_conversion(id);
        return result;
    }


}
