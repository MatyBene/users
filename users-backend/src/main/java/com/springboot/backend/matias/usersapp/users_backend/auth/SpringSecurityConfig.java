package com.springboot.backend.matias.usersapp.users_backend.auth;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SpringSecurityConfig {

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http){

        return http.authorizeHttpRequests(authz ->
            authz.requestMatchers(HttpMethod.GET, "/api/users", "/api/users/page/{page}").permitAll()
                    .anyRequest().authenticated()
        )
    }
}
