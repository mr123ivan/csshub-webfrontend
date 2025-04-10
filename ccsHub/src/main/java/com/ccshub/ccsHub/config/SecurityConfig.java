package com.ccshub.ccsHub.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final CustomLogoutHandler logoutHandler;

    public SecurityConfig(CustomLogoutHandler logoutHandler) {
        this.logoutHandler = logoutHandler;
    }

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(
                                "/merchandises/**",        // Allow all merchandise endpoints
                                "/css/**", "/js/**", "/images/**" // Allow static resources if needed
                        ).permitAll()
                        .anyRequest().authenticated()
                )
                .csrf(Customizer.withDefaults()) // CSRF still enabled
                .logout(logout -> logout.addLogoutHandler(logoutHandler))
                .oauth2Login(Customizer.withDefaults())
                .build();
    }
}
