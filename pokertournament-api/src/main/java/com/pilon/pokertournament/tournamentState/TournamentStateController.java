package com.pilon.pokertournament.tournamentState;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMethod;

@Slf4j
@RestController
@RequestMapping(path = "/tournamentstates")
public class TournamentStateController {

    @Autowired
    private TournamentStateManager tournamentStateManager;

    @RequestMapping(method=RequestMethod.GET)
    public Iterable<TournamentStateHistory> getTournamentStates() {
        log.info("getTournamentStates");
        return tournamentStateManager.findAll();
    }
    
    
}