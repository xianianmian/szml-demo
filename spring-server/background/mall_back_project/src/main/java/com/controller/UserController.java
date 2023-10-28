package com.controller;

import com.domain.User;
import com.service.iml.UserService;
import com.utils.Result;
import com.utils.TokenUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Api(tags = "用户相关API")
@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private HttpSession session;
    @ApiOperation(value = "用户登录")
    @RequestMapping(value = "login",method ={RequestMethod.POST})
    public Result login(@RequestBody User user){
        Map<String,Object> map = new HashMap<>();
        if(StringUtils.isEmpty(user.getUserName()) || StringUtils.isEmpty(user.getPassword()) ){
            map.put("msg","用户或者密码为空！");
            return new Result<Map<String,Object>>(false,map,"");
        }
        User geUser =userService.validateUser(user.getUserName(), user.getPassword());
        if (geUser != null){
            String token= TokenUtil.generateToken(geUser);
            map.put("data",geUser);
            map.put("token",token);
            session.setAttribute("username",geUser.getUserName());
        }else{
            map.put("msg","用户名或密码错误！");
            return new Result<Map<String,Object>>(false,map,"");
        }
        return new Result<Map<String,Object>>(true,map,"");
    }


}