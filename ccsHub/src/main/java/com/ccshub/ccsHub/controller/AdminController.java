package com.ccshub.ccsHub.controller;

import com.ccshub.ccsHub.entity.Admin;
import com.ccshub.ccsHub.entity.AdminDto;
import com.ccshub.ccsHub.entity.User;
import com.ccshub.ccsHub.repository.AdminRepository;
import com.ccshub.ccsHub.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/admins")
public class AdminController {

    @Autowired
    private AdminRepository adminRepo;

    @Autowired
    private UserRepository userRepo;

    @GetMapping
    public String listAdmins(Model model) {
        List<Admin> admins = adminRepo.getAllAdmins();
        model.addAttribute("admins", admins);
        return "admins/index";
    }

    @GetMapping("/create")
    public String showCreateForm(Model model) {
        AdminDto adminDto = new AdminDto();
        List<User> users = userRepo.getAllUsers();

        model.addAttribute("adminDto", adminDto);
        model.addAttribute("users", users);
        return "admins/create";
    }

    @PostMapping("/create")
    public String createAdmin(@ModelAttribute AdminDto adminDto) {
        Admin admin = new Admin();
        admin.setUsername(adminDto.getUsername());
        admin.setRole(adminDto.getRole());


        User user = userRepo.getUserById(adminDto.getUserId());
        if (user == null) return "redirect:/admins/create?error=userNotFound";

        admin.setUserId(user);
        adminRepo.createAdmin(admin);

        return "redirect:/admins";
    }

    @GetMapping("/edit")
    public String showEditForm(@RequestParam int adminId, Model model) {
        Admin admin = adminRepo.getAdminById(adminId);
        if (admin == null) return "redirect:/admins";

        AdminDto dto = new AdminDto(
            admin.getUsername(),
            admin.getRole(),
            admin.getUserId().getUserId() 
        );

        model.addAttribute("adminDto", dto);
        model.addAttribute("adminId", admin.getAdminId());
        model.addAttribute("users", userRepo.getAllUsers()); // to populate dropdown
        return "admins/edit";
    }

    @PostMapping("/edit")
    public String updateAdmin(@RequestParam int adminId, @ModelAttribute AdminDto adminDto) {
        Admin admin = new Admin();
        admin.setAdminId(adminId);
        admin.setUsername(adminDto.getUsername());
        admin.setRole(adminDto.getRole());

        User user = userRepo.getUserById(adminDto.getUserId());
        if (user == null) return "redirect:/admins/edit?error=userNotFound";

        admin.setUserId(user);
        adminRepo.updateAdmin(admin);

        return "redirect:/admins";
    }


    @GetMapping("/delete")
    public String deleteAdmin(@RequestParam int id) {
        adminRepo.deleteAdmin(id);
        return "redirect:/admins";
    }
}