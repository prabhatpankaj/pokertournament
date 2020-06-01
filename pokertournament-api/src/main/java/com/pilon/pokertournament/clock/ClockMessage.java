package com.pilon.pokertournament.clock;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ClockMessage {
    long remainingSecondsInLevel;
    long remainingSecondsUntilBreak;
}