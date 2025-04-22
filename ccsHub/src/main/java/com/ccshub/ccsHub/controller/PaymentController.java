package com.ccshub.ccsHub.controller;

import com.ccshub.ccsHub.entity.Payment;
import com.ccshub.ccsHub.entity.PaymentDto;
import com.ccshub.ccsHub.repository.*;

import com.ccshub.ccsHub.entity.User;
import com.ccshub.ccsHub.entity.Merchandise;
import com.ccshub.ccsHub.entity.Event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/payments")
public class PaymentController {

    @Autowired
    private PaymentRepository paymentRepo;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private MerchandiseRepository merchandiseRepo;

    @Autowired
    private EventRepository eventRepo;

    @GetMapping
    public String listPayments(Model model) {
        List<Payment> payments = paymentRepo.getAllPayments();
        model.addAttribute("payments", payments);
        return "payments/index";
    }

    @GetMapping("/create")
    public String showCreateForm(Model model) {
        model.addAttribute("paymentDto", new PaymentDto());
        model.addAttribute("users", userRepo.getAllUsers());
        // Change this to match your form
        model.addAttribute("merchandiseList", merchandiseRepo.getMerchandise());
        model.addAttribute("events", eventRepo.getEvents());
        return "payments/create";
    }

    @PostMapping("/create")
    public String createPayment(@ModelAttribute PaymentDto dto) {
        Payment payment = new Payment();
        payment.setAmount(dto.getAmount());
        payment.setStatus(dto.getStatus());

        User user = userRepo.getUserById(dto.getUserId());
        
        // Check if merchandiseId is null before fetching
        Merchandise merchandise = null;
        if (dto.getMerchandiseId() != null) {
            merchandise = merchandiseRepo.getMerchandise(dto.getMerchandiseId());
        }
        
        // Check if eventId is null before fetching
        Event event = null;
        if (dto.getEventId() != null) {
            event = eventRepo.getEvent(dto.getEventId());
        }

        // Validate required relationships
        if (user == null) {
            return "redirect:/payments/create?error=userNotFound";
        }

        payment.setUser(user);
        payment.setMerchandise(merchandise); 
        payment.setEvent(event);

        paymentRepo.createPayment(payment);
        return "redirect:/payments";
    }

    @GetMapping("/edit")
    public String showEditForm(@RequestParam int paymentId, Model model) {
        Payment payment = paymentRepo.getPaymentById(paymentId);
        if (payment == null) return "redirect:/payments";

        PaymentDto dto = new PaymentDto(
            payment.getUser().getUserId(),
            payment.getEvent().getEventId(),
            payment.getMerchandise().getId(),
            payment.getAmount(),
            payment.getStatus()
        );

        model.addAttribute("paymentDto", dto);
        model.addAttribute("paymentId", paymentId);
        model.addAttribute("users", userRepo.getAllUsers());
        model.addAttribute("merchandiseList", merchandiseRepo.getMerchandise());
        model.addAttribute("events", eventRepo.getEvents());
        return "payments/edit";
    }

    @PostMapping("/edit")
    public String updatePayment(@RequestParam int paymentId, @ModelAttribute PaymentDto dto) {
        Payment payment = new Payment();
        payment.setPaymentId(paymentId);
        payment.setAmount(dto.getAmount());
        payment.setStatus(dto.getStatus());

        User user = userRepo.getUserById(dto.getUserId());
        
        // Handle potentially null merchandiseId
        Merchandise merchandise = null;
        if (dto.getMerchandiseId() != null) {
            merchandise = merchandiseRepo.getMerchandise(dto.getMerchandiseId());
        }
        
        // Handle potentially null eventId
        Event event = null;
        if (dto.getEventId() != null) {
            event = eventRepo.getEvent(dto.getEventId());
        }

        // Validate required user
        if (user == null) {
            return "redirect:/payments/edit?paymentId=" + paymentId + "&error=userNotFound";
        }

        payment.setUser(user);
        payment.setMerchandise(merchandise); // Can be null
        payment.setEvent(event); // Can be null

        paymentRepo.updatePayment(payment);
        return "redirect:/payments";
    }

    @GetMapping("/delete")
    public String deletePayment(@RequestParam int id) {
        paymentRepo.deletePayment(id);
        return "redirect:/payments";
    }
}