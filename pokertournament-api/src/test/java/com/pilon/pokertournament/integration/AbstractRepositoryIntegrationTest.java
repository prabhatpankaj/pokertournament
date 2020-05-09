package com.pilon.pokertournament.integration;

import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.core.env.PropertiesPropertySource;
import org.springframework.test.context.ContextConfiguration;
import org.testcontainers.containers.PostgreSQLContainer;

import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import java.util.Properties;

/**
 * Subclassing an integration test class from AbstractRepositoryIntegrationTest will start a Postgres
 * database from a Docker image and wait for it to stabilize before the tests are invoked.
 * 
 * Additionally, spring.datasource properties are set so that the application can use them appropriately.
 */
@Testcontainers
@ContextConfiguration(initializers = AbstractRepositoryIntegrationTest.Initializer.class)
public abstract class AbstractRepositoryIntegrationTest {
    private static final String POSTGRES_DOCKER_IMAGE_NAME = "postgres:9.6.17";
    
    @Container
    @SuppressWarnings("rawtypes")
    public static PostgreSQLContainer postgresContainer = new PostgreSQLContainer(POSTGRES_DOCKER_IMAGE_NAME);

    public static class Initializer implements ApplicationContextInitializer<ConfigurableApplicationContext> {
        @Override
        public void initialize(ConfigurableApplicationContext configurableApplicationContext) {
            ConfigurableEnvironment environment = configurableApplicationContext.getEnvironment();
            Properties properties = new Properties();

            properties.put("spring.datasource.driver-class-name", postgresContainer.getDriverClassName());
            properties.put("spring.datasource.url", postgresContainer.getJdbcUrl());
            properties.put("spring.datasource.username", postgresContainer.getUsername());
            properties.put("spring.datasource.password", postgresContainer.getPassword());

            environment.getPropertySources().addFirst(new PropertiesPropertySource("myTestDBProps", properties));
            configurableApplicationContext.setEnvironment(environment);
        }
    }
}
