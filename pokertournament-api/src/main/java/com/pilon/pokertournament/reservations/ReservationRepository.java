package com.pilon.pokertournament.reservations;

import org.springframework.data.repository.CrudRepository;

public interface ReservationRepository extends CrudRepository<Reservation, Long> {
    Iterable<Reservation> findAllByTournamentId(Long tournamentId);
    Iterable<Reservation> findAllByTournamentIdAndPlayerId(Long tournamentId, Long playerId);
}