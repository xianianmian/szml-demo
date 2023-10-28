package com.service.iml;

import com.domain.ProductConversionProcess;

import java.util.List;

public interface ProductConversionProcessService{


    int deleteByPrimaryKey(Integer id);

    int insert(ProductConversionProcess record);

    int insertSelective(ProductConversionProcess record);

    ProductConversionProcess selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ProductConversionProcess record);

    int updateByPrimaryKey(ProductConversionProcess record);

    List<ProductConversionProcess> get_good_conversion(Integer id);
}
