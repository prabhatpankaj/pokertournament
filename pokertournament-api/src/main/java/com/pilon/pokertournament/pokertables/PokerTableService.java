package com.pilon.pokertournament.pokertables;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PokerTableService {
    
    @Autowired
    private PokerTableRepository pokerTableRepository;

    public Iterable<PokerTable> findAllByLeagueId(Long leagueId) {
        return pokerTableRepository.findAllByLeagueId(leagueId);
    }
}