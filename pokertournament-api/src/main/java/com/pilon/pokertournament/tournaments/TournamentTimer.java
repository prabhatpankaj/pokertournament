package com.pilon.pokertournament.tournaments;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Timer;
import java.util.TimerTask;

public class TournamentTimer {
    private long remainingSeconds;
    private Tournament tournament;
    private Timer timer;

    public TournamentTimer(Tournament tournament) {
        this.tournament = tournament;
    }

    public void startPrestartTimer() {
        LocalDateTime scheduledStart = tournament.getScheduledStart();
        LocalDateTime now = LocalDateTime.now();
        remainingSeconds = now.until(scheduledStart, ChronoUnit.SECONDS );

        startNewTimer();
    }

    public void startTimer() {
        tournament.getCurrentState().setCurrentLevel(1);
        TournamentLevel tournamentLevel = tournament.getLevels().get(1);
        remainingSeconds = tournamentLevel.getDurationSeconds();

        startNewTimer();
    }

    public void pauseTimer() {
        if (timer != null) {
            timer.cancel();
        }
    }

    public void resumeTimer() {
        startNewTimer();
    }

    public void rescheduleTimer() {
        if (timer != null) {
            timer.cancel();
        }
    }

    private void startNewTimer() {
        timer = new Timer();
        timer.schedule(new TimerTask() {
           @Override
            public void run() {
                if (remainingSeconds > 0) {
                    remainingSeconds--;
                } else if (remainingSeconds == 0) {
                    int currentLevel = tournament.getCurrentState().getCurrentLevel();
                    int newLevel = currentLevel + 1;
                    tournament.getCurrentState().setCurrentLevel(newLevel);
                    TournamentLevel tournamentLevel = tournament.getLevels().get(newLevel);
                    remainingSeconds = tournamentLevel.getDurationSeconds();
                }

                String message = String.format("%2d", remainingSeconds);
                TournamentMessenger.sendClockMessage(tournament.getId(), message);
            }
        }, 1000, 1000);

        String message = String.format("%2d", remainingSeconds);
        TournamentMessenger.sendClockMessage(tournament.getId(), message);
    }
}