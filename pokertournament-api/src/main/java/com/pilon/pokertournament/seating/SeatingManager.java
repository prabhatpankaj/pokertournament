package com.pilon.pokertournament.seating;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class SeatingManager {

    @Autowired
    private SeatingService seatingService;

    public Iterable<Seating> findAllByTournamentId(Long tournamentId) {
        return seatingService.findAllByTournamentId(tournamentId);
    }

    public Iterable<Seating> findAllByTournamentIdAndTableId(Long tournamentId, Long tableId) {
        return seatingService.findAllByTournamentIdAndTableId(tournamentId, tableId);
    }

	public Seating saveSeat(Long tournamentId, Long tableId, Integer seatIndex, Long playerId) {
		return seatingService.saveSeat(tournamentId, tableId, seatIndex, playerId);
	}
    
}