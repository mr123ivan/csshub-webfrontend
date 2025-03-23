package edu.cit.csshub.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // Disable CSRF for testing
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/merchandise/**").permitAll() // Allow public access to Merchandise API
                        .anyRequest().authenticated() // Secure other endpoints
                )
                .formLogin(login -> login.disable()) // Disable login page
                .httpBasic(basic -> basic.disable()); // Disable HTTP Basic Auth

        return http.build();
    }
}

/*
* package edu.cit.csshub.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(auth -> auth
                       .requestMatchers("/error", "/oauth2/**", "/login/oauth2/code/**").permitAll() // Allow OAuth paths
                        .anyRequest().authenticated() // Everything else requires authentication
                )
                .oauth2Login(oauth2 -> oauth2
                        .defaultSuccessUrl("/home", true) // Redirect to /home after successful login
                )
                .logout(logout -> logout
                        .logoutSuccessUrl("/") // After logout, redirect to root which will trigger login again
                        .invalidateHttpSession(true) // Destroy session
                        .deleteCookies("JSESSIONID") // Clear cookies
                )
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED) // Keep session active
                )
                .csrf(csrf -> csrf.disable()); // Disable CSRF for now

        return http.build();
    }
}*/