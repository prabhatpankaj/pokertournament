package com.pilon.pokertournament.seating;

import org.springframework.data.repository.CrudRepository;

public interface SeatingRepository extends CrudRepository<Seating, Long> {
    public Iterable<Seating> findAllByTournamentId(Long tournamentId);
    public Iterable<Seating> findAllByTournamentIdAndTableIdOrderBySeat(Long tournamentId, Long tableId);
}