package com.pilon.pokertournament.tournaments;

import java.time.LocalDateTime;

import com.pilon.pokertournament.tournamentState.TournamentCurrentState;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class TournamentDirector {

    @Autowired
    private TournamentService tournamentService;

    @Autowired
    private TournamentTimerRepository tournamentTimerRepository;

    public void prestartTournament(Tournament tournament) {
        log.info(String.format("prestartTournament %d", tournament.getId()));

        if (tournament.getStatusCode() != TournamentStatusCode.SCHEDULED) {
            String errorMessage = String.format("Tournament %d cannot be prestarted because it is not in scheduled status.", tournament.getId());
            log.error(errorMessage);
            return;
        }

        TournamentClock tournamentTimer;
        if (tournamentTimerRepository.containsKey(tournament.getId())) {
            tournamentTimer = tournamentTimerRepository.get(tournament.getId());
        } else {
            tournamentTimer = new TournamentClock(tournament);
            tournamentTimerRepository.put(tournament.getId(), tournamentTimer);
        }

        TournamentCurrentState currentState = tournament.getCurrentState();
        currentState.setTournamentId(tournament.getId());
        currentState.setLevelStatusCode(TournamentLevelStatusCode.PRESTARTED);
        currentState.setCurrentLevel(0);
        currentState.setDurationRemainingSeconds(1110L); // FIXIT
        currentState.setTimestamp(LocalDateTime.now());
        tournament.setCurrentState(currentState);
        tournamentService.save(tournament);

        tournamentTimer.startPrestartTimer();
        tournament.getCurrentState().setLevelStatusCode(TournamentLevelStatusCode.ACTIVE);
        TournamentMessenger.sendCurrentStateMessage(tournament.getId(), tournament.getCurrentState());

        tournamentService.save(tournament);
    }

    public void startTournament(Tournament tournament) {
        log.info(String.format("startTournament %d", tournament.getId()));

        if (tournament.getStatusCode() != TournamentStatusCode.SCHEDULED) {
            String errorMessage = String.format("Tournament %d cannot be started because it is not in scheduled status.", tournament.getId());
            log.error(errorMessage);
            return;
        }

        TournamentClock tournamentTimer;
        if (tournamentTimerRepository.containsKey(tournament.getId())) {
            tournamentTimer = tournamentTimerRepository.get(tournament.getId());
        } else {
            tournamentTimer = new TournamentClock(tournament);
            tournamentTimerRepository.put(tournament.getId(), tournamentTimer);
        }

        tournamentTimer.startTimer();
        tournament.getCurrentState().setLevelStatusCode(TournamentLevelStatusCode.ACTIVE);
        TournamentMessenger.sendCurrentStateMessage(tournament.getId(), tournament.getCurrentState());

        tournament.setStatusCode(TournamentStatusCode.IN_PROGRESS);
        tournamentService.save(tournament);
    }

    public void pauseTournament(Tournament tournament) {
        log.info(String.format("pauseTournament %d", tournament.getId()));

        if (tournament.getStatusCode() != TournamentStatusCode.IN_PROGRESS) {
            log.error(String.format("Tournament %d cannot be paused because it is not in in-progress status.", tournament.getId()));
            return;
        }

        if (tournament.getCurrentState().getLevelStatusCode() != TournamentLevelStatusCode.ACTIVE) {
            log.error(String.format("Tournament %d cannot be paused because it is not active.", tournament.getId()));
            return;
        }

        TournamentClock tournamentTimer;
        if (tournamentTimerRepository.containsKey(tournament.getId())) {
            tournamentTimer = tournamentTimerRepository.get(tournament.getId());
        } else {
            log.error(String.format("pauseTournament: Tournament %d was not found in tournamentTimerRepository!", tournament.getId()));
            tournamentTimer = new TournamentClock(tournament);
            tournamentTimerRepository.put(tournament.getId(), tournamentTimer);
        }

        long remainingSeconds = tournamentTimer.pauseTimer();
        tournament.getCurrentState().setLevelStatusCode(TournamentLevelStatusCode.PAUSED);
        TournamentMessenger.sendCurrentStateMessage(tournament.getId(), tournament.getCurrentState());
        tournamentService.save(tournament);

        TournamentCurrentState currentState = tournament.getCurrentState();
        currentState.setLevelStatusCode(TournamentLevelStatusCode.PAUSED);
        currentState.setDurationRemainingSeconds(remainingSeconds);
        currentState.setTimestamp(LocalDateTime.now());
        tournament.setCurrentState(currentState);
        tournamentService.save(tournament);
    }

    public void resumeTournament(Tournament tournament) {
        log.info(String.format("resumeTournament %d", tournament.getId()));

        if (tournament.getStatusCode() != TournamentStatusCode.IN_PROGRESS) {
            String errorMessage = String.format("Tournament %d cannot be paused because it is not in in-progress status.", tournament.getId());
            log.error(errorMessage);
            return;
        }

        if (tournament.getCurrentState().getLevelStatusCode() != TournamentLevelStatusCode.PAUSED) {
            String errorMessage = String.format("Tournament %d cannot be resumed because it is not paused.", tournament.getId());
            log.error(errorMessage);
            return;
        }

        TournamentClock tournamentTimer;
        if (tournamentTimerRepository.containsKey(tournament.getId())) {
            tournamentTimer = tournamentTimerRepository.get(tournament.getId());
        } else {
            log.error(String.format("resumeTournament: Tournament %d was not found in tournamentTimerRepository!", tournament.getId()));
            tournamentTimer = new TournamentClock(tournament);
            tournamentTimerRepository.put(tournament.getId(), tournamentTimer);
        }

        tournamentTimer.resumeTimer(tournament.getCurrentState().getDurationRemainingSeconds());
        tournament.getCurrentState().setLevelStatusCode(TournamentLevelStatusCode.ACTIVE);
        TournamentMessenger.sendCurrentStateMessage(tournament.getId(), tournament.getCurrentState());
        tournamentService.save(tournament);
    }

    public void rescheduleTournament(Tournament tournament) {
        log.info(String.format("rescheduleTournament %d", tournament.getId()));

        tournament.setStatusCode(TournamentStatusCode.SCHEDULED);
        tournamentService.save(tournament);

        TournamentClock tournamentTimer;
        if (tournamentTimerRepository.containsKey(tournament.getId())) {
            tournamentTimer = tournamentTimerRepository.get(tournament.getId());
        } else {
            tournamentTimer = new TournamentClock(tournament);
            tournamentTimerRepository.put(tournament.getId(), tournamentTimer);
        }

        tournamentTimer.rescheduleTimer();
        tournament.getCurrentState().setLevelStatusCode(TournamentLevelStatusCode.NOT_STARTED);
        TournamentMessenger.sendCurrentStateMessage(tournament.getId(), tournament.getCurrentState());
        tournamentService.save(tournament);
    }
}