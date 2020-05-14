package com.pilon.pokertournament.tournaments;

import java.util.HashMap;

import org.springframework.stereotype.Component;

@Component
public class TournamentInProgressRepository extends HashMap<Long, Tournament> {

    private static final long serialVersionUID = 1L;
    
}