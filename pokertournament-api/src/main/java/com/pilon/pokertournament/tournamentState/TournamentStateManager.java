package com.pilon.pokertournament.tournamentState;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class TournamentStateManager {
    
    @Autowired
    private TournamentStateService tournamentStateService;

    public Iterable<TournamentStateHistory> findAll() {
        return tournamentStateService.findAll();
    }

}