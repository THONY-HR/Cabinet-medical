package com.cabinet.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Parameterpatient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_parametre_patient;

    private int patient_id;
    private int parametre_vitaux_id;
    private double valeur;
    private LocalDate date = LocalDate.now();

    public Parameterpatient() {
        this.date = LocalDate.now();
    }

    public Parameterpatient(int patient_id, int parametre_vitaux_id, double valeur) {
        this.patient_id = patient_id;
        this.parametre_vitaux_id = parametre_vitaux_id;
        this.valeur = valeur;
        this.date = LocalDate.now();
    }

    public int getId_parametre_patient() { return id_parametre_patient; }
    public void setId_parametre_patient(int id_parametre_patient) { this.id_parametre_patient = id_parametre_patient; }
    public int getPatient_id() { return patient_id; }
    public void setPatient_id(int patient_id) { this.patient_id = patient_id; }
    public int getParametre_vitaux_id() { return parametre_vitaux_id; }
    public void setParametre_vitaux_id(int parametre_vitaux_id) { this.parametre_vitaux_id = parametre_vitaux_id; }
    public double getValeur() { return valeur; }
    public void setValeur(double valeur) { this.valeur = valeur; }
    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }
}