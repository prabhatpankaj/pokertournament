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
        log.info(String.format("startTournament %d", tournament.getId()));

        if (tournament.getStatusCode() != TournamentStatusCode.SCHEDULED) {
            String errorMessage = String.format("Tournament %d cannot be started because it is not in scheduled status.", tournament.getId());
            log.error(errorMessage);
            return;
        }

        if (tournamentInProgressRepository.containsKey(tournament.getId())) {
            log.debug(String.format("Tournament %d already exists in repository", tournament.getId()));
        } else {
            tournamentInProgressRepository.put(tournament.getId(), tournament);
            log.debug(String.format("Added tournament %d to repository", tournament.getId()));
        }

        // Set the tounament to in-progress
        tournament.setStatusCode(TournamentStatusCode.IN_PROGRESS);
        tournamentService.save(tournament);

        // Start the clock
        Timer timer = new Timer();
        timer.schedule(new TimerTask() {

            @Override
            public void run() {
                if (remainingSeconds > 0) {
                    remainingSeconds--;
                }

                String message = String.format("%2d", remainingSeconds);
                String topic = String.format("/topic/%d/clock", tournament.getId());
                template.convertAndSend(topic, message);
            }
        }, 0, 1000);

        // Publish new state on the socket
        String topic = String.format("/topic/%d/event", tournament.getId());
        String message = "started";
        template.convertAndSend(topic, message);
        log.info(String.format("Sent %s on %s", message, topic));
    }

}