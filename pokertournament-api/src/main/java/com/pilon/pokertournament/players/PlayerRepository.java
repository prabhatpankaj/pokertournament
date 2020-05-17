package com.pilon.pokertournament.players;

import org.springframework.data.repository.CrudRepository;

public interface PlayerRepository extends CrudRepository<Player, Long> {
    public Iterable<Player> findAllByOrderByLastNameAscFirstNameAsc();
}