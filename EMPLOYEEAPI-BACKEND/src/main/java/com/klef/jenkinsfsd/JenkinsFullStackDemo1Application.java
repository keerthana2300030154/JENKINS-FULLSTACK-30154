package com.klef.jenkinsfsd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class JenkinsFullStackDemo1Application extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(JenkinsFullStackDemo1Application.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(JenkinsFullStackDemo1Application.class, args);
    }
}
