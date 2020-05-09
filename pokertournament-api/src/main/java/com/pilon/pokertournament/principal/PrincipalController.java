package com.pilon.pokertournament.principal;

import java.security.Principal;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PrincipalController {

    @GetMapping(path="/principal")
    Principal getPrincipal(Principal principal) {
        return principal;
    }

}