package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import com.domain.User;
import com.mapper.UserMapper;
import com.service.iml.UserService;
@Service
public class UserServiceImpl implements UserService{

    @Resource
    private UserMapper UserMapper;

    @Override
    public int deleteByPrimaryKey(Integer idUser) {
        return UserMapper.deleteByPrimaryKey(idUser);
    }

    @Override
    public int insert(User record) {
        return UserMapper.insert(record);
    }

    @Override
    public int insertSelective(User record) {
        return UserMapper.insertSelective(record);
    }

    @Override
    public User selectByPrimaryKey(Integer idUser) {
        return UserMapper.selectByPrimaryKey(idUser);
    }

    @Override
    public int updateByPrimaryKeySelective(User record) {
        return UserMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(User record) {
        return UserMapper.updateByPrimaryKey(record);
    }

    @Autowired
    private UserMapper userDao;

    public User validateUser(String username, String password) {
        // 查询数据库中是否存在匹配的用户
        User user = userDao.findByUsername(username);

        if (user != null && user.getPassword().equals(password)) {
            // 用户名和密码匹配，校验通过
            return user;
        } else {
            // 用户名或密码错误，校验失败
            return null;
        }
    }

}
