package com.cabinet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.cabinet.entity.Unite;
import com.cabinet.repository.UniteRepository;

@RestController
@RequestMapping("/unit")
public class UniteController {
    @Autowired
    private UniteRepository uniteRepository;

    @GetMapping("/list")
    public ResponseEntity<List<Unite>> findAllVitalParameter() {
        List<Unite> listVitalParameter = (List<Unite>) uniteRepository.findAll();
        return ResponseEntity.ok(listVitalParameter);
    }

    @PostMapping("/add")
    public ResponseEntity<Unite> addUnite(@RequestBody Unite unite) {
        Unite savedUnite = uniteRepository.save(unite);
        System.out.println("CREATE UNITE");
        System.out.println(unite);
        return ResponseEntity.ok(savedUnite);
    }
}
