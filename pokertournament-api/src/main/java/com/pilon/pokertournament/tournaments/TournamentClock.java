package com.pilon.pokertournament.tournaments;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Timer;
import java.util.TimerTask;

import com.pilon.pokertournament.clock.ClockMessage;

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
        TournamentLevel tournamentLevel = tournament.getStructure().getLevels().get(1);
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

    private long getRemainingSecondsUntilBreak(long durationSeconds, int currentLevelIndex) {
        TournamentLevel tournamentLevel = tournament.getStructure().getLevels().get(currentLevelIndex);
        // Find the next break
        for (TournamentBreak tournamentBreak : tournament.getStructure().getBreaks()) {
            if (tournamentBreak.getAfterLevel() >= tournamentLevel.getLevel()) {
                // Sum up the time in the levels until the break
                long remainingSecondsUntilBreak = durationSeconds;
                for (int levelIndex = currentLevelIndex + 1; tournament.getStructure().getLevels().get(levelIndex).getLevel() <= tournamentBreak.getAfterLevel(); levelIndex++) {
                    remainingSecondsUntilBreak += tournament.getStructure().getLevels().get(levelIndex).getDurationSeconds();
                }
                return remainingSecondsUntilBreak;
            }
        }
        return -1;
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

                    int currentLevel = tournament.getCurrentState().getCurrentLevel();
                    long remainingSecondsInLevel = durationSeconds;
                    long remainingSecondsUntilBreak = getRemainingSecondsUntilBreak(remainingSecondsInLevel, currentLevel);
                    TournamentMessenger.sendClockMessage(tournament.getId(), new ClockMessage(remainingSecondsInLevel, remainingSecondsUntilBreak));
                    expiration = LocalDateTime.now().plus(remainingSecondsInLevel * 1000 + 500, ChronoUnit.MILLIS);
                    log.debug("expiration=" + expiration);
                } else {
                    long remainingMilliseconds = LocalDateTime.now().until(expiration, ChronoUnit.MILLIS);
                    if (remainingMilliseconds < 500) {
                        // Switching to the next level or break
                        int currentLevelIndex = tournament.getCurrentState().getCurrentLevel();

                        // Determine whether it's the next level or a break
                        TournamentLevel tournamentLevel = tournament.getStructure().getLevels().get(currentLevelIndex);
                        for (TournamentBreak tournamentBreak : tournament.getStructure().getBreaks()) {
                            if (tournamentBreak.getAfterLevel() == tournamentLevel.getLevel()) {
                                // break=4, level=4
                                // Going on break
                            } else if (tournamentBreak.getAfterLevel() > tournamentLevel.getLevel()) {
                                // break=4, level=1
                                // next level
                            } else {
                                // break=4, level=5
                                // keep searching for break
                            }
                        }


                        int newLevelIndex = ((currentLevelIndex + 1) < tournament.getStructure().getLevels().size()) ? currentLevelIndex + 1 : currentLevelIndex;

                        log.info(String.format("Tournament %d, level %d", tournament.getId(), newLevelIndex));
                        tournament.getCurrentState().setCurrentLevel(newLevelIndex);
                        TournamentMessenger.sendCurrentStateMessage(tournament.getId(), tournament.getCurrentState());
                
                        TournamentLevel tournamentLevel = tournament.getStructure().getLevels().get(newLevelIndex);
                        long remainingSecondsInLevel = tournamentLevel.getDurationSeconds();
                        long remainingSecondsUntilBreak = getRemainingSecondsUntilBreak(remainingSecondsInLevel, newLevelIndex);
                        TournamentMessenger.sendClockMessage(tournament.getId(), new ClockMessage(remainingSecondsInLevel, remainingSecondsUntilBreak));
    
                        expiration = LocalDateTime.now().plus(remainingSecondsInLevel * 1000 + 500, ChronoUnit.MILLIS);
                        log.debug("expiration=" + expiration);
                    } else {
                        int currentLevel = tournament.getCurrentState().getCurrentLevel();
                        long remainingSecondsInLevel = Math.round(remainingMilliseconds / 1000);
                        long remainingSecondsUntilBreak = getRemainingSecondsUntilBreak(remainingSecondsInLevel, currentLevel);
                        TournamentMessenger.sendClockMessage(tournament.getId(), new ClockMessage(remainingSecondsInLevel, remainingSecondsUntilBreak));
                    }
                }
            }
        }, 0, 1000);
    }
}