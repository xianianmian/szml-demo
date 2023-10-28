package com.service.iml;

import com.domain.ProductUserCorresponding;
import com.domain.UserGood;

import java.util.List;

public interface ProductUserCorrespondingService{


    int insert(ProductUserCorresponding record);

    int insertSelective(ProductUserCorresponding record);

    Boolean addGood(ProductUserCorresponding ProductUserCorresponding);

    boolean submit_approval(Integer id);

    boolean agree_submit(Integer id);

    boolean reject_submit(Integer id,String commend);

    boolean go_online(Integer id);

    boolean off_online(Integer id);

    boolean edit_stage(Integer id);

    boolean caogao(Integer id);

    List<ProductUserCorresponding> findone(Integer id);
    List<ProductUserCorresponding> findAll();

    ProductUserCorresponding get_good_information(Integer id);

}
