package com.cabinet.controller;

import com.cabinet.entity.Symptomconsultation;
import com.cabinet.repository.SymptomconsultationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/symptomconsultation")
public class SymptomconsultationController {
    @Autowired
    private SymptomconsultationRepository symptomconsultationRepository;

    @GetMapping("/list")
    public ResponseEntity<List<Symptomconsultation>> findAll() {
        List<Symptomconsultation> list = (List<Symptomconsultation>) symptomconsultationRepository.findAll();
        return ResponseEntity.ok(list);
    }

    @PostMapping("/add")
    public ResponseEntity<Symptomconsultation> add(@RequestBody Symptomconsultation symptomconsultation) {
        Symptomconsultation saved = symptomconsultationRepository.save(symptomconsultation);
        return ResponseEntity.ok(saved);
    }
}