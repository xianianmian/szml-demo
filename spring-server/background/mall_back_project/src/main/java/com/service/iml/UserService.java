package com.service.iml;

import com.domain.User;
public interface UserService{


    int deleteByPrimaryKey(Integer idUser);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer idUser);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);

    User validateUser(String username, String password);


}
