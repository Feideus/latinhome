package com.example.shalomalerhemback.controllers;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @GetMapping(value = "/", produces = MediaType.APPLICATION_JSON_VALUE)
    public String helloUser() {
        return "Bienvenue sur le site officiel de la famille Massonneau";
    }

}
