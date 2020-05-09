package com.pilon.pokertournament.players;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/players")
public class PlayerController {

    @Autowired
    private PlayerService playerService;

    @GetMapping
    Iterable<Player> getUsers() {
        return playerService.findAll();
    }

}