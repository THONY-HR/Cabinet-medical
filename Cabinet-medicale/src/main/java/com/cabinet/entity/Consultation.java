package com.cabinet.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class Consultation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_consultation;

    private int patient_id;
    @Temporal(TemporalType.DATE)
    private Date date_consultation;

    public Consultation() {}

    public Consultation(int patient_id, Date date_consultation) {
        this.patient_id = patient_id;
        this.date_consultation = date_consultation;
    }

    public int getId_consultation() { return id_consultation; }
    public void setId_consultation(int id_consultation) { this.id_consultation = id_consultation; }
    public int getPatient_id() { return patient_id; }
    public void setPatient_id(int patient_id) { this.patient_id = patient_id; }
    public Date getDate_consultation() { return date_consultation; }
    public void setDate_consultation(Date date_consultation) { this.date_consultation = date_consultation; }
}