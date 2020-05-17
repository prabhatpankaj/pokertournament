package com.pilon.pokertournament.players;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlayerService {

    @Autowired
    private PlayerRepository playerRepository;

    public Iterable<Player> findAllByOrderByLastNameAscFirstNameAsc() {
        return playerRepository.findAllByOrderByLastNameAscFirstNameAsc();
    }

}