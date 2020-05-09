package com.pilon.pokertournament.manager;

import com.pilon.pokertournament.tournaments.Tournament;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

/**
 * Responsible for "running" the tournament and publishing the events: start:
 * puts into "In Progress", starts countdown timer for first level end: puts
 * into "Completed"
 * 
 */
@Slf4j
@Component
public class TournamentDirector {

    @Autowired
    private SimpMessagingTemplate eventTemplate;

    public void control(Tournament tournament) {

    }

    public void startTournament(Tournament tournament) {
        Long tournamentId = tournament.getId();
        log.info(String.format("Tournament %d started", tournamentId)); 
        String destination = String.format("/topic/%d/event", tournamentId);
        if (eventTemplate == null) {
            log.error("eventTemplate is null!");
        } else {
            eventTemplate.convertAndSend(destination, "Started");
        }
    }
}