package com.pilon.pokertournament.tournaments;

import com.pilon.pokertournament.SpringContext;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class TournamentMessenger {

    private static SimpMessagingTemplate getSimpMessagingTemplate() {
        return SpringContext.getBean(SimpMessagingTemplate.class);
    }

    public static void sendClockMessage(Long tournamentId, String message) {
        String topic = String.format("/topic/%d/clock", tournamentId);
        getSimpMessagingTemplate().convertAndSend(topic, message);
        log.debug(String.format("Sent %s on %s", message, topic));
    }

    public static void sendEventMessage(Long tournamentId, String message) {
        String topic = String.format("/topic/%d/event", tournamentId);
        getSimpMessagingTemplate().convertAndSend(topic, message);
        log.debug(String.format("Sent %s on %s", message, topic));
    }

}
