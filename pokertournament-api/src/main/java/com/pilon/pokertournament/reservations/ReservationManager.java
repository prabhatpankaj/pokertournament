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

	public Reservation createReservation(Long tournamentId, Long playerId) throws Exception {
        Reservation reservation = new Reservation();
        reservation.setTournamentId(tournamentId);
        reservation.setPlayerId(playerId);
        reservationService.save(reservation);

        return reservation;
    }

    public Iterable<Reservation> getReservations(Long tournamentId) {
        return reservationService.findAllByTournamentId(tournamentId);
    }

	public void deleteById(Long reservationId) {
        reservationService.deleteById(reservationId);
	}
    
}