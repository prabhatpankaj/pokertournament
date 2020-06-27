package com.pilon.pokertournament.players;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PlayerService {

    @Autowired
    private PlayerRepository playerRepository;

    public Optional<Player> findById(Long id) {
        return playerRepository.findById(id);
    }

    public Iterable<Player> findAllByOrderByLastNameAscFirstNameAsc() {
        return playerRepository.findAllByOrderByLastNameAscFirstNameAsc();
    }

}