package com.cabinet.entity;

import jakarta.persistence.*;

@Entity
public class StockMedicament {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_stock;

    private int phrarmaceutical_id;
    private int quantite;
    private int type_mouvement = 0; // 0 = sortie, 1 = entree

    public StockMedicament() {}

    public StockMedicament(int phrarmaceutical_id, int quantite) {
        this.phrarmaceutical_id = phrarmaceutical_id;
        this.quantite = quantite;
    }

    public Long getId_stock() { return id_stock; }
    public void setId_stock(Long id_stock) { this.id_stock = id_stock; }
    public int getPhrarmaceutical_id() { return phrarmaceutical_id; }
    public void setPhrarmaceutical_id(int phrarmaceutical_id) { this.phrarmaceutical_id = phrarmaceutical_id; }
    public int getQuantite() { return quantite; }
    public void setQuantite(int quantite) { this.quantite = quantite; }
    public int getType_mouvement() { return type_mouvement; }
    public void setType_mouvement(int type_mouvement) { this.type_mouvement = type_mouvement; }
} 