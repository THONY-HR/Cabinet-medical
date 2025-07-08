package com.cabinet.controller;

import com.cabinet.entity.Exam;
import com.cabinet.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/exam")
public class ExamController {
    @Autowired
    private ExamRepository examRepository;

    @GetMapping("/list")
    public ResponseEntity<List<Exam>> findAllExams() {
        List<Exam> list = (List<Exam>) examRepository.findAll();
        return ResponseEntity.ok(list);
    }

    @PostMapping("/add")
    public ResponseEntity<Exam> addExam(@RequestBody Exam exam) {
        Exam saved = examRepository.save(exam);
        return ResponseEntity.ok(saved);
    }
}
