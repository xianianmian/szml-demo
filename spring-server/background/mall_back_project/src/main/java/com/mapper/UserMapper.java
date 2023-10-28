package com.mapper;

import com.domain.User;
import org.apache.ibatis.annotations.Select;

public interface UserMapper {
    int deleteByPrimaryKey(Integer idtUser);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer idtUser);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    @Select("SELECT * FROM user WHERE user_name = #{username}")
    User findByUsername(String username);
}