package com.pilon.pokertournament.tournaments;

import java.util.Timer;
import java.util.TimerTask;

import lombok.Getter;

public class TournamentStatus {
    private int levelSeconds = 20 * 60;
    private int remainingSeconds = levelSeconds;

    @Getter
    private Tournament tournament;

    public TournamentStatus(Tournament tournament) {
        this.tournament = tournament;
    }

    public void startTimer() {
        // Start the clock
        Timer timer = new Timer();
        timer.schedule(new TimerTask() {

            @Override
            public void run() {
                if (remainingSeconds > 0) {
                    remainingSeconds--;
                }

                String message = String.format("%2d", remainingSeconds);
                TournamentMessenger.sendClockMessage(tournament.getId(), message);
            }
        }, 0, 1000);

        String message = "started";
        TournamentMessenger.sendEventMessage(tournament.getId(), message);
    }

}