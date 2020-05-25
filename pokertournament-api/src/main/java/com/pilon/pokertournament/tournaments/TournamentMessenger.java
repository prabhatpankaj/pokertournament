package com.pilon.pokertournament.tournaments;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pilon.pokertournament.SpringContext;
import com.pilon.pokertournament.tournamentState.TournamentCurrentState;

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

    // public static void sendEventMessage(Long tournamentId, String message) {
    // String topic = String.format("/topic/%d/event", tournamentId);
    // getSimpMessagingTemplate().convertAndSend(topic, message);
    // log.debug(String.format("Sent %s on %s", message, topic));
    // }

    public static void sendCurrentStateMessage(Long tournamentId, TournamentCurrentState tournamentCurrentState) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            String currentStaterJSON;
                currentStaterJSON = objectMapper.writeValueAsString(tournamentCurrentState);
            String topic = String.format("/topic/%d/event", tournamentId);
            getSimpMessagingTemplate().convertAndSend(topic, currentStaterJSON);
            log.debug(String.format("Sent %s on %s", currentStaterJSON, topic));
        } catch (JsonProcessingException e) {
            // FIXIT: Something
            e.printStackTrace();
        }
    }

}
