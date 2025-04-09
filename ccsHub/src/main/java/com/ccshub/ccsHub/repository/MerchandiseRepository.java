package com.ccshub.ccsHub.repository;

import com.ccshub.ccsHub.entity.Merchandise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class MerchandiseRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Merchandise> getMerchandise(){
        var merchandises = new ArrayList<Merchandise>();

        String sql = "SELECT * FROM merchandise ORDER BY id DESC";
        SqlRowSet rows = jdbcTemplate.queryForRowSet(sql);

        while(rows.next()){
            Merchandise merchandise = new Merchandise();
            merchandise.setId(rows.getInt("id"));
            merchandise.setDescription(rows.getString("description"));
            merchandise.setName(rows.getString("name"));
            merchandise.setPrice(rows.getDouble("price"));
            merchandise.setStock(rows.getInt("stock"));

            merchandises.add(merchandise);
        }

        return merchandises;
    }
    public Merchandise getMerchandise(int id){
        var merchandises = new ArrayList<Merchandise>();

        String sql = "SELECT * FROM merchandise WHERE id=?";
        SqlRowSet rows = jdbcTemplate.queryForRowSet(sql, id);

        if (rows.next()){
            Merchandise merchandise = new Merchandise();
            merchandise.setId(rows.getInt("id"));
            merchandise.setDescription(rows.getString("description"));
            merchandise.setName(rows.getString("name"));
            merchandise.setPrice(rows.getDouble("price"));
            merchandise.setStock(rows.getInt("stock"));

            return merchandise;
        }

        return null;
    }

    public Merchandise createMerchandise(Merchandise merchandise){
        String sql = "INSERT INTO merchandise (description, name, price, stock)" +
                "VALUES(?,?,?,?)";

        int count = jdbcTemplate.update(sql, merchandise.getDescription(), merchandise.getName(),
                merchandise.getPrice(), merchandise.getStock());

        if (count>0){
            int id = jdbcTemplate.queryForObject("SELECT LAST_INSERT_ID()", Integer.class);

            return getMerchandise(id);
        }
        return null;
    }
    public Merchandise updateMerchandise(Merchandise merchandise){
        String sql = "UPDATE merchandise SET description=?, name=?, price=?, stock=? WHERE id=?";
        jdbcTemplate.update(sql, merchandise.getDescription(), merchandise.getName(),
                merchandise.getPrice(), merchandise.getStock(), merchandise.getId());

        return getMerchandise(merchandise.getId());
    }

    public void deleteMerchandise(int id){
        String sql = "DELETE FROM merchandise WHERE id=?";
        jdbcTemplate.update(sql,id);
    }
}
