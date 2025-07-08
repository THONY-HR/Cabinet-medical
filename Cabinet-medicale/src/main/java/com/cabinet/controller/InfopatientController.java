package com.cabinet.controller;

import com.cabinet.entity.Infopatient;
import com.cabinet.repository.InfopatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/infopatient")
public class InfopatientController {
    @Autowired
    private InfopatientRepository infopatientRepository;

    @GetMapping("/list")
    public ResponseEntity<List<Infopatient>> findAllInfopatients() {
        List<Infopatient> list = (List<Infopatient>) infopatientRepository.findAll();
        return ResponseEntity.ok(list);
    }

    @PostMapping("/add")
    public ResponseEntity<Infopatient> addInfopatient(@RequestBody Infopatient infopatient) {
        Infopatient saved = infopatientRepository.save(infopatient);
        return ResponseEntity.ok(saved);
    }
}