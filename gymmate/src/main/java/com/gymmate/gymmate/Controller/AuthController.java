package com.gymmate.gymmate.Controller;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.gymmate.gymmate.Entity.Consumerdata;
import com.gymmate.gymmate.Entity.Userdata;
import com.gymmate.gymmate.Service.ConsumerService;
import com.gymmate.gymmate.Service.UserService;
import com.gymmate.gymmate.dto.userLogin;

@CrossOrigin(origins = {
    "https://gl1v1db1-3000.inc1.devtunnels.ms",
    "http://localhost:3000"
})
@RestController
@RequestMapping("/api")
@RestControllerAdvice
public class AuthController {
    @Autowired
    private UserService userservice;
    @Autowired
    private ConsumerService consumerservice;

    @PostMapping("/signup")
    public ResponseEntity<Map<String, String>> signup(@RequestBody Userdata userdata) {
        try {
            System.out.println(userdata.getConfirmPassword() + userdata.getPassword());
            userservice.userdata(userdata);
            return ResponseEntity.ok(Map.of("message", "User registered successfully"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(Map.of("message", "Signup failed: " + e.getMessage()));
        }
    }
   @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody userLogin userlogin) {
        try {
            userservice.login(userlogin);
            return ResponseEntity.ok("Login Successfully");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }

    @PostMapping("/ConsumerSignup")
    public ResponseEntity<String> ConsumerSignup(@RequestBody Consumerdata consumerdata) {
        try {
            consumerservice.ConsumerSignup(consumerdata);
            return ResponseEntity.ok("Consumer registered successfully");
        } catch (IllegalArgumentException e) {
            // Handle validation errors (like duplicate email/mobile)
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            // Handle unexpected errors
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body("Consumer signup failed: " + e.getMessage());
        }
    }
   @GetMapping("/ViewAllConsumer")
    public ResponseEntity<Map<String, Object>> viewconsumerdata() {
        Map<String, Object> response = new HashMap<>();
        try {
            List<Consumerdata> consumers = consumerservice.viewconsumerdata();

            response.put("message", "Consumers retrieved successfully");
            response.put("data", consumers);

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("message", "Failed to retrieve consumers: " + e.getMessage());
            response.put("data", Collections.emptyList());

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
    @GetMapping("/paymentstatus")
    public List<String[]> paymentstatus(){
        return consumerservice.paymentstatus();
    }

}
