package com.domain;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.math.BigDecimal;
import java.util.Date;

@ApiModel(value="商品用户对应表单对象",description="商品用户对应表单对象")
@Data
public class ProductUserCorresponding {
    @ApiModelProperty(value = "标识唯一id",required = true)
    private Integer id;
    @ApiModelProperty(value = "管理人id")
    private Integer managerId;
    @ApiModelProperty(value = "创建者id",required = true)
    private Integer createrId;
    @ApiModelProperty(value = "...id 暂时不用管")
    private Integer proxyerId;
    @ApiModelProperty(value = "...id 暂时不用管")
    private String userGoodcol;
    @ApiModelProperty(value = "对应产品id")
    private Integer goodId;
    @ApiModelProperty(value = "...id 不用管")
    private Integer providerId;
    @ApiModelProperty(value = "...id 不用管")
    private Integer cityId;
    @ApiModelProperty(value = "现金单价 不用管")
    private BigDecimal cashPrice;
    @ApiModelProperty(value = "积分单价 不用管")
    private Integer jifenPrice;
    @ApiModelProperty(value = "余量 不用管")
    private Integer count;
    @ApiModelProperty(value = "创建时间")
    private Date createTime;
    @ApiModelProperty(value = "更新时间")
    private Date updateTime;
    @ApiModelProperty(value = "展示时间")
    private Date showTime;
    @ApiModelProperty(value = "开始时间")
    private Date startTime;
    @ApiModelProperty(value = "结束时间")
    private Date endTime;
    @ApiModelProperty(value = "商品当前状态,    0 审批完下线\n" +
            "    1 上线\n" +
            "    2 未审批下线(编辑完成)                草稿\n" +
            "    3 审核状态\n" +
            "    4 草稿")
    private String status;
    @ApiModelProperty(value = "最大购买量")
    private Integer max;
    @ApiModelProperty(value = "商品保护权益")
    private String goodProtect;
    @ApiModelProperty(value = "商品描述")
    private String goodDescribe;
}