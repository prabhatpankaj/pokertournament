package com.pilon.pokertournament.pokertables;

import org.springframework.data.repository.CrudRepository;

public interface PokerTableRepository extends CrudRepository<PokerTable, Long> {
    public Iterable<PokerTable> findAllByLeagueId(Long leagueId);
}