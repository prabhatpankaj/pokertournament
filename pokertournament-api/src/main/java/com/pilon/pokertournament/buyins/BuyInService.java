package com.pilon.pokertournament.buyins;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BuyInService {

    @Autowired
    private BuyInRepository buyInRepository;

    public BuyIn save(BuyIn buyIn) {
        return buyInRepository.save(buyIn);
    }

    public Iterable<BuyIn> findAllByTournamentIdAndPlayerId(Long tournamentId, Long playerId) {
        return buyInRepository.findAllByTournamentIdAndPlayerId(tournamentId, playerId);
    }
    
    public void deleteById(Long buyInId) {
        buyInRepository.deleteById(buyInId);
    }
}