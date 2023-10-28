package com.mapper;

import com.domain.ProductConversionProcess;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface ProductConversionProcessMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ProductConversionProcess record);

    int insertSelective(ProductConversionProcess record);

    ProductConversionProcess selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ProductConversionProcess record);

    int updateByPrimaryKey(ProductConversionProcess record);

    @Select("select * from product_conversion_process where good_id=#{id}")
    List<ProductConversionProcess> get_good_conversion(Integer id);
}