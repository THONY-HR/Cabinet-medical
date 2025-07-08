package com.cabinet.controller;

import com.cabinet.entity.Typeexam;
import com.cabinet.repository.TypeExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/typeexam")
public class TypeExamController {
    @Autowired
    private TypeExamRepository typeExamRepository;

    @GetMapping("/list")
    public ResponseEntity<List<Typeexam>> findAllTypeExams() {
        List<Typeexam> list = (List<Typeexam>) typeExamRepository.findAll();
        return ResponseEntity.ok(list);
    }

    @PostMapping("/add")
    public ResponseEntity<Typeexam> addTypeExam(@RequestBody Typeexam typeExam) {
        Typeexam saved = typeExamRepository.save(typeExam);
        return ResponseEntity.ok(saved);
    }
}
