package com.cabinet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cabinet.entity.Phrarmaceuticals;
import com.cabinet.repository.PhrarmaceuticalsRepository;

@RestController
@RequestMapping("/medicament")
public class PhrarmaceuticalsController {
    @Autowired
    private PhrarmaceuticalsRepository phrarmaceuticalsRepository;

    @GetMapping("/list")
    public ResponseEntity<List<Phrarmaceuticals>> findAllPhrarmaceuticals() {
        List<Phrarmaceuticals> listPhrarmaceuticals=(List<Phrarmaceuticals>) phrarmaceuticalsRepository.findAll();
        return ResponseEntity.ok(listPhrarmaceuticals);
    }

    @PostMapping("/add")
    public ResponseEntity<Phrarmaceuticals> addPhrarmaceuticals(@RequestBody Phrarmaceuticals phrarmaceutical) {
        Phrarmaceuticals savedVital = phrarmaceuticalsRepository.save(phrarmaceutical);
        System.out.println("Inserting: " + phrarmaceutical);
        return ResponseEntity.ok(savedVital);
    }
}