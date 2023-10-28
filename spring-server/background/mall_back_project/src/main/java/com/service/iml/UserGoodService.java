package com.service.iml;

import com.domain.UserGood;

import java.util.List;

public interface UserGoodService{


    int deleteByPrimaryKey(Integer id);

    int insert(UserGood record);

    int insertSelective(UserGood record);

    UserGood selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserGood record);

    int updateByPrimaryKey(UserGood record);

//    Boolean addGood(UserGood userGood);

    List<UserGood> findone(Integer id);
    List<UserGood> findAll();

    boolean submit_approval(Integer id);

}
