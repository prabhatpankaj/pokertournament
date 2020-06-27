package com.pilon.pokertournament.buyins;

import com.pilon.pokertournament.players.PlayerService;
import com.pilon.pokertournament.tournaments.TournamentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BuyInManager {

    @Autowired
    BuyInService buyInService;

    @Autowired
    TournamentService tournamentService;

    @Autowired
    PlayerService playerService;

	public void create(BuyIn buyIn) throws Exception {
        if (!tournamentService.findById(buyIn.getTournamentId()).isPresent()) {
            throw new Exception("Tournament not found");
        }

        if (!playerService.findById(buyIn.getPlayerId()).isPresent()) {
            throw new Exception("Player not found");
        }

        if (buyInService.findAllByTournamentIdAndPlayerId(buyIn.getTournamentId(), buyIn.getPlayerId()).iterator().hasNext()) {
            throw new Exception("Buy-in already exists");
        }

        buyInService.save(buyIn);
    }

	public void deleteById(Long buyInId) {
        buyInService.deleteById(buyInId);
	}
    
}