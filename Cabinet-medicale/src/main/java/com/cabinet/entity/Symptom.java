package com.cabinet.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Symptom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_symptom;
    private String symptom;

    public Symptom() {
    }

    public Symptom(Long id_symptom, String symptom) {
        this.setId_symptom(id_symptom);
        this.setSymptom(symptom);
    }

    public Long getId_symptom() {
        return id_symptom;
    }

    public void setId_symptom(Long id_symptom) {
        this.id_symptom = id_symptom;
    }

    public String getSymptom() {
        return symptom;
    }

    public void setSymptom(String symptom) {
        this.symptom = symptom;
    }
}
