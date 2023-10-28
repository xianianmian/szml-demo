package com;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

@MapperScan("com.mapper")
@SpringBootApplication
public class MallBackProjectApplication {
    @GetMapping("/")
    public String home() {
        return "index.html";
    }

    public static void main(String[] args) {
        SpringApplication.run(MallBackProjectApplication.class, args);
    }

}
