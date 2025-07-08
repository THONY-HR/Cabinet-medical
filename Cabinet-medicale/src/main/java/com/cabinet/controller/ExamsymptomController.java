package com.cabinet.controller;

import com.cabinet.dto.ExamSymptomDetailDTO;
import com.cabinet.entity.Examsymptom;
import com.cabinet.repository.ExamsymptomRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/examsymptom")
public class ExamsymptomController {
    @Autowired
    private ExamsymptomRepository examsymptomRepository;

    @PersistenceContext
    private EntityManager entityManager;

    @GetMapping("/list")
    public ResponseEntity<List<Examsymptom>> findAllExamsymptoms() {
        List<Examsymptom> list = (List<Examsymptom>) examsymptomRepository.findAll();
        return ResponseEntity.ok(list);
    }

    @PostMapping("/add")
    public ResponseEntity<Examsymptom> addExamsymptom(@RequestBody Examsymptom examsymptom) {
        Examsymptom saved = examsymptomRepository.save(examsymptom);
        return ResponseEntity.ok(saved);
    }

    // Jointure pour récupérer toutes les infos Exam + Symptom pour chaque Examsymptom
    @GetMapping("/details")
    public ResponseEntity<List<ExamSymptomDetailDTO>> getExamSymptomDetails() {
        List<Object[]> results = entityManager.createQuery(
            "SELECT e.id_examSymptom, ex.id_exam, ex.exam, s.id_symptom, s.symptom " +
            "FROM Examsymptom e " +
            "JOIN Exam ex ON e.exam_id = ex.id_exam " +
            "JOIN Symptom s ON e.symptom_id = s.id_symptom", Object[].class)
            .getResultList();

        List<ExamSymptomDetailDTO> dtos = results.stream()
            .map(obj -> new ExamSymptomDetailDTO(
                (int) obj[0],
                (int) obj[1],
                (String) obj[2],
                (long) obj[3],
                (String) obj[4]
            ))
            .collect(Collectors.toList());

        return ResponseEntity.ok(dtos);
    }
}
