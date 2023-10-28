package com.domain;

import lombok.Data;

@Data
public class ProductConversionProcess {
    private Integer id;

    private String status;

    private String goodId;

    private String optionTime;

    private String optioner;
}