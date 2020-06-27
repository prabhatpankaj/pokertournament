package com.pilon.pokertournament.buyins;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping(path = "/buyins")
public class BuyInController {

    @Autowired
    private BuyInManager buyInManager;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Void> createBuyIn(@RequestBody BuyIn buyIn) throws Exception {
        log.info(String.format("createBuyIn:%s", buyIn));
        buyInManager.create(buyIn);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.DELETE, path = "/{buyInId}")
    public ResponseEntity<Void> deleteBuyIn(@PathVariable(name = "buyInId") Long buyInId) throws Exception {
        log.info(String.format("deleteBuyIn:%d", buyInId));
        buyInManager.deleteById(buyInId);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
    
}