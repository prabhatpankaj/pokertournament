package com.pilon.pokertournament.integration;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.testcontainers.containers.PostgreSQLContainer;

/**
 * This is a fairly simple integration test that can be used as a template for more
 * complex test cases.
 */
@DirtiesContext
@ExtendWith(SpringExtension.class)
@SpringBootTest
@ActiveProfiles("test")
public class SimpleITCase extends AbstractRepositoryIntegrationTest {

    @Test
    public void jdbcUrlTest() {

        String actualJdbcUrl = postgresContainer.getJdbcUrl();
        String expectedJdbcUrl = "jdbc:postgresql://localhost:" 
            + postgresContainer.getMappedPort(PostgreSQLContainer.POSTGRESQL_PORT)
            + "/test?loggerLevel=OFF";
        assertEquals(expectedJdbcUrl, actualJdbcUrl);
    }

}