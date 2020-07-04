package com.pilon.pokertournament.login;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin
@RestController
@Slf4j
public class LoginController {

    @GetMapping(path = "/")
    public void loginSuccess() {
        log.info("loginSuccess");
    }
    
}