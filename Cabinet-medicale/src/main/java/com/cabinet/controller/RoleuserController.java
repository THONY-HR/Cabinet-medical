package com.cabinet.controller;

import com.cabinet.entity.Roleuser;
import com.cabinet.repository.RoleuserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/roleuser")
public class RoleuserController {
    @Autowired
    private RoleuserRepository roleuserRepository;

    @GetMapping("/list")
    public ResponseEntity<List<Roleuser>> findAllRoleusers() {
        List<Roleuser> list = (List<Roleuser>) roleuserRepository.findAll();
        return ResponseEntity.ok(list);
    }

    @PostMapping("/add")
    public ResponseEntity<Roleuser> addRoleuser(@RequestBody Roleuser roleuser) {
        Roleuser saved = roleuserRepository.save(roleuser);
        return ResponseEntity.ok(saved);
    }
}
