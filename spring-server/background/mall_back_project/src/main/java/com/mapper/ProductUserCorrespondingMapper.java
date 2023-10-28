package com.mapper;

import com.domain.ProductUserCorresponding;
import com.domain.User;
import com.domain.UserGood;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface ProductUserCorrespondingMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ProductUserCorresponding record);

    int insertSelective(ProductUserCorresponding record);

    ProductUserCorresponding selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ProductUserCorresponding record);

    int updateByPrimaryKey(ProductUserCorresponding record);

    @Update("UPDATE product_user_corresponding set status=#{status} where id=#{id} ")
    boolean change_approval(Integer id,String status);

    @Select("select * from product_user_corresponding where creater_id=#{id} ")
    List<ProductUserCorresponding> findone(Integer id);

    @Select("SELECT * FROM product_user_corresponding ")
    List<ProductUserCorresponding> findAll();
}