package com.cabinet.entity;

import jakarta.persistence.*;

@Entity
public class Symptomconsultation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_symptomconsultation;

    private int consultation_id;
    private int symptom_id;

    public Symptomconsultation() {}

    public Symptomconsultation(int consultation_id, int symptom_id) {
        this.consultation_id = consultation_id;
        this.symptom_id = symptom_id;
    }

    public int getId_symptomconsultation() { return id_symptomconsultation; }
    public void setId_symptomconsultation(int id_symptomconsultation) { this.id_symptomconsultation = id_symptomconsultation; }
    public int getConsultation_id() { return consultation_id; }
    public void setConsultation_id(int consultation_id) { this.consultation_id = consultation_id; }
    public int getSymptom_id() { return symptom_id; }
    public void setSymptom_id(int symptom_id) { this.symptom_id = symptom_id; }
}