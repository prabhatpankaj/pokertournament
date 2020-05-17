package com.pilon.pokertournament.tournamentState;

import org.springframework.data.repository.CrudRepository;

public interface TournamentStateRepository extends CrudRepository<TournamentStateHistory, Long> {
    
}