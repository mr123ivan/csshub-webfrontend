package com.ccshub.ccsHub.repository;

import com.ccshub.ccsHub.entity.Order;
import com.ccshub.ccsHub.entity.User;
import com.ccshub.ccsHub.entity.Merchandise;
import com.ccshub.ccsHub.entity.Event;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Repository
public class OrderRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private MerchandiseRepository merchandiseRepo;

    @Autowired
    private EventRepository eventRepo;

    public List<Order> getAllOrders() {
        List<Order> orders = new ArrayList<>();
        String sql = "SELECT * FROM orders ORDER BY order_id";

        SqlRowSet rows = jdbcTemplate.queryForRowSet(sql);
        while (rows.next()) {
            Order order = new Order();
            order.setOrderId(rows.getInt("order_id"));
            order.setTotalAmount(rows.getDouble("total_amount"));
            order.setOrderDate(Objects.requireNonNull(rows.getTimestamp("order_date")).toLocalDateTime());

            order.setUser(userRepo.getUserById(rows.getInt("user_id")));

            // Handle nullable merchandise_id
            int merchId = rows.getInt("merchandise_id");
            order.setMerchandise(!rows.wasNull() ? merchandiseRepo.getMerchandise(merchId) : null);

            // Handle nullable event_id
            int eventId = rows.getInt("event_id");
            order.setEvent(!rows.wasNull() ? eventRepo.getEvent(eventId) : null);

            orders.add(order);
        }

        return orders;
    }

    public Order getOrderById(int id) {
        String sql = "SELECT * FROM orders WHERE order_id = ?";
        SqlRowSet row = jdbcTemplate.queryForRowSet(sql, id);

        if (row.next()) {
            Order order = new Order();
            order.setOrderId(row.getInt("order_id"));
            order.setTotalAmount(row.getDouble("total_amount"));
            order.setOrderDate(Objects.requireNonNull(row.getTimestamp("order_date")).toLocalDateTime());

            order.setUser(userRepo.getUserById(row.getInt("user_id")));

            // Handle nullable merchandise_id
            int merchId = row.getInt("merchandise_id");
            order.setMerchandise(!row.wasNull() ? merchandiseRepo.getMerchandise(merchId) : null);

            // Handle nullable event_id
            int eventId = row.getInt("event_id");
            order.setEvent(!row.wasNull() ? eventRepo.getEvent(eventId) : null);

            return order;
        }

        return null;
    }

    public List<Order> searchOrders(String keyword) {
        List<Order> orders = new ArrayList<>();
        String sql = """
        SELECT * FROM orders o
        JOIN users u ON o.user_id = u.user_id
        LEFT JOIN merchandise m ON o.merchandise_id = m.id
        LEFT JOIN event e ON o.event_id = e.event_id
        WHERE LOWER(u.username) LIKE ? 
           OR LOWER(m.name) LIKE ?
           OR LOWER(e.title) LIKE ?
        ORDER BY o.order_id
    """;

        String search = "%" + keyword.toLowerCase() + "%";
        SqlRowSet rows = jdbcTemplate.queryForRowSet(sql, search, search, search);

        while (rows.next()) {
            Order order = new Order();
            order.setOrderId(rows.getInt("order_id"));
            order.setTotalAmount(rows.getDouble("total_amount"));
            order.setOrderDate(Objects.requireNonNull(rows.getTimestamp("order_date")).toLocalDateTime());

            order.setUser(userRepo.getUserById(rows.getInt("user_id")));

            int merchId = rows.getInt("merchandise_id");
            order.setMerchandise(!rows.wasNull() ? merchandiseRepo.getMerchandise(merchId) : null);

            int eventId = rows.getInt("event_id");
            order.setEvent(!rows.wasNull() ? eventRepo.getEvent(eventId) : null);

            orders.add(order);
        }

        return orders;
    }


    public Order createOrder(Order order) {
        String sql = "INSERT INTO orders (user_id, total_amount, merchandise_id, event_id, order_date) VALUES (?, ?, ?, ?, ?)";

        Integer eventId = Optional.ofNullable(order.getEvent()).map(Event::getEventId).orElse(null);
        Integer merchandiseId = Optional.ofNullable(order.getMerchandise()).map(Merchandise::getId).orElse(null);

        jdbcTemplate.update(connection -> {
            var ps = connection.prepareStatement(sql);
            ps.setInt(1, order.getUser().getUserId());
            ps.setDouble(2, order.getTotalAmount());

            if (merchandiseId != null) {
                ps.setInt(3, merchandiseId);
            } else {
                ps.setNull(3, java.sql.Types.INTEGER);
            }

            if (eventId != null) {
                ps.setInt(4, eventId);
            } else {
                ps.setNull(4, java.sql.Types.INTEGER);
            }

            ps.setTimestamp(5, java.sql.Timestamp.valueOf(order.getOrderDate()));
            return ps;
        });

        String getIdSql = "SELECT MAX(order_id) FROM orders";
        Integer id = jdbcTemplate.queryForObject(getIdSql, Integer.class);
        return id != null ? getOrderById(id) : null;
    }

    public Order updateOrder(Order order) {
        String sql = "UPDATE orders SET user_id = ?, total_amount = ?, merchandise_id = ?, event_id = ?, order_date = ? WHERE order_id = ?";

        Integer eventId = Optional.ofNullable(order.getEvent()).map(Event::getEventId).orElse(null);
        Integer merchandiseId = Optional.ofNullable(order.getMerchandise()).map(Merchandise::getId).orElse(null);

        jdbcTemplate.update(connection -> {
            var ps = connection.prepareStatement(sql);
            ps.setInt(1, order.getUser().getUserId());
            ps.setDouble(2, order.getTotalAmount());

            if (merchandiseId != null) {
                ps.setInt(3, merchandiseId);
            } else {
                ps.setNull(3, java.sql.Types.INTEGER);
            }

            if (eventId != null) {
                ps.setInt(4, eventId);
            } else {
                ps.setNull(4, java.sql.Types.INTEGER);
            }

            ps.setTimestamp(5, java.sql.Timestamp.valueOf(order.getOrderDate()));
            ps.setInt(6, order.getOrderId());
            return ps;
        });

        return getOrderById(order.getOrderId());
    }

    public void deleteOrder(int id) {
        String sql = "DELETE FROM orders WHERE order_id = ?";
        jdbcTemplate.update(sql, id);
    }
}
