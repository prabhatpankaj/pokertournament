package com.pilon.pokertournament.pokertables;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMethod;

@Slf4j
@RestController
@RequestMapping(path = "/tables")
public class PokerTableController {
    
    @Autowired
    private PokerTableManager pokerTableManager;

    @RequestMapping(value="/league/{leagueId}", method=RequestMethod.GET)
    public Iterable<PokerTable> getPokerTablesByLeagueId(@PathVariable Long leagueId) {
        log.info("getPokerTablesByLeagueId:%d", leagueId);
        return pokerTableManager.findAllByLeagueId(leagueId);
    }
    
}