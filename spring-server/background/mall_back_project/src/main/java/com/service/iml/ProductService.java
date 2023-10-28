package com.service.iml;

import com.domain.Product;
public interface ProductService{


    int deleteByPrimaryKey(Integer catid);

    int insert(Product record);

    int insertSelective(Product record);

    Product selectByPrimaryKey(Integer catid);

    int updateByPrimaryKeySelective(Product record);

    int updateByPrimaryKey(Product record);

}
