package com.pilon.pokertournament.tournaments;

import org.springframework.data.repository.CrudRepository;

public interface TournamentRepository extends CrudRepository<Tournament, Long> {
    Iterable<Tournament> findAllByStatusCode(Integer statusCode);
}