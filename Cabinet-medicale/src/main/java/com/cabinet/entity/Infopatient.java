package com.cabinet.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class Infopatient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_infopatient;

    private int patient_id;
    private int informationpersonnelle_id;
    private String valeur;
    @Temporal(TemporalType.DATE)
    private Date date_consultation;

    public Infopatient() {}

    public Infopatient(int patient_id, String valeur, Date date_consultation,int info_id) {
        this.patient_id = patient_id;
        this.valeur = valeur;
        this.date_consultation = date_consultation;
        this.informationpersonnelle_id=info_id;
    }

    public int getId_infopatient() { return id_infopatient; }
    public int getInformationpersonnelle_id() { return informationpersonnelle_id; }
    public void setId_infopatient(int id_infopatient) { this.id_infopatient = id_infopatient; }
    public void setInformationpersonnelle_id(int id) { this.informationpersonnelle_id = id; }
    public int getPatient_id() { return patient_id; }
    public void setPatient_id(int patient_id) { this.patient_id = patient_id; }
    public String getValeur() { return valeur; }
    public void setValeur(String valeur) { this.valeur = valeur; }
    public Date getDate_consultation() { return date_consultation; }
    public void setDate_consultation(Date date_consultation) { this.date_consultation = date_consultation; }
}