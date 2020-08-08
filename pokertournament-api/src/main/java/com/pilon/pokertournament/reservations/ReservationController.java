package com.pilon.pokertournament.reservations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping(path = "/reservations")
public class ReservationController {
 
    @Autowired
    ReservationManager reservationManager;

    @RequestMapping(path = "/tournament/{tournamentId}", method = RequestMethod.GET)
    public ResponseEntity<Iterable<Reservation>> getTournamentReservations(@PathVariable(name = "tournamentId") Long tournamentId) throws Exception {
        log.info("getTournamentReservations:tournamentId={}", tournamentId);
        Iterable<Reservation> reservations = reservationManager.getReservations(tournamentId);
        return new ResponseEntity<Iterable<Reservation>>(reservations, HttpStatus.OK);
    }

    @RequestMapping(path = "/tournament/{tournamentId}/player/{playerId}", method = RequestMethod.POST)
    public ResponseEntity<Reservation> createReservation(@PathVariable(name = "tournamentId") Long tournamentId, @PathVariable(name = "playerId") Long playerId) throws Exception {
        log.info("createReservation:tournamentId={}:playerId={}", tournamentId, playerId);
        Reservation reservation = reservationManager.createReservation(tournamentId, playerId);
        return new ResponseEntity<Reservation>(reservation, HttpStatus.OK);
    } 

}