package com.pilon.pokertournament.seating;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface SeatingRepository extends CrudRepository<Seating, Long> {
    public Iterable<Seating> findAllByTournamentId(Long tournamentId);

    public Iterable<Seating> findAllByTournamentIdAndTableIdOrderBySeat(Long tournamentId, Long tableId);

    // FIXIT: To allow database agnosticism, change the algorithm to be
    // random = random integer
    // n = number of open seats % random
    // return nth open seat
    @Transactional
    @Query(nativeQuery=true, value="UPDATE seating SET player_id = :playerId WHERE id = (SELECT id FROM seating WHERE player_id IS NULL AND tournament_id = :tournamentId ORDER BY RANDOM() LIMIT 1) RETURNING *")
    Optional<Seating> updateSeatRandom(@Param("tournamentId") Long tournamentId, @Param("playerId") Long playerId);

	// public Seating save(Long tournamentId, Long tableId, Integer seatIndex, Long playerId);
}