package com.domain;

import lombok.Data;

@Data
public class Product {
    private Integer catid;

    private String name;

    private Integer parentCatid;

    private Integer level;

    private Integer priority;

    private String status;

    private String imgurl;

    private String leaf;


}