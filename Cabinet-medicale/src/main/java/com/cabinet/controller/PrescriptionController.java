package com.cabinet.controller;

import com.cabinet.entity.Prescription;
import com.cabinet.repository.PrescriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/prescription")
public class PrescriptionController {
    @Autowired
    private PrescriptionRepository prescriptionRepository;

    @GetMapping("/list")
    public ResponseEntity<List<Prescription>> findAll() {
        List<Prescription> list = (List<Prescription>) prescriptionRepository.findAll();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Prescription> findById(@PathVariable int id) {
        Optional<Prescription> prescription = prescriptionRepository.findById(id);
        return prescription.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/add")
    public ResponseEntity<Prescription> add(@RequestBody Prescription prescription) {
        Prescription saved = prescriptionRepository.save(prescription);
        return ResponseEntity.ok(saved);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id) {
        prescriptionRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
} 