package com.utils;

import com.domain.ProductConversionProcess;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Generate_util {
    public static ProductConversionProcess generateProductTable(String status,String CreaterId,String GoodId){
        ProductConversionProcess ProductConversionProcess = new ProductConversionProcess();
        //操作者不一定为商品所有者
        ProductConversionProcess.setOptioner(String.valueOf(CreaterId));
        LocalDateTime now = LocalDateTime.now();
        //id 写死
        ProductConversionProcess.setId(2);
        // 按照 MySQL datetime 格式进行格式化
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        String formattedDateTime = now.format(formatter);
        ProductConversionProcess.setOptionTime(formattedDateTime);
        ProductConversionProcess.setStatus(String.valueOf(status));
        ProductConversionProcess.setGoodId(String.valueOf(GoodId));
        return ProductConversionProcess;
    }
}
