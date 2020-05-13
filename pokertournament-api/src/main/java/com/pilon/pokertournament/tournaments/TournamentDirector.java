package com.pilon.pokertournament.tournaments;

import java.util.Timer;
import java.util.TimerTask;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class TournamentDirector {

    @Autowired
    private TournamentService tournamentService;

    @Autowired
    private TournamentInProgressRepository tournamentInProgressRepository;

    @Autowired
    private SimpMessagingTemplate template;

    private int levelSeconds = 20 * 60;
    private int remainingSeconds = levelSeconds;

    public void startTournament(Tournament tournament) {
        log.info(String.format("Starting tournament %d", tournament.getId()));

        if (tournamentService == null) {
            log.error("tournamentService IS NULL!");
        }

        // Set the tounament to in-progress
        tournament.setStatusCode(TournamentStatusCode.IN_PROGRESS);
        // tournamentService.save(tournament);

        // Start the clock
        Timer timer = new Timer();
        timer.schedule(new TimerTask() {

            @Override
            public void run() {
                if (remainingSeconds > 0) {
                    remainingSeconds--;
                }

                int minutes = remainingSeconds / 60;
                int seconds = remainingSeconds - (minutes * 60);

                // TODO: Just send seconds. Let UI convert
                String countdown = String.format("%2d:%02d", minutes, seconds);
                String topic = String.format("/topic/%d/clock", tournament.getId());
                template.convertAndSend(topic, countdown);
            }
        }, 0, 1000);

        // Publish new state on the socket
        String topic = String.format("/topic/%d/event", tournament.getId());
        String message = "started";
        template.convertAndSend(topic, message);
        log.info(String.format("Sent %s on %s", message, topic));
    }

}