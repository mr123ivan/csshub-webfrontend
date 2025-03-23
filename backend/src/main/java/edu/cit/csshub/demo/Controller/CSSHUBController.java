package edu.cit.csshub.demo.Controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CSSHUBController {

    // ✅ Root endpoint to prevent 404 error
    @GetMapping("/")
    public String root() {
        return "Welcome to the API! Try /message or /home.";
    }

    // ✅ Secure user info endpoint (returns authenticated user)
    @GetMapping("/user")
    public Authentication getUser(Authentication authentication) {
        if (authentication == null) {
            System.out.println("No Authentication");
            return null;  // User not authenticated
        }
        return authentication;  // Returns authenticated user info
    }

    // ✅ Home endpoint (redirects after successful login)
    @GetMapping("/home")
    public String home(Authentication authentication) {
        if (authentication == null) {
            return "You are not authenticated!";
        }
        return "Welcome, " + authentication.getName() + "!";
    }
}
