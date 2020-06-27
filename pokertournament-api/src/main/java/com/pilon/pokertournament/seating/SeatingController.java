package com.pilon.pokertournament.seating;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping(path = "/seating")
public class SeatingController {
    
    @Autowired
    private SeatingManager seatingManager;

    @RequestMapping(path = "/tournament/{tournamentId}", method = RequestMethod.GET)
    Iterable<Seating> getSeatingByTournament(@PathVariable Long tournamentId) {
        return seatingManager.findAllByTournamentId(tournamentId);
    }

    @RequestMapping(path = "/tournament/{tournamentId}/table/{tableId}", method = RequestMethod.GET)
    Iterable<Seating> getSeatingByTournamentAndTable(@PathVariable Long tournamentId, @PathVariable Long tableId) {
        return seatingManager.findAllByTournamentIdAndTableId(tournamentId, tableId);
    }

    @RequestMapping(path = "/random", method = RequestMethod.PUT)
    public ResponseEntity<Seating> updateSeatRandom(@RequestParam Long playerId) throws Exception {
        log.info(String.format("updateSeatRandom:%d", playerId));
        Optional<Seating> seating = seatingManager.updateSeatRandom(playerId);
        if (seating.isPresent()) {
            return new ResponseEntity<Seating>(seating.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<Seating>(HttpStatus.NOT_FOUND);
        }

    }

}