package com.cabinet.controller;

import com.cabinet.entity.Patient;
import com.cabinet.repository.PatientRepository;
import com.cabinet.entity.Consultation;
import com.cabinet.repository.ConsultationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/patient")
public class PatientController {
    @Autowired
    private PatientRepository patientRepository;
    @Autowired
    private ConsultationRepository consultationRepository;

    @GetMapping("/list")
    public ResponseEntity<List<Patient>> findAllPatients() {
        List<Patient> list = (List<Patient>) patientRepository.findAll();
        return ResponseEntity.ok(list);
    }

    @PostMapping("/add")
    public ResponseEntity<Patient> addPatient(@RequestBody Patient patient) {
        Patient saved = patientRepository.save(patient);
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/find")
    public ResponseEntity<List<Patient>> findByNomAndPrenom(
            @RequestParam String nom,
            @RequestParam String prenom) {
        List<Patient> patients = patientRepository.findByNomAndPrenom(nom, prenom);
        return ResponseEntity.ok(patients);
    }

    @GetMapping("/derniere-consultation/{patientId}")
    public ResponseEntity<Map<String, Object>> getDerniereConsultation(@PathVariable int patientId) {
        // Vérifier si le patient existe
        Optional<Patient> patientOpt = patientRepository.findById(patientId);
        if (patientOpt.isEmpty()) {
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("success", false);
            errorResponse.put("message", "Patient non trouvé avec l'ID: " + patientId);
            return ResponseEntity.notFound().build();
        }

        Patient patient = patientOpt.get();
        
        // Récupérer toutes les consultations du patient
        List<Consultation> consultations = ((List<Consultation>) consultationRepository.findAll()).stream()
                .filter(c -> c.getPatient_id() == patientId)
                .sorted((c1, c2) -> {
                    if (c1.getDate_consultation() == null) return 1;
                    if (c2.getDate_consultation() == null) return -1;
                    return c2.getDate_consultation().compareTo(c1.getDate_consultation());
                })
                .toList();

        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("patient", Map.of(
            "id_patient", patient.getId_patient(),
            "nom", patient.getNom(),
            "prenom", patient.getPrenom(),
            "naissance", patient.getNaissance() != null ? patient.getNaissance().toString() : null
        ));

        if (consultations.isEmpty()) {
            response.put("derniere_consultation", null);
            response.put("message", "Aucune consultation trouvée pour ce patient");
        } else {
            Consultation derniereConsultation = consultations.get(0);
            response.put("derniere_consultation", Map.of(
                "id_consultation", derniereConsultation.getId_consultation(),
                "date_consultation", derniereConsultation.getDate_consultation() != null ? 
                    derniereConsultation.getDate_consultation().toString() : null,
                "patient_id", derniereConsultation.getPatient_id()
            ));
            response.put("total_consultations", consultations.size());
        }

        return ResponseEntity.ok(response);
    }
}