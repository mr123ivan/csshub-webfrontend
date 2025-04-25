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
                                "/api/**",               // Allow API endpoints (React will call these)
                                "/css/**", "/js/**", "/images/**", "/favicon.ico" // Static resources
                        ).permitAll()
                        .anyRequest().authenticated()
                )
                .csrf(csrf -> csrf.disable()) // ❗ Disable CSRF for API (required if using frontend like React)
                .logout(logout -> logout
                        .logoutUrl("/logout") // Optional: define logout URL
                        .addLogoutHandler(logoutHandler)
                )
                .oauth2Login(Customizer.withDefaults())
                .build();
    }
}
