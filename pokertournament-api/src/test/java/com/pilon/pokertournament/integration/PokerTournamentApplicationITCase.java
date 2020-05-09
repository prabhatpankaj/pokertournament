package com.pilon.pokertournament.integration;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@DirtiesContext
@ExtendWith(SpringExtension.class)
@SpringBootTest
@ActiveProfiles("test")
class PokerTournamentApplicationITCase extends AbstractRepositoryIntegrationTest {

	@Test
	void contextLoads() {
	}

}
