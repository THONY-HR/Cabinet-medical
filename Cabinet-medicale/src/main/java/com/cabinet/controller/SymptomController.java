package com.cabinet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cabinet.entity.Symptom;
import com.cabinet.repository.SymptomRepository;

@RestController
@RequestMapping("/symptome")
public class SymptomController {
    @Autowired
    private SymptomRepository symptomRepository;

    @GetMapping("/list")
    public ResponseEntity<List<Symptom>> findAllVitalParameter() {
        List<Symptom> listVitalParameter=(List<Symptom>) symptomRepository.findAll();
        return ResponseEntity.ok(listVitalParameter);
    }

    @PostMapping("/add")
    public ResponseEntity<Symptom> addVitalParameter(@RequestBody Symptom symptom) {
        Symptom savedVital = symptomRepository.save(symptom);
        return ResponseEntity.ok(savedVital);
    }
}