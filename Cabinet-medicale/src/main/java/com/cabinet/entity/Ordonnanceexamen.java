package com.cabinet.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class Ordonnanceexamen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_ordonnance_examen;

    private int examen_id;
    private int ordonnance_id;
    @Temporal(TemporalType.DATE)
    private Date date_traitement;

    public Ordonnanceexamen() {}

    public Ordonnanceexamen(int examen_id, int ordonnance_id, Date date_traitement) {
        this.examen_id = examen_id;
        this.ordonnance_id = ordonnance_id;
        this.date_traitement = date_traitement;
    }

    public int getId_ordonnance_examen() { return id_ordonnance_examen; }
    public void setId_ordonnance_examen(int id_ordonnance_examen) { this.id_ordonnance_examen = id_ordonnance_examen; }
    public int getExamen_id() { return examen_id; }
    public void setExamen_id(int examen_id) { this.examen_id = examen_id; }
    public int getOrdonnance_id() { return ordonnance_id; }
    public void setOrdonnance_id(int ordonnance_id) { this.ordonnance_id = ordonnance_id; }
    public Date getDate_traitement() { return date_traitement; }
    public void setDate_traitement(Date date_traitement) { this.date_traitement = date_traitement; }
}