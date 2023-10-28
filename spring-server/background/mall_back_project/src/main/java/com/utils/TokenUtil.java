package com.utils;

import com.domain.User;


import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class TokenUtil {


    private static Map<String, User> tokenMap = new HashMap<>();


    public static String generateToken(User User){
        //生成唯一不重复的字符串
        String token = UUID.randomUUID().toString();
        Byte role = User.getRole();
        token+=role;
        token+=role;
        tokenMap.put(token,User);
        return token;
    }

    /**
     * 验证token是否合法
     * @param token
     * @return
     */
    public static  boolean verify(String token){
        return tokenMap.containsKey(token);
    }

    public static User genUser(String token){
        return tokenMap.get(token);
    }

}