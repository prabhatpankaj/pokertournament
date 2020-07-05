package com.pilon.pokertournament.pokertables;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PokerTableManager {
    
    @Autowired
    private PokerTableService pokerTableService;

    public Iterable<PokerTable> findAllByTournamentId(Long tournamentId) {
        return pokerTableService.findAllByTournamentId(tournamentId);
    }
}