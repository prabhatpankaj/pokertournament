package com.pilon.pokertournament.tournamentState;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TournamentStateService {
 
    @Autowired
    private TournamentStateRepository tournamentStateRepository;

    public Iterable<TournamentStateHistory> findAll() {
        return tournamentStateRepository.findAll();
    }


}