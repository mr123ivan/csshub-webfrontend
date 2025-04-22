package com.ccshub.ccsHub.repository;

import com.ccshub.ccsHub.entity.Payment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class PaymentRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private MerchandiseRepository merchandiseRepo;

    @Autowired
    private EventRepository eventRepo;

    public List<Payment> getAllPayments() {
        List<Payment> payments = new ArrayList<>();
        String sql = "SELECT * FROM payment ORDER BY payment_id";

        SqlRowSet rows = jdbcTemplate.queryForRowSet(sql);
        while (rows.next()) {
            Payment payment = new Payment();
            payment.setPaymentId(rows.getInt("payment_id"));
            payment.setAmount(rows.getBigDecimal("amount"));
            payment.setStatus(rows.getString("status"));
            payment.setPaymentDate(rows.getTimestamp("payment_date").toLocalDateTime());

            payment.setUser(userRepo.getUserById(rows.getInt("user_id")));
            payment.setMerchandise(merchandiseRepo.getMerchandise(rows.getInt("merchandise_id")));
            payment.setEvent(eventRepo.getEvent(rows.getInt("event_id")));

            payments.add(payment);
        }

        return payments;
    }

    public Payment getPaymentById(int id) {
        String sql = "SELECT * FROM payment WHERE payment_id = ?";
        SqlRowSet row = jdbcTemplate.queryForRowSet(sql, id);

        if (row.next()) {
            Payment payment = new Payment();
            payment.setPaymentId(row.getInt("payment_id"));
            payment.setAmount(row.getBigDecimal("amount"));
            payment.setStatus(row.getString("status"));
            payment.setPaymentDate(row.getTimestamp("payment_date").toLocalDateTime());

            payment.setUser(userRepo.getUserById(row.getInt("user_id")));
            payment.setMerchandise(merchandiseRepo.getMerchandise(row.getInt("merchandise_id")));
            payment.setEvent(eventRepo.getEvent(row.getInt("event_id")));

            return payment;
        }

        return null;
    }

    public Payment createPayment(Payment payment) {
        String sql = "INSERT INTO payment (user_id, event_id, merchandise_id, amount, status) VALUES (?, ?, ?, ?, ?)";
        
        // Handle null values for optional fields
        Integer eventId = payment.getEvent() != null ? payment.getEvent().getEventId() : null;
        Integer merchandiseId = payment.getMerchandise() != null ? payment.getMerchandise().getId() : null;
        
        jdbcTemplate.update(sql,
            payment.getUser().getUserId(),
            eventId,
            merchandiseId,
            payment.getAmount(),
            payment.getStatus()
        );
    
        String getIdSql = "SELECT MAX(payment_id) FROM payment";
        Integer id = jdbcTemplate.queryForObject(getIdSql, Integer.class);
        return id != null ? getPaymentById(id) : null;
    }

    public Payment updatePayment(Payment payment) {
        String sql = "UPDATE payment SET amount = ?, status = ?, user_id = ?, event_id = ?, merchandise_id = ? WHERE payment_id = ?";
        
        // Handle null values for optional fields
        Integer eventId = payment.getEvent() != null ? payment.getEvent().getEventId() : null;
        Integer merchandiseId = payment.getMerchandise() != null ? payment.getMerchandise().getId() : null;
        
        jdbcTemplate.update(sql,
            payment.getAmount(),
            payment.getStatus(),
            payment.getUser().getUserId(),
            eventId,
            merchandiseId,
            payment.getPaymentId()
        );
    
        return getPaymentById(payment.getPaymentId());
    }

    public void deletePayment(int id) {
        String sql = "DELETE FROM payment WHERE payment_id = ?";
        jdbcTemplate.update(sql, id);
    }
}