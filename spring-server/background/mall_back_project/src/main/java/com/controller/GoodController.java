package com.controller;

import com.domain.ProductUserCorresponding;
import com.domain.UserGood;
import com.service.ProductConversionProcessServiceImpl;
import com.service.iml.ProductUserCorrespondingService;
import com.service.iml.UserGoodService;
import com.utils.Result;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.models.auth.In;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@Api(tags = "商品相关API")
@RequestMapping("good")
@RestController
public class GoodController {
    @Autowired
    private UserGoodService goodService;

    @Autowired
    private ProductConversionProcessServiceImpl productConversionProcessService;
    @Autowired
    private ProductUserCorrespondingService ProductUserCorrespondingService;
    @ApiOperation(value = "查询单个用户的商品")
    @RequestMapping(value = "findone/{id}",method ={RequestMethod.GET},produces = MediaType.APPLICATION_JSON_VALUE)
    public Result findone(@PathVariable Integer id){
        List<ProductUserCorresponding> good = ProductUserCorrespondingService.findone(id);
        if(good != null){
            return new Result<List<ProductUserCorresponding>>(true,good,"");
        }
        else {
            return new Result(false,null,"未查询到商品列表");
        }
    }
    @ApiOperation(value = "查询所有商品")
    @RequestMapping(value = "findall",method ={RequestMethod.GET})
    public Result findone(){
        List<ProductUserCorresponding> good = ProductUserCorrespondingService.findAll();
        if(good != null){
            return new Result<List<ProductUserCorresponding>>(true,good,"");
        }
        else {
            return new Result(false,null,"未查询到商品列表");
        }
    }
    @ApiOperation(value = "新建商品")
    @RequestMapping(value = "addgood",method ={RequestMethod.POST})
    public Result addgood(@RequestBody ProductUserCorresponding ProductUserCorresponding){
        return new Result(true,ProductUserCorrespondingService.addGood(ProductUserCorresponding),"");

    }

    @ApiOperation(value = "提交审批请求")
    @RequestMapping(value = "submit_approval/{id}",method ={RequestMethod.POST})
    Result submit_approval(@PathVariable Integer id){

        return new Result(true,ProductUserCorrespondingService.submit_approval(id),"");
    }

    @ApiOperation(value = "审批通过")
    @RequestMapping(value = "agree_submit/{id}",method ={RequestMethod.POST})
    Result agree_submit(@PathVariable Integer id){

        return new Result(true,ProductUserCorrespondingService.agree_submit(id),"");
    }

    @ApiOperation(value = "审批不通过")
    @RequestMapping(value = "reject_submit/{id}",method ={RequestMethod.POST})
    Result reject_submit(@PathVariable Integer id,@RequestParam("commend") String commend){
        return new Result(true,ProductUserCorrespondingService.reject_submit(id,commend),"");
    }
    @ApiOperation(value = "商品上线")
    @RequestMapping(value = "go_online/{id}",method ={RequestMethod.POST})
    Result go_online(@PathVariable Integer id){

        return new Result(true,ProductUserCorrespondingService.go_online(id),"");
    }

    @ApiOperation(value = "商品下线")
    @RequestMapping(value = "off_online/{id}",method ={RequestMethod.POST})
    Result off_online(@PathVariable Integer id){
        return new Result(true,ProductUserCorrespondingService.off_online(id),"");
    }

    @ApiOperation(value = "商品编辑")
    @RequestMapping(value = "edit_stage/{id}",method ={RequestMethod.POST})
    Result edit_stage(@PathVariable Integer id){

        return new Result(true,ProductUserCorrespondingService.edit_stage(id),"");
    }

    @ApiOperation(value = "暂存放入草稿")
    @RequestMapping(value = "caogao/{id}",method ={RequestMethod.POST})
    Result caogao(@PathVariable Integer id){
        return new Result(true,ProductUserCorrespondingService.caogao(id),"");
    }

    @RequestMapping(value = "get_good_information/{id}",method ={RequestMethod.GET})
    Result get_good_information(@PathVariable Integer id){
        return new Result(true,ProductUserCorrespondingService.get_good_information(id),"");
    }
    @RequestMapping(value = "get_good_conversion/{id}",method ={RequestMethod.GET})
    Result get_good_conversion(@PathVariable Integer id){
        return new Result(true, productConversionProcessService.get_good_conversion(id),"");
    }
}
