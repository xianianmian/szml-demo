package com.service;

import com.domain.ProductConversionProcess;

import com.domain.UserGood;
import com.mapper.ProductConversionProcessMapper;
import com.utils.Generate_util;
import io.swagger.models.auth.In;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import com.domain.ProductUserCorresponding;
import com.mapper.ProductUserCorrespondingMapper;
import com.service.iml.ProductUserCorrespondingService;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class ProductUserCorrespondingServiceImpl implements ProductUserCorrespondingService{

    @Autowired
    private ProductConversionProcessMapper ProductConversionProcessMapper;
    @Resource
    private ProductUserCorrespondingMapper ProductUserCorrespondingMapper;

    @Override
    public int insert(ProductUserCorresponding record) {
        return ProductUserCorrespondingMapper.insert(record);
    }

    @Override
    public int insertSelective(ProductUserCorresponding record) {
        return ProductUserCorrespondingMapper.insertSelective(record);
    }

    @Transactional
    public Boolean addGood(ProductUserCorresponding ProductUserCorresponding) {
        ProductUserCorresponding.setStatus("未审批下线");
        ProductUserCorrespondingMapper.insert(ProductUserCorresponding);
        //操作者不一定为商品所有者
        String Createrid=String.valueOf(ProductUserCorresponding.getCreaterId());
        String status ="新增";
        String Goodid =String.valueOf(ProductUserCorresponding.getId());
        ProductConversionProcess ProductConversionProcess=Generate_util.generateProductTable(status,Createrid,Goodid);
        ProductConversionProcessMapper.insert(ProductConversionProcess);
        return true;
    }

    @Override
    public boolean submit_approval(Integer id) {
        ProductUserCorresponding ProductUserCorresponding = ProductUserCorrespondingMapper.selectByPrimaryKey(id);
        ProductUserCorrespondingMapper.change_approval(id,"审核状态");
        String Createrid=String.valueOf(ProductUserCorresponding.getCreaterId());
        String status ="申请审核";
        String Goodid =String.valueOf(ProductUserCorresponding.getId());
        ProductConversionProcess ProductConversionProcess=Generate_util.generateProductTable(status,Createrid,Goodid);
        ProductConversionProcessMapper.insert(ProductConversionProcess);

        return true;
    }

    @Override
    public boolean agree_submit(Integer id) {
        ProductUserCorresponding ProductUserCorresponding = ProductUserCorrespondingMapper.selectByPrimaryKey(id);
        ProductUserCorrespondingMapper.change_approval(id,"审核完下线");
        String Createrid=String.valueOf(ProductUserCorresponding.getCreaterId());
        String status ="审核通过";
        String Goodid =String.valueOf(ProductUserCorresponding.getId());
        ProductConversionProcess ProductConversionProcess=Generate_util.generateProductTable(status,Createrid,Goodid);
        ProductConversionProcessMapper.insert(ProductConversionProcess);

        return true;
    }

    @Override
    public boolean reject_submit(Integer id, String commend) {
        ProductUserCorresponding ProductUserCorresponding = ProductUserCorrespondingMapper.selectByPrimaryKey(id);
        ProductUserCorrespondingMapper.change_approval(id,"未审核下线");
        String Createrid=String.valueOf(ProductUserCorresponding.getCreaterId());
        String status ="审核失败";
        String Goodid =String.valueOf(ProductUserCorresponding.getId());
        ProductConversionProcess ProductConversionProcess=Generate_util.generateProductTable(status,Createrid,Goodid);
        ProductConversionProcessMapper.insert(ProductConversionProcess);

        return true;
    }

    @Override
    public boolean go_online(Integer id) {
        ProductUserCorresponding ProductUserCorresponding = ProductUserCorrespondingMapper.selectByPrimaryKey(id);
        ProductUserCorrespondingMapper.change_approval(id,"上线");
        String Createrid=String.valueOf(ProductUserCorresponding.getCreaterId());
        String status ="上线";
        String Goodid =String.valueOf(ProductUserCorresponding.getId());
        ProductConversionProcess ProductConversionProcess=Generate_util.generateProductTable(status,Createrid,Goodid);
        ProductConversionProcessMapper.insert(ProductConversionProcess);
        return true;
    }

    @Override
    public boolean off_online(Integer id) {
        ProductUserCorresponding ProductUserCorresponding = ProductUserCorrespondingMapper.selectByPrimaryKey(id);
        ProductUserCorrespondingMapper.change_approval(id,"审批完下线");
        String Createrid=String.valueOf(ProductUserCorresponding.getCreaterId());
        String status ="下线";
        String Goodid =String.valueOf(ProductUserCorresponding.getId());
        ProductConversionProcess ProductConversionProcess=Generate_util.generateProductTable(status,Createrid,Goodid);
        ProductConversionProcessMapper.insert(ProductConversionProcess);
        return false;
    }

    @Override
    public boolean edit_stage(Integer id) {
        ProductUserCorresponding ProductUserCorresponding = ProductUserCorrespondingMapper.selectByPrimaryKey(id);
        ProductUserCorrespondingMapper.change_approval(id,"未审批下线");
        String Createrid=String.valueOf(ProductUserCorresponding.getCreaterId());
        String status ="编辑";
        String Goodid =String.valueOf(ProductUserCorresponding.getId());
        ProductConversionProcess ProductConversionProcess=Generate_util.generateProductTable(status,Createrid,Goodid);
        ProductConversionProcessMapper.insert(ProductConversionProcess);
        return false;
    }

    @Override
    public boolean caogao(Integer id) {
        ProductUserCorresponding ProductUserCorresponding = ProductUserCorrespondingMapper.selectByPrimaryKey(id);
        ProductUserCorrespondingMapper.change_approval(id,"草稿");
        String Createrid=String.valueOf(ProductUserCorresponding.getCreaterId());
        String status ="存入草稿";
        String Goodid =String.valueOf(ProductUserCorresponding.getId());
        ProductConversionProcess ProductConversionProcess=Generate_util.generateProductTable(status,Createrid,Goodid);
        ProductConversionProcessMapper.insert(ProductConversionProcess);
        return false;
    }


    @Override
    public List<ProductUserCorresponding> findone(Integer id) {
        return ProductUserCorrespondingMapper.findone(id);
    }

    @Override
    public List<ProductUserCorresponding> findAll() {
        return ProductUserCorrespondingMapper.findAll();
    }

    @Override
    public ProductUserCorresponding get_good_information(Integer id) {
        ProductUserCorresponding productUserCorresponding=ProductUserCorrespondingMapper.selectByPrimaryKey(id);
        return  productUserCorresponding;
    }

}
