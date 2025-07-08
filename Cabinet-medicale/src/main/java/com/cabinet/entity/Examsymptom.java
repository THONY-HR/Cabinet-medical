package com.cabinet.entity;

import jakarta.persistence.*;

@Entity
public class Examsymptom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_examSymptom;

    private int exam_id;
    @Column(name = "symptom_id")
    private int symptom_id;

    public Examsymptom() {}

    public Examsymptom(int exam_id, int symptom_id) {
        this.exam_id = exam_id;
        this.symptom_id = symptom_id;
    }

    public int getId_examSymptom() {
        return id_examSymptom;
    }

    public void setId_examSymptom(int id_examSymptom) {
        this.id_examSymptom = id_examSymptom;
    }

    public int getExam_id() {
        return exam_id;
    }

    public void setExam_id(int exam_id) {
        this.exam_id = exam_id;
    }

    public int getSymptom_id() {
        return symptom_id;
    }

    public void setSymptom_id(int symptom_id) {
        this.symptom_id = symptom_id;
    }
}
