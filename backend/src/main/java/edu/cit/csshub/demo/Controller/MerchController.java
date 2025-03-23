package edu.cit.csshub.demo.Controller;


import edu.cit.csshub.demo.service.MerchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/merchandise")
public class MerchController {

    @Autowired
    private MerchService service;

    // Create Merchandise
    @PostMapping
    public ResponseEntity<String> createMerchandise(@RequestParam String name,
                                                    @RequestParam String description,
                                                    @RequestParam double price,
                                                    @RequestParam int stock) {
        int rowsAffected = service.createMerchandise(name, description, price, stock);
        return ResponseEntity.ok(rowsAffected > 0 ? "Merchandise created successfully" : "Failed to create merchandise");
    }

    // Get All Merchandise
    @GetMapping
    public List<Map<String, Object>> getAllMerchandise() {
        return service.getAllMerchandise();
    }

    // Get Merchandise by ID
    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getMerchandiseById(@PathVariable Long id) {
        Map<String, Object> merchandise = service.getMerchandiseById(id);
        return merchandise != null ? ResponseEntity.ok(merchandise) : ResponseEntity.notFound().build();
    }

    // Update Merchandise
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateMerchandise(@PathVariable Long id,
                                                    @RequestParam String name,
                                                    @RequestParam String description,
                                                    @RequestParam double price,
                                                    @RequestParam int stock) {
        int rowsAffected = service.updateMerchandise(id, name, description, price, stock);
        return ResponseEntity.ok(rowsAffected > 0 ? "Merchandise updated successfully" : "Failed to update merchandise");
    }

    // Delete Merchandise
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteMerchandise(@PathVariable Long id) {
        int rowsAffected = service.deleteMerchandise(id);
        return ResponseEntity.ok(rowsAffected > 0 ? "Merchandise deleted successfully" : "Merchandise not found");
    }
}
