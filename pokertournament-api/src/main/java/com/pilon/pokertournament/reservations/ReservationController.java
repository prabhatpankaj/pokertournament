package com.pilon.pokertournament.reservations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
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

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Void> createReservation(@RequestBody Reservation reservation) throws Exception {
        log.info(String.format("createReservation:%s", reservation));
        reservationManager.create(reservation);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.DELETE, path = "/{reservationId}")
    public ResponseEntity<Void> deleteReservation(@PathVariable(name = "reservationId") Long reservationId) throws Exception {
        log.info(String.format("deleteReservation:%d", reservationId));
        reservationManager.deleteById(reservationId);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}