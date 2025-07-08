package com.cabinet.entity;

import jakarta.persistence.*;

@Entity
public class Typeexam {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_typeexam;

    private String typeexam;

    public Typeexam() {}

    public Typeexam(int id_typeExam, String typeExamVal) {
        this.setId_typeexam(id_typeExam);
        this.setTypeexam(typeExamVal);
    }

    public int getId_typeexam() {
        return id_typeexam;
    }

    public void setId_typeexam(int id_typeExam) {
        this.id_typeexam = id_typeExam;
    }

    public String getTypeexam() {
        return typeexam;
    }

    public void setTypeexam(String typeExam) {
        this.typeexam = typeExam;
    }
}
