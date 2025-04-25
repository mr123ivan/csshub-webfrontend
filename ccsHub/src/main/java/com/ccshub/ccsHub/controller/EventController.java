package com.ccshub.ccsHub.controller;

import com.ccshub.ccsHub.entity.Event;
import com.ccshub.ccsHub.entity.EventDto;
import com.ccshub.ccsHub.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventRepository repo;

    @GetMapping
    public ResponseEntity<List<Event>> getEvents() {
        List<Event> events = repo.getEvents();
        return ResponseEntity.ok(events);
    }


    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> createEvent(
            @RequestPart("event") EventDto eventDto,
            @RequestPart(value = "imageFile", required = false) MultipartFile imageFile
    ) {
        Event event = new Event();
        event.setTitle(eventDto.getTitle());
        event.setDescription(eventDto.getDescription());
        event.setEventDate(eventDto.getEventDate());
        event.setLocation(eventDto.getLocation());

        try {
            if (imageFile != null && !imageFile.isEmpty()) {
                event.setImage(imageFile.getBytes());
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Failed to process image");
        }

        repo.createEvent(event);
        return ResponseEntity.ok("Event created successfully");
    }

    @GetMapping("/image/{eventId}")
    public ResponseEntity<byte[]> getImage(@PathVariable int eventId) {
        Event event = repo.getEvent(eventId);
        if (event == null || event.getImage() == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(event.getImage());
    }

    @GetMapping("/{eventId}")
    public ResponseEntity<Event> getEvent(@PathVariable int eventId) {
        Event event = repo.getEvent(eventId);
        return event != null ? ResponseEntity.ok(event) : ResponseEntity.notFound().build();
    }

    @PutMapping(value = "/{eventId}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> updateEvent(
            @PathVariable int eventId,
            @RequestPart("event") EventDto eventDto,
            @RequestPart(value = "imageFile", required = false) MultipartFile imageFile
    ) {
        Event event = repo.getEvent(eventId);
        if (event == null) {
            return ResponseEntity.notFound().build();
        }

        event.setTitle(eventDto.getTitle());
        event.setDescription(eventDto.getDescription());
        event.setEventDate(eventDto.getEventDate());
        event.setLocation(eventDto.getLocation());

        try {
            if (imageFile != null && !imageFile.isEmpty()) {
                event.setImage(imageFile.getBytes());
            }
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("Failed to update image");
        }

        repo.updateEvent(event);
        return ResponseEntity.ok("Event updated successfully");
    }

    @DeleteMapping("/{eventId}")
    public ResponseEntity<String> deleteEvent(@PathVariable int eventId) {
        repo.deleteEvent(eventId);
        return ResponseEntity.ok("Event deleted");
    }

    @GetMapping("/search")
    public List<Event> searchEvents(@RequestParam("keyword") String keyword) {
        return repo.searchEvents(keyword);
    }
}
