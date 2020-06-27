package com.pilon.pokertournament.buyins;

import org.springframework.data.repository.CrudRepository;

public interface BuyInRepository extends CrudRepository<BuyIn, Long> {
    Iterable<BuyIn> findAllByTournamentIdAndPlayerId(Long tournamentId, Long playerId);
}