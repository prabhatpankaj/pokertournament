package com.pilon.pokertournament.login;

import java.security.Principal;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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

    @PostMapping(path = "/")
    public void loginSuccessPost() {
        log.info("loginSuccessPost");
    }

    @PostMapping(path = "/login_failure")
    public void loginError(Principal principal) {
        log.info("loginError");
    }
}