package com.pilon.pokertournament.tournaments;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping(path = "/tournaments")
@Slf4j
public class TournamentController {

    @Autowired
    private TournamentService tournamentService;

    @Autowired
    private TournamentManager tournamentManager;

    @RequestMapping(method = RequestMethod.GET)
    Iterable<Tournament> getTournamentsByStatus(@RequestParam Optional<TournamentStatusCode> statusCode) {
        if (statusCode.isPresent()) {
            return tournamentService.findAllByStatusCode(statusCode.get());
        } else {
            return tournamentService.findAll();
        }
    }

    @RequestMapping(path = "/{tournamentId}", method = RequestMethod.GET)
    Optional<Tournament> getTournament(@PathVariable(name = "tournamentId") Long tournamentId) {
        return tournamentService.findById(tournamentId);
    }

    // TODO: Can make action case-insensitve and handle conversion exceptions: https://www.baeldung.com/spring-enum-request-param
    @ResponseStatus(value = HttpStatus.OK)
    @RequestMapping(path = "/{tournamentId}", method = RequestMethod.PUT)
    ResponseEntity<TournamentActionResponse> actionTournament(@PathVariable(name = "tournamentId") Long tournamentId, @RequestParam TournamentActions action) {
        log.info(String.format("Tournament: %d %s", tournamentId, action));

        Tournament tournament = tournamentService.findById(tournamentId).get();
        if (tournament == null) {
            return new ResponseEntity<TournamentActionResponse>(HttpStatus.BAD_REQUEST);
        }

        switch (action) {
            case START:
                tournamentManager.startTournament(tournament);

            case PAUSE:
            case COMPLETE:
            case CANCEL:
                return new ResponseEntity<TournamentActionResponse>(HttpStatus.OK);
            
            default:
                return new ResponseEntity<TournamentActionResponse>(HttpStatus.BAD_REQUEST);
        }
    }
}