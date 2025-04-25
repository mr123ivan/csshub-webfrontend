package com.ccshub.ccsHub.controller;

import com.ccshub.ccsHub.entity.Order;
import com.ccshub.ccsHub.entity.OrderDto;
import com.ccshub.ccsHub.repository.OrderRepository;
import com.ccshub.ccsHub.repository.UserRepository;
import com.ccshub.ccsHub.repository.MerchandiseRepository;
import com.ccshub.ccsHub.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderRepository orderRepo;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private MerchandiseRepository merchandiseRepo;

    @Autowired
    private EventRepository eventRepo;

    @GetMapping
    public ResponseEntity<List<Order>> listOrders(@RequestParam(required = false) String keyword) {
        List<Order> orders = (keyword == null || keyword.isBlank())
                ? orderRepo.getAllOrders()
                : orderRepo.searchOrders(keyword);
        return ResponseEntity.ok(orders);
    }

    @PostMapping("/create")
    public ResponseEntity<Order> createOrder(@RequestBody OrderDto dto) {
        Order order = new Order();
        order.setTotalAmount(dto.getTotalAmount());
        order.setOrderDate(dto.getOrderDate());

        order.setUser(userRepo.getUserById(dto.getUserId()));
        order.setMerchandise(merchandiseRepo.getMerchandise(dto.getMerchandiseId()));
        order.setEvent(eventRepo.getEvent(dto.getEventId()));

        orderRepo.createOrder(order);
        return ResponseEntity.ok(order);
    }

    @PutMapping("/edit/{orderId}")
    public ResponseEntity<Order> updateOrder(@PathVariable int orderId, @RequestBody OrderDto dto) {
        Order order = orderRepo.getOrderById(orderId);
        if (order == null) {
            return ResponseEntity.notFound().build();
        }

        order.setTotalAmount(dto.getTotalAmount());
        order.setOrderDate(dto.getOrderDate());
        order.setUser(userRepo.getUserById(dto.getUserId()));
        order.setMerchandise(merchandiseRepo.getMerchandise(dto.getMerchandiseId()));
        order.setEvent(eventRepo.getEvent(dto.getEventId()));

        orderRepo.updateOrder(order);
        return ResponseEntity.ok(order);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable int id) {
        orderRepo.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }
}
