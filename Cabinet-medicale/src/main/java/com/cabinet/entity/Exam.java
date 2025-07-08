package com.cabinet.entity;

import jakarta.persistence.*;

@Entity
public class Exam {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_exam;

    private int type_exam_id;
    private String exam;

    public Exam() {}

    public Exam(int type_exam_id, String exam) {
        this.setType_exam_id(type_exam_id);
        this.setExam(exam);
    }

    public int getId_exam() {
        return id_exam;
    }

    public void setId_exam(int id_exam) {
        this.id_exam = id_exam;
    }

    public int getType_exam_id() {
        return type_exam_id;
    }

    public void setType_exam_id(int type_exam_id) {
        this.type_exam_id = type_exam_id;
    }

    public String getExam() {
        return exam;
    }

    public void setExam(String exam) {
        this.exam = exam;
    }
}
