package com.cabinet.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Phrarmaceuticals {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id_phrarmaceuticals;
    String phrarmaceutical;
    int unite_id;
    double value;
    private double prix;

    public Phrarmaceuticals() {
    }

    public Phrarmaceuticals(Long id_phrarmaceuticals, String phrarmaceutical, int unite_id,double valAdd) {
        this.setId_phrarmaceuticals(id_phrarmaceuticals);
        this.setPhrarmaceutical(phrarmaceutical);
        this.setUniteId(unite_id);
        this.setValue(valAdd);
    }

    public double getUniteId() {
        return unite_id;
    }

    public void setUniteId(int val) {
        this.unite_id = val;
    }
    public Long getId_phrarmaceuticals() {
        return id_phrarmaceuticals;
    }

    public void setId_phrarmaceuticals(Long id_phrarmaceuticals) {
        this.id_phrarmaceuticals = id_phrarmaceuticals;
    }

    public String getPhrarmaceutical() {
        return phrarmaceutical;
    }

    public void setPhrarmaceutical(String phrarmaceutical) {
        this.phrarmaceutical = phrarmaceutical;
    }

    public double getValue() {
        return value;
    }

    public void setValue(double val) {
        this.value = val;
    }

    public double getPrix() {
        return prix;
    }

    public void setPrix(double prix) {
        this.prix = prix;
    }
}
