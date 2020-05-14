package com.pilon.pokertournament.tournaments;

import java.util.HashMap;

import org.springframework.stereotype.Component;

@Component
public class TournamentStatusRepository extends HashMap<Long, TournamentStatus> {

    private static final long serialVersionUID = 1L;
    
}