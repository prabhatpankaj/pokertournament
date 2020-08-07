package com.pilon.pokertournament.seating;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SeatingService {

    @Autowired
    private SeatingRepository seatingRepository;

    public Iterable<Seating> findAllByTournamentId(Long tournamentId) {
        return seatingRepository.findAllByTournamentId(tournamentId);
    }

    public Iterable<Seating> findAllByTournamentIdAndTableId(Long tournamentId, Long tableId) {
        return seatingRepository.findAllByTournamentIdAndTableIdOrderBySeat(tournamentId, tableId);
    }

    public Optional<Seating> updateSeatRandom(Long tournamentId, Long playerId) {
        return seatingRepository.updateSeatRandom(tournamentId, playerId);
    }
    
}