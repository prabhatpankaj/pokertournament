package com.pilon.pokertournament.logout;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@CrossOrigin
@RestController
@Slf4j
public class LogoutController {

    @GetMapping(path = "/logout_success")
    public void logoutSuccess() {
        log.info("logoutSuccess");
    }
    
}