package com.pilon.pokertournament.security;

import javax.sql.DataSource;

import org.springframework.boot.actuate.autoconfigure.security.servlet.EndpointRequest;
import org.springframework.boot.actuate.health.HealthEndpoint;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;

@Configuration
@EnableWebSecurity
public class SecurityConfigurerAdapter extends WebSecurityConfigurerAdapter {

    @Override
	protected void configure(HttpSecurity http) throws Exception {

        // @formatter:off
		http
            .csrf().disable()
            .authorizeRequests().requestMatchers(EndpointRequest.to(HealthEndpoint.class)).permitAll()
            .and().authorizeRequests().regexMatchers("/login.*").permitAll()
            .and().authorizeRequests().regexMatchers("/").permitAll()
            .and().authorizeRequests().anyRequest().authenticated()
            .and().formLogin()
            .and().logout().permitAll().logoutSuccessUrl("/logout_success").deleteCookies("JSESSIONID");
        // @formatter:
        // .failureForwardUrl("/login_failure")

        // .and()
        // .logout()
        // .logoutUrl("/perform_logout")
        // .deleteCookies("JSESSIONID")
        // .logoutSuccessHandler(logoutSuccessHandler());        
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
    
    @Bean
    JdbcUserDetailsManager userDetailsService(DataSource dataSource) {
        JdbcUserDetailsManager jdbcUserDetailsManager = new JdbcUserDetailsManager();
        jdbcUserDetailsManager.setDataSource(dataSource);

        // List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
        // authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
        // UserDetails user = new User("chuck.pilon@gmail.com", passwordEncoder().encode("password"), authorities);
        // jdbcUserDetailsManager.createUser(user);

        return jdbcUserDetailsManager;
    }

}