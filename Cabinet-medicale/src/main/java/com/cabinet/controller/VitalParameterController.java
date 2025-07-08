package com.cabinet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cabinet.entity.Vitalparameter;
import com.cabinet.repository.VitalParameterRepository;

@RestController
@RequestMapping("/vitalParameter")
public class VitalParameterController {
    @Autowired
    private VitalParameterRepository vitalParameterRepository;

    @GetMapping("/list")
    public ResponseEntity<List<Vitalparameter>> findAllVitalParameter() {
        List<Vitalparameter> listVitalParameter=(List<Vitalparameter>) vitalParameterRepository.findAll();
        return ResponseEntity.ok(listVitalParameter);
    }

    @PostMapping("/add")
    public ResponseEntity<Vitalparameter> addVitalParameter(@RequestBody Vitalparameter parametres) {
        Vitalparameter savedVital = vitalParameterRepository.save(parametres);
        System.out.println("Inserting: " + parametres.getParameter());
        System.out.println("Inserting: " + parametres);
        return ResponseEntity.ok(savedVital);
    }
}