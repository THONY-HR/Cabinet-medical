package com.cabinet.controller;

import com.cabinet.entity.Consultation;
import com.cabinet.repository.ConsultationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/consultation")
public class ConsultationController {
    @Autowired
    private ConsultationRepository consultationRepository;

    @GetMapping("/list")
    public ResponseEntity<List<Consultation>> findAll() {
        List<Consultation> list = (List<Consultation>) consultationRepository.findAll();
        return ResponseEntity.ok(list);
    }

    @PostMapping("/add")
    public ResponseEntity<Consultation> add(@RequestBody Consultation consultation) {
        Consultation saved = consultationRepository.save(consultation);
        return ResponseEntity.ok(saved);
    }
}