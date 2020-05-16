package com.pilon.pokertournament.tournaments;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class TournamentManager {
    @Autowired
    private TournamentService tournamentService;

    @Autowired
    private TournamentDirector tournamentDirector;

    public Optional<Tournament> findById(Long tournamentId) {
        return tournamentService.findById(tournamentId);
    }

    public void performTournamentAction(Long tournamentId, TournamentActions action) throws Exception {

        // Load Tournament
        Tournament tournament = tournamentService.findById(tournamentId).get();
        if (tournament == null) {
            throw new Exception("Tournament not found");
        }

        switch (action) {
            case START:
                tournamentDirector.startTournament(tournament);
                break;

            case PAUSE:
            case COMPLETE:
            case CANCEL:
                break;
            
            case RESCHEDULE:
                tournamentDirector.rescheduleTournament(tournament);
                break;

            default:
                throw new Exception("Tournament not found");
        }
    }

	public Iterable<Tournament> findAllByStatusCode(TournamentStatusCode statusCode) {
        return tournamentService.findAllByStatusCode(statusCode);
    }
    
    public Iterable<Tournament> findAll() {
        return tournamentService.findAll();
    }
}