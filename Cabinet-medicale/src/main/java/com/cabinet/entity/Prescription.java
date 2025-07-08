package com.cabinet.entity;

import jakarta.persistence.*;

@Entity
public class Prescription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_prescription;

    private int ordonnance_id;
    private String diagnostique;
    private String remarque;

    public Prescription() {}

    public Prescription(int ordonnance_id, String diagnostique, String remarque) {
        this.ordonnance_id = ordonnance_id;
        this.diagnostique = diagnostique;
        this.remarque = remarque;
    }

    public int getId_prescription() { return id_prescription; }
    public void setId_prescription(int id_prescription) { this.id_prescription = id_prescription; }
    public int getOrdonnance_id() { return ordonnance_id; }
    public void setOrdonnance_id(int ordonnance_id) { this.ordonnance_id = ordonnance_id; }
    public String getDiagnostique() { return diagnostique; }
    public void setDiagnostique(String diagnostique) { this.diagnostique = diagnostique; }
    public String getRemarque() { return remarque; }
    public void setRemarque(String remarque) { this.remarque = remarque; }
} 