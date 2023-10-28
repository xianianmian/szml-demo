package com.domain;

import lombok.Data;

@Data
public class UserGood {
    private Integer id;

    private String managerId;

    private Integer createrId;

    private String proxyerId;

    private String userGoodcol;

    private Integer goodId;

    private String providerId;

    private String cityId;

    private String cashPrice;

    private String jifenPrice;

    private String count;

    private String createTime;

    private String updateTime;

    private String showTime;

    private String startTime;

    private String endTime;

    private String status;

    private String max;

    private String goodProtect;

    private String goodDescribe;
}


    /*
    0 审批完下线
    1 上线
    2 未审批下线(编辑完成)                草稿
    3 审核状态
    4 草稿
     */