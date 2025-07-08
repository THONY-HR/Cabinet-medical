package com.cabinet.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_patient;

    private String nom;
    private String prenom;
    private String adress;
    @Temporal(TemporalType.DATE)
    private Date naissance;

    public Patient() {}

    public Patient(String nom, String prenom, Date naissance, String addressVal) {
        this.nom = nom;
        this.prenom = prenom;
        this.naissance = naissance;
        this.adress=addressVal;
    }

    public int getId_patient() { return id_patient; }
    public void setId_patient(int id_patient) { this.id_patient = id_patient; }
    public String getNom() { return nom; }
    public String getAdress() { return adress; }
    public void setNom(String nom) { this.nom = nom; }
    public void setAdress(String nom) { this.adress = nom; }
    public String getPrenom() { return prenom; }
    public void setPrenom(String prenom) { this.prenom = prenom; }
    public Date getNaissance() { return naissance; }
    public void setNaissance(Date naissance) { this.naissance = naissance; }
}