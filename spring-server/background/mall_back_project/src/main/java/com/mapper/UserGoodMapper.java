package com.mapper;

import com.domain.UserGood;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;

public interface UserGoodMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(UserGood record);

    int insertSelective(UserGood record);

    UserGood selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserGood record);

    int updateByPrimaryKey(UserGood record);

    @Select("select * from user_good where creater_id=#{id} ")
    List<UserGood> findone(Integer id);

    @Select("SELECT * FROM user_good ")
    List<UserGood> findAll();

    @Update("UPDATE user_good set status=#{status} where id=#{id} ")
    boolean change_approval(Integer id,String status);
}