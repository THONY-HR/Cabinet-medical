package com.cabinet.controller;

import com.cabinet.entity.Parameterpatient;
import com.cabinet.repository.ParameterpatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/parameterpatient")
public class ParametrepatientController {
    @Autowired
    private ParameterpatientRepository ParameterpatientRepository;

    @GetMapping("/list")
    public ResponseEntity<List<Parameterpatient>> findAll() {
        List<Parameterpatient> list = (List<Parameterpatient>) ParameterpatientRepository.findAll();
        return ResponseEntity.ok(list);
    }

    @PostMapping("/add")
    public ResponseEntity<Parameterpatient> add(@RequestBody Parameterpatient parametrepatient) {
        Parameterpatient saved = ParameterpatientRepository.save(parametrepatient);
        return ResponseEntity.ok(saved);
    }
}