package com.pilon.pokertournament.reservations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public Reservation save(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    public Iterable<Reservation> findAllByTournamentId(Long tournamentId) {
        return reservationRepository.findAllByTournamentId(tournamentId);
    }

    public Iterable<Reservation> findAllByTournamentIdAndPlayerId(Long tournamentId, Long playerId) {
        return reservationRepository.findAllByTournamentIdAndPlayerId(tournamentId, playerId);
    }

	public void deleteById(Long reservationId) {
        reservationRepository.deleteById(reservationId);
	}
    
}