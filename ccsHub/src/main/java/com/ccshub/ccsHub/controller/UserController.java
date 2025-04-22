package com.ccshub.ccsHub.controller;

import com.ccshub.ccsHub.entity.User;
import com.ccshub.ccsHub.entity.UserDto;
import com.ccshub.ccsHub.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository repo;

    @GetMapping("/sync")
    public String syncAzureUser(Authentication authentication) {
        if (authentication.getPrincipal() instanceof OidcUser oidcUser) {
            String username = oidcUser.getFullName();
            String email = oidcUser.getEmail();

            if (repo.findByEmail(email) == null) {
                User user = new User();
                user.setUsername(username);
                user.setEmail(email);
                user.setPassword("N/A"); // Or null if allowed
                repo.createUser(user);
            }
        }
        return "redirect:/users";
    }

    
    @GetMapping
    public String listUsers(Model model) {
        List<User> users = repo.getAllUsers();
        model.addAttribute("users", users);
        return "users/index";
    }

    
    @GetMapping("/edit")
    public String editUser(@RequestParam int id, Model model) {
        User user = repo.getUserById(id);
        if (user == null) return "redirect:/users";

        UserDto dto = new UserDto();
        dto.setUsername(user.getUsername());
        dto.setEmail(user.getEmail());

        model.addAttribute("user", user);
        model.addAttribute("userDto", dto);
        return "users/edit";
    }

    
    @PostMapping("/edit")
    public String updateUser(@RequestParam int id, @ModelAttribute UserDto userDto) {
        User user = repo.getUserById(id);
        if (user == null) return "redirect:/users";

        user.setUsername(userDto.getUsername());
        user.setEmail(userDto.getEmail());
        repo.updateUser(user);
        return "redirect:/users";
    }

    
    @GetMapping("/delete")
    public String deleteUser(@RequestParam int id) {
        repo.deleteUser(id);
        return "redirect:/users";
    }
}