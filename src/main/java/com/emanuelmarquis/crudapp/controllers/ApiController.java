package com.emanuelmarquis.crudapp.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
public class ApiController {
    private String template = "hello ";
    @GetMapping("/api")
    public String get(@RequestParam(defaultValue="stranger") String name) {
        return this.template + name + " !";
    }
}
