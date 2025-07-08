package com.cabinet.entity;

import jakarta.persistence.*;

@Entity
public class Ordonnancedetailactemedicale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_ordonnance_detail_acte_medicale;

    private int ordonnance_id;
    private int acte_medicale_id;
    private String traitements;

    public Ordonnancedetailactemedicale() {}

    public Ordonnancedetailactemedicale(int ordonnance_id, int acte_medicale_id, String traitements) {
        this.ordonnance_id = ordonnance_id;
        this.acte_medicale_id = acte_medicale_id;
        this.traitements = traitements;
    }

    public int getId_ordonnance_detail_acte_medicale() { return id_ordonnance_detail_acte_medicale; }
    public void setId_ordonnance_detail_acte_medicale(int id) { this.id_ordonnance_detail_acte_medicale = id; }
    public int getOrdonnance_id() { return ordonnance_id; }
    public void setOrdonnance_id(int ordonnance_id) { this.ordonnance_id = ordonnance_id; }
    public int getActe_medicale_id() { return acte_medicale_id; }
    public void setActe_medicale_id(int acte_medicale_id) { this.acte_medicale_id = acte_medicale_id; }
    public String getTraitements() { return traitements; }
    public void setTraitements(String traitements) { this.traitements = traitements; }
} 