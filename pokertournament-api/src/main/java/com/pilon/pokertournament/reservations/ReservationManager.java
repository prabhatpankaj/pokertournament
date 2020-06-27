package com.pilon.pokertournament.reservations;

import com.pilon.pokertournament.players.PlayerService;
import com.pilon.pokertournament.tournaments.TournamentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ReservationManager {

    @Autowired
    ReservationService reservationService;

    @Autowired
    TournamentService tournamentService;

    @Autowired
    PlayerService playerService;

	public void create(Reservation reservation) throws Exception {
        if (!tournamentService.findById(reservation.getTournamentId()).isPresent()) {
            throw new Exception("Tournament not found");
        }

        if (!playerService.findById(reservation.getPlayerId()).isPresent()) {
            throw new Exception("Player not found");
        }

        if (reservationService.findAllByTournamentIdAndPlayerId(reservation.getTournamentId(), reservation.getPlayerId()).iterator().hasNext()) {
            throw new Exception("Reservation already exists");
        }

        reservationService.save(reservation);
    }

	public void deleteById(Long reservationId) {
        reservationService.deleteById(reservationId);
	}
    
}