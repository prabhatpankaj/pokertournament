package com.pilon.pokertournament.clock;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.messaging.simp.SimpMessagingTemplate;
// import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class ScheduledUpdatesOnTopic {
    
    // @Autowired
    // private SimpMessagingTemplate template;

    // int levelSeconds = 20 * 60;
    // int remainingSeconds = levelSeconds;
    
    // @Scheduled(fixedDelay=1000)
    // public void publishUpdates(){
    //     if (remainingSeconds > 0) {
    //         remainingSeconds--;
    //     }

    //     int minutes = remainingSeconds / 60;
    //     int seconds = remainingSeconds - (minutes * 60);
    //     String countdown = String.format("%2d:%02d", minutes, seconds);
    //     template.convertAndSend("/topic/all", countdown);
    // }
    
}