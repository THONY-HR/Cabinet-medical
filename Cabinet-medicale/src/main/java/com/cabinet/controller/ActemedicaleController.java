package com.cabinet.controller;

import com.cabinet.entity.Actemedicale;
import com.cabinet.repository.ActemedicaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/acte")
public class ActemedicaleController {
    @Autowired
    private ActemedicaleRepository actemedicaleRepository;

    @GetMapping("/list")
    public ResponseEntity<List<Actemedicale>> findAllActemedicale() {
        List<Actemedicale> list = (List<Actemedicale>) actemedicaleRepository.findAll();
        return ResponseEntity.ok(list);
    }

    @PostMapping("/add")
    public ResponseEntity<Actemedicale> addActemedicale(@RequestBody Actemedicale actemedicale) {
        Actemedicale saved = actemedicaleRepository.save(actemedicale);
        return ResponseEntity.ok(saved);
    }
}
