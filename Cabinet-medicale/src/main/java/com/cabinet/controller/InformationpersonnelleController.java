package com.cabinet.controller;

import com.cabinet.entity.Informationpersonnelle;
import com.cabinet.repository.InformationpersonnelleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/informationpersonnelle")
public class InformationpersonnelleController {
    @Autowired
    private InformationpersonnelleRepository informationpersonnelleRepository;

    @GetMapping("/list")
    public ResponseEntity<List<Informationpersonnelle>> findAllInformationpersonnelles() {
        List<Informationpersonnelle> list = (List<Informationpersonnelle>) informationpersonnelleRepository.findAll();
        return ResponseEntity.ok(list);
    }

    @PostMapping("/add")
    public ResponseEntity<Informationpersonnelle> addInformationpersonnelle(@RequestBody Informationpersonnelle info) {
        Informationpersonnelle saved = informationpersonnelleRepository.save(info);
        return ResponseEntity.ok(saved);
    }
}