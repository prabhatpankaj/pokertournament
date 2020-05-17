package com.pilon.pokertournament.tournaments;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TournamentService {

    @Autowired
    private TournamentRepository tournamentRepository;

    public Iterable<Tournament> findAll() {
        return tournamentRepository.findAll();
    }

    public Optional<Tournament> findById(Long id) {
        return tournamentRepository.findById(id);
    }

    public Iterable<Tournament> findAllByStatusCode(TournamentStatusCode statusCode) {
        return tournamentRepository.findAllByStatusCodeOrderByScheduledStartAsc(statusCode);
    }

    public Tournament save(Tournament tournament) {
        return tournamentRepository.save(tournament);
    }

}