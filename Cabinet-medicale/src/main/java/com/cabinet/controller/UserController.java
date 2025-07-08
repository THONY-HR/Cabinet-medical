package com.cabinet.controller;

import com.cabinet.entity.User;
import com.cabinet.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/list")
    public ResponseEntity<List<User>> findAllUsers() {
        List<User> list = (List<User>) userRepository.findAll();
        return ResponseEntity.ok(list);
    }

    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        User saved = userRepository.save(user);
        return ResponseEntity.ok(saved);
    }
}
