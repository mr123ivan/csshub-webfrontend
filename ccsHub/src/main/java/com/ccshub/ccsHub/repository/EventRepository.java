package com.ccshub.ccsHub.repository;

import com.ccshub.ccsHub.entity.Event;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class EventRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Event> getEvents() {
        var events = new ArrayList<Event>();

        String sql = "SELECT * FROM event ORDER BY event_id DESC";
        SqlRowSet rows = jdbcTemplate.queryForRowSet(sql);

        while (rows.next()) {
            Event event = new Event();
            event.setEventId(rows.getInt("event_id"));
            event.setTitle(rows.getString("title"));
            event.setDescription(rows.getString("description"));
            event.setEventDate(rows.getString("event_date"));
            event.setLocation(rows.getString("location"));

            events.add(event);
        }

        return events;
    }

    public Event getEvent(int eventId) {
        String sql = "SELECT * FROM event WHERE event_id=?";
        SqlRowSet rows = jdbcTemplate.queryForRowSet(sql, eventId);

        if (rows.next()) {
            Event event = new Event();
            event.setEventId(rows.getInt("event_id"));
            event.setTitle(rows.getString("title"));
            event.setDescription(rows.getString("description"));
            event.setEventDate(rows.getString("event_date"));
            event.setLocation(rows.getString("location"));

            return event;
        }

        return null;
    }

    public Event createEvent(Event event) {
        String sql = "INSERT INTO event (title, description, event_date, location) VALUES (?, ?, ?, ?)";
        int count = jdbcTemplate.update(sql, event.getTitle(), event.getDescription(), event.getEventDate(), event.getLocation());

        if (count > 0) {
            int eventId = jdbcTemplate.queryForObject("SELECT LAST_INSERT_ID()", Integer.class);
            return getEvent(eventId);
        }

        return null;
    }

    public Event updateEvent(Event event) {
        String sql = "UPDATE event SET title=?, description=?, event_date=?, location=? WHERE event_id=?";
        jdbcTemplate.update(sql, event.getTitle(), event.getDescription(), event.getEventDate(), event.getLocation(), event.getEventId());

        return getEvent(event.getEventId());
    }

    public void deleteEvent(int eventId) {
        String sql = "DELETE FROM event WHERE event_id=?";
        jdbcTemplate.update(sql, eventId);
    }
}
