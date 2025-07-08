package com.cabinet.controller;

import com.cabinet.entity.Ordonnanceexamen;
import com.cabinet.repository.OrdonnanceexamenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ordonnanceexamen")
public class OrdonnanceexamenController {
    @Autowired
    private OrdonnanceexamenRepository ordonnanceexamenRepository;

    @GetMapping("/list")
    public ResponseEntity<List<Ordonnanceexamen>> findAll() {
        List<Ordonnanceexamen> list = (List<Ordonnanceexamen>) ordonnanceexamenRepository.findAll();
        return ResponseEntity.ok(list);
    }

    @PostMapping("/add")
    public ResponseEntity<Ordonnanceexamen> add(@RequestBody Ordonnanceexamen ordonnanceexamen) {
        Ordonnanceexamen saved = ordonnanceexamenRepository.save(ordonnanceexamen);
        return ResponseEntity.ok(saved);
    }
}