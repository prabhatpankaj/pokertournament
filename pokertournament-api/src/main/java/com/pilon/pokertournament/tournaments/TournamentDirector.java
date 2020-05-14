package com.pilon.pokertournament.tournaments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class TournamentDirector {

    @Autowired
    private TournamentService tournamentService;

    @Autowired
    private TournamentStatusRepository tournamentStatusRepository;

    public void startTournament(Tournament tournament) {
        log.info(String.format("startTournament %d", tournament.getId()));

        if (tournament.getStatusCode() != TournamentStatusCode.SCHEDULED) {
            String errorMessage = String.format("Tournament %d cannot be started because it is not in scheduled status.", tournament.getId());
            log.error(errorMessage);
            return;
        }

        // Set the tounament to in-progress
        tournament.setStatusCode(TournamentStatusCode.IN_PROGRESS);
        tournamentService.save(tournament);

        TournamentStatus tournamentStatus = new TournamentStatus(tournament);
        tournamentStatusRepository.put(tournament.getId(), tournamentStatus);
        tournamentStatus.startTimer();        

        String message = "started";
        TournamentMessenger.sendEventMessage(tournament.getId(), message);

    }

    public void pauseTournament(Tournament tournament) {

    }

    public void rescheduleTournament(Tournament tournament) {
        log.info(String.format("rescheduleTournament %d", tournament.getId()));

        // Set the tounament to in-progress
        tournament.setStatusCode(TournamentStatusCode.SCHEDULED);
        tournamentService.save(tournament);
    }
}