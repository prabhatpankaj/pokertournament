package com.pilon.pokertournament.tournaments;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class TournamentManager {

    @Autowired
    private TournamentService tournamentService;

    @Autowired
    private SimpMessagingTemplate template;

    HashMap<Long, Tournament> tournaments = new HashMap<>();

	public void startTournament(Tournament tournament) {
        log.info(String.format("Starting tournament %d", tournament.getId()));

        // Set the tounament to in-progress
        tournament.setStatusCode(TournamentStatusCode.IN_PROGRESS);
        tournamentService.save(tournament);

        // Save the current state
        tournaments.put(tournament.getId(), tournament);

        // Start the clock

        // Publish new state on the socket
        String topic = String.format("/topic/%d", tournament.getId());
        // String topic = "/topic/all";
        String message = "started";
        template.convertAndSend(topic, message);
        log.info(String.format("Sent %s on %s", message, topic));
	}
    
}