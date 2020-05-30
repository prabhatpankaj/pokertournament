package com.pilon.pokertournament.tournaments;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Timer;
import java.util.TimerTask;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class TournamentClock {
    private Tournament tournament;
    private Timer timer;
    private LocalDateTime expiration;
    private boolean timerInitialized;

    public TournamentClock(Tournament tournament) {
        this.tournament = tournament;
    }

    public void startPrestartTimer() {
        long durationSeconds = LocalDateTime.now().until(tournament.getScheduledStart(), ChronoUnit.SECONDS);
        startNewTimer(durationSeconds);
    }

    public void startTimer() {
        tournament.getCurrentState().setCurrentLevel(0);
        TournamentLevel tournamentLevel = tournament.getStructure().getLevels().get(0);
        startNewTimer(tournamentLevel.getDurationSeconds());
    }

    public long pauseTimer() {
        if (timer != null) {
            timer.cancel();
        }
        
        long remainingSeconds = LocalDateTime.now().until(expiration, ChronoUnit.SECONDS);
        return remainingSeconds;
    }

    public void resumeTimer(long remainingSeconds) {
        startNewTimer(remainingSeconds);
    }

    public void rescheduleTimer() {
        if (timer != null) {
            timer.cancel();
        }
    }

    private void startNewTimer(long durationSeconds) {
        timer = new Timer();
        timerInitialized = false;
        
        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                // Set the expiration inside the thread so that the time cost of spinning up the thread
                // doesn't affect the timer.
                if (!timerInitialized) {
                    timerInitialized = true;

                    String message = String.format("%d", durationSeconds);
                    TournamentMessenger.sendClockMessage(tournament.getId(), message);

                    expiration = LocalDateTime.now().plus(durationSeconds * 1000 + 500, ChronoUnit.MILLIS);
                    log.debug("expiration=" + expiration);
                } else {
                    long remainingMilliseconds = LocalDateTime.now().until(expiration, ChronoUnit.MILLIS);
                    if (remainingMilliseconds < 500) {
                        log.debug("remainingMilliseconds=" + remainingMilliseconds);
                        int currentLevel = tournament.getCurrentState().getCurrentLevel();
                        int newLevel = ((currentLevel + 1) < tournament.getStructure().getLevels().size()) ? currentLevel + 1 : currentLevel;

                        log.info(String.format("Tournament %d, level %d", tournament.getId(), newLevel));
                        tournament.getCurrentState().setCurrentLevel(newLevel);
                        TournamentMessenger.sendCurrentStateMessage(tournament.getId(), tournament.getCurrentState());
                
                        TournamentLevel tournamentLevel = tournament.getStructure().getLevels().get(newLevel);
                        long durationSeconds = tournamentLevel.getDurationSeconds();

                        String message = String.format("%d", durationSeconds);
                        TournamentMessenger.sendClockMessage(tournament.getId(), message);
    
                        expiration = LocalDateTime.now().plus(durationSeconds * 1000 + 500, ChronoUnit.MILLIS);
                        log.debug("expiration=" + expiration);
                    } else {
                        log.debug("remainingMilliseconds=" + remainingMilliseconds);
                        String message = String.format("%d", Math.round(remainingMilliseconds / 1000));
                        TournamentMessenger.sendClockMessage(tournament.getId(), message);
                    }
                }
            }
        }, 0, 1000);
    }
}