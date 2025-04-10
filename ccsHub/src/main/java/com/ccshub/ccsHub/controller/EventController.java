package com.ccshub.ccsHub.controller;

import com.ccshub.ccsHub.entity.Event;
import com.ccshub.ccsHub.entity.EventDto;
import com.ccshub.ccsHub.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventRepository repo;

    @GetMapping
    public String getEvents(Model model) {
        List<Event> events = repo.getEvents();
        model.addAttribute("events", events);
        return "events/index";
    }

    @GetMapping("/create")
    public String showCreatePage(Model model) {
        EventDto eventDto = new EventDto();
        model.addAttribute("eventDto", eventDto);
        return "events/create";
    }

    @PostMapping("/create")
    public String createEvent(@ModelAttribute EventDto eventDto, BindingResult result) {
        Event event = new Event();
        event.setTitle(eventDto.getTitle());
        event.setDescription(eventDto.getDescription());
        event.setEventDate(eventDto.getEventDate());
        event.setLocation(eventDto.getLocation());

        repo.createEvent(event);

        return "redirect:/events";
    }

    @GetMapping("/edit")
    public String showEditPage(
            Model model,
            @RequestParam int eventId
    ) {
        Event event = repo.getEvent(eventId);
        if (event == null) {
            return "redirect:/events";
        }

        model.addAttribute("event", event);

        EventDto eventDto = new EventDto();
        eventDto.setTitle(event.getTitle());
        eventDto.setDescription(event.getDescription());
        eventDto.setEventDate(event.getEventDate());
        eventDto.setLocation(event.getLocation());

        model.addAttribute("eventDto", eventDto);

        return "events/edit";
    }

    @PostMapping("/edit")
    public String updateEvent(Model model, @RequestParam int eventId, @ModelAttribute EventDto eventDto, BindingResult result) {
        Event event = repo.getEvent(eventId);
        if (event == null) {
            return "redirect:/events";
        }

        if (result.hasErrors()) {
            return "events/edit";
        }

        event.setTitle(eventDto.getTitle());
        event.setDescription(eventDto.getDescription());
        event.setEventDate(eventDto.getEventDate());
        event.setLocation(eventDto.getLocation());

        repo.updateEvent(event);

        return "redirect:/events";
    }

    @GetMapping("/delete")
    public String deleteEvent(@RequestParam int eventId) {
        repo.deleteEvent(eventId);
        return "redirect:/events";
    }
}
