package com.cabinet.controller;

import com.cabinet.entity.Ordonnancedetailactemedicale;
import com.cabinet.repository.OrdonnancedetailactemedicaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ordonnancedetailactemedicale")
public class OrdonnancedetailactemedicaleController {
    @Autowired
    private OrdonnancedetailactemedicaleRepository ordonnancedetailactemedicaleRepository;

    @GetMapping("/list")
    public ResponseEntity<List<Ordonnancedetailactemedicale>> findAll() {
        List<Ordonnancedetailactemedicale> list = (List<Ordonnancedetailactemedicale>) ordonnancedetailactemedicaleRepository.findAll();
        return ResponseEntity.ok(list);
    }

    @PostMapping("/add")
    public ResponseEntity<Ordonnancedetailactemedicale> add(@RequestBody Ordonnancedetailactemedicale detail) {
        Ordonnancedetailactemedicale saved = ordonnancedetailactemedicaleRepository.save(detail);
        return ResponseEntity.ok(saved);
    }
} 