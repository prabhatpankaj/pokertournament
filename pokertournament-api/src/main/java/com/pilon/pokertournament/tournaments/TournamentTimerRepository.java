package com.pilon.pokertournament.tournaments;

import java.util.HashMap;

import org.springframework.stereotype.Component;

@Component
public class TournamentTimerRepository extends HashMap<Long, TournamentClock> {

    private static final long serialVersionUID = 1L;
    
}