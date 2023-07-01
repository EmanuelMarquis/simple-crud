package com.emanuelmarquis.crudapp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PreLoader {

    private static final Logger log = LoggerFactory.getLogger(PreLoader.class);

    @Bean
    CommandLineRunner initDB(ICubeRepo repo) {
        return (args) -> {
            log.info("preloading " + repo.save(new Cube("hello world!", "#ff88ff")));
        };
    }
}