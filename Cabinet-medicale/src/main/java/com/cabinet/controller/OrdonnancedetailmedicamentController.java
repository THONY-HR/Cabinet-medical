package com.cabinet.controller;

import com.cabinet.entity.Ordonnancedetailmedicament;
import com.cabinet.repository.OrdonnancedetailmedicamentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ordonnancedetailmedicament")
public class OrdonnancedetailmedicamentController {
    @Autowired
    private OrdonnancedetailmedicamentRepository ordonnancedetailmedicamentRepository;

    @GetMapping("/list")
    public ResponseEntity<List<Ordonnancedetailmedicament>> findAll() {
        List<Ordonnancedetailmedicament> list = (List<Ordonnancedetailmedicament>) ordonnancedetailmedicamentRepository.findAll();
        return ResponseEntity.ok(list);
    }

    @PostMapping("/add")
    public ResponseEntity<Ordonnancedetailmedicament> add(@RequestBody Ordonnancedetailmedicament detail) {
        Ordonnancedetailmedicament saved = ordonnancedetailmedicamentRepository.save(detail);
        return ResponseEntity.ok(saved);
    }
}