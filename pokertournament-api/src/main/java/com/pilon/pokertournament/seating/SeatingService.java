package com.pilon.pokertournament.seating;

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

	public Seating saveSeat(Long tournamentId, Long tableId, Integer seatIndex, Long playerId) {
        Seating seating = new Seating();
        seating.setTournamentId(tournamentId);
        seating.setTableId(tableId);
        seating.setSeat(seatIndex);
        seating.setPlayerId(playerId);
		return seatingRepository.save(seating);
	}
    
}