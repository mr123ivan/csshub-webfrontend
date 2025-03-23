package edu.cit.csshub.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

@Service
public class MerchService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // Create Merchandise
    public int createMerchandise(String name, String description, double price, int stock) {
        String sql = "INSERT INTO merchandise (name, description, price, stock) VALUES (?, ?, ?, ?)";
        return jdbcTemplate.update(sql, name, description, price, stock);
    }

    // Get All Merchandise
    public List<Map<String, Object>> getAllMerchandise() {
        String sql = "SELECT * FROM merchandise";
        return jdbcTemplate.queryForList(sql);
    }

    // Get Merchandise by ID
    public Map<String, Object> getMerchandiseById(Long id) {
        String sql = "SELECT * FROM merchandise WHERE id = ?";
        return jdbcTemplate.queryForMap(sql, id);
    }

    // Update Merchandise
    public int updateMerchandise(Long id, String name, String description, double price, int stock) {
        String sql = "UPDATE merchandise SET name=?, description=?, price=?, stock=? WHERE id=?";
        return jdbcTemplate.update(sql, name, description, price, stock, id);
    }

    // Delete Merchandise
    public int deleteMerchandise(Long id) {
        String sql = "DELETE FROM merchandise WHERE id = ?";
        return jdbcTemplate.update(sql, id);
    }
}
