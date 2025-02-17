package edu.cit.csshub.demo.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CSSHUBController {

    @GetMapping("/message")
    public String getMessage() {
        return "Hello, Spring Boot!";
    }
}
