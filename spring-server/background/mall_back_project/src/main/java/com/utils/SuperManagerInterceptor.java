package com.utils;

import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SuperManagerInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String token = request.getHeader("qcby-token");
        if (token.substring(token.length() - 2) =="11") {
            // 未登录跳转到登录界面
            throw  new RuntimeException("no login!");
        } else {
            return true;
        }
    }
}
