package com.pilon.pokertournament.tournaments;

import com.pilon.pokertournament.tournamentState.TournamentCurrentState;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TournamentCurrentStateService {

    @Autowired
    private TournamentCurrentStateRepository tournamentCurrentStateRepository;

    public TournamentCurrentState save(TournamentCurrentState tournamentCurrentState) {
        return tournamentCurrentStateRepository.save(tournamentCurrentState);
    }
}