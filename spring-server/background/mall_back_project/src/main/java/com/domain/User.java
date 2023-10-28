package com.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
@Data
@ApiModel(value="用户登录表单对象",description="用户登录表单对象")
public class User {
    private Integer idtUser;

    /**
     * 0 小二  1 管理员
     */

    @ApiModelProperty(value = "角色，0为小二，1为超级管理员",required = false,example = "root",allowableValues = "{0,1}")
    private Byte role;

    private String phone;
    @ApiModelProperty(value = "用户名",required = true,example = "root")
    private String userName;
    @ApiModelProperty(value = "密码",required = true,example = "daler")
    private String password;

    private Byte autoLabel;
}