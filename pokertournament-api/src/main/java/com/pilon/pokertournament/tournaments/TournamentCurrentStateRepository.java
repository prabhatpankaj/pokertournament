package com.pilon.pokertournament.tournaments;

import com.pilon.pokertournament.tournamentState.TournamentCurrentState;

import org.springframework.data.repository.CrudRepository;

public interface TournamentCurrentStateRepository extends CrudRepository<TournamentCurrentState, Long> {
    
}