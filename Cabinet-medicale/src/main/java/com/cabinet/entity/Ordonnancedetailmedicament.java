package com.cabinet.entity;

import jakarta.persistence.*;

@Entity
public class Ordonnancedetailmedicament {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_ordonnance_detail_medicament;

    private int ordonnance_id;
    private int phrarmaceutical_id;
    private int quantite;
    private String frequence;
    private String duree;

    public Ordonnancedetailmedicament() {}

    public Ordonnancedetailmedicament(int ordonnance_id, int phrarmaceutical_idVal, int quantite, String frequence, String duree) {
        this.ordonnance_id = ordonnance_id;
        this.phrarmaceutical_id = phrarmaceutical_idVal;
        this.quantite = quantite;
        this.frequence = frequence;
        this.duree = duree;
    }

    public int getId_ordonnance_detail_medicament() { return id_ordonnance_detail_medicament; }
    public void setId_ordonnance_detail_medicament(int id_ordonnance_detail_medicament) { this.id_ordonnance_detail_medicament = id_ordonnance_detail_medicament; }
    public int getOrdonnance_id() { return ordonnance_id; }
    public void setOrdonnance_id(int ordonnance_id) { this.ordonnance_id = ordonnance_id; }
    public int getPhrarmaceutical_id() { return phrarmaceutical_id; }
    public void setPhrarmaceutical_id(int phrarmaceutical_id) { this.phrarmaceutical_id = phrarmaceutical_id; }
    public int getQuantite() { return quantite; }
    public void setQuantite(int quantite) { this.quantite = quantite; }
    public String getFrequence() { return frequence; }
    public void setFrequence(String frequence) { this.frequence = frequence; }
    public String getDuree() { return duree; }
    public void setDuree(String duree) { this.duree = duree; }
}